import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { site, web3formsKey, whatsappLink } from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";

const empty = { name: "", organisation: "", contact: "", task: "" };
type Status = "idle" | "sending" | "sent" | "error";

/* 7. Call to action (closing band) with the four-field form */
const ContactSection = () => {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [botcheck, setBotcheck] = useState(false);

  const set = (key: keyof typeof empty) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (botcheck) return;
    setStatus("sending");

    const jobs: Promise<unknown>[] = [];
    const isEmail = form.contact.includes("@");

    // 1. Email via Web3Forms
    if (web3formsKey) {
      jobs.push(
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `Website enquiry: ${form.organisation || form.name}`,
            from_name: "Hephabots website",
            ...(isEmail ? { replyto: form.contact } : {}),
            Name: form.name,
            Organisation: form.organisation || "Not given",
            "Email or phone": form.contact,
            "What would you like the arm to do?": form.task,
          }),
        })
          .then((r) => r.json())
          .then((d) => {
            if (!d.success) throw new Error(d.message || "Web3Forms error");
          }),
      );
    }

    // 2. Row in Google Sheet via Apps Script (no-cors: the response is opaque, so a resolved fetch counts as sent)
    if (site.sheetsWebhookUrl) {
      jobs.push(
        fetch(site.sheetsWebhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ ...form, submittedAt: new Date().toISOString(), page: window.location.href }),
        }),
      );
    }

    if (jobs.length === 0) {
      console.error("Contact form has no destination: set VITE_WEB3FORMS_ACCESS_KEY and/or site.sheetsWebhookUrl.");
      setStatus("error");
      return;
    }

    const results = await Promise.allSettled(jobs);
    if (results.some((r) => r.status === "fulfilled")) {
      setStatus("sent");
      setForm(empty);
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section bg-primary text-primary-foreground">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        <div>
          <h2 className="h2 text-primary-foreground">Have a repetitive job a simple arm could do?</h2>
          <p className="mt-4 text-lg text-primary-foreground/85">
            We’re looking for pilot sites, partners and people to build this with us.
          </p>
          {(site.email || whatsappLink) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {whatsappLink && <WhatsAppButton />}
              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold hover:bg-primary-foreground/10"
                >
                  {site.email}
                </a>
              )}
            </div>
          )}
        </div>

        <div className="rounded-lg bg-card p-5 text-foreground sm:p-8">
          {status === "sent" ? (
            <div className="py-8 text-center" role="status">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden />
              <h3 className="text-2xl">Thanks. We’ll be in touch.</h3>
              <button type="button" onClick={() => setStatus("idle")} className="btn-secondary mt-6">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <Field id="name" label="Name">
                <input id="name" required autoComplete="name" className="field" value={form.name} onChange={set("name")} />
              </Field>
              <Field id="organisation" label="Organisation" optional>
                <input id="organisation" autoComplete="organization" className="field" value={form.organisation} onChange={set("organisation")} />
              </Field>
              <Field id="contact" label="Email or phone">
                <input id="contact" required autoComplete="email" className="field" value={form.contact} onChange={set("contact")} />
              </Field>
              <Field id="task" label="What would you like the arm to do?">
                <textarea id="task" required rows={3} className="field resize-y" value={form.task} onChange={set("task")} />
              </Field>

              {/* Spam honeypot: hidden from people */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
              />

              <div>
                <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Talk to us"}
                </button>
                {status === "error" && (
                  <p className="mt-3 text-sm text-destructive" role="alert">
                    Sorry, that didn’t go through. Please try again
                    {site.email ? ` or email ${site.email}.` : whatsappLink ? " or message us on WhatsApp." : "."}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Field = ({ id, label, optional, children }: { id: string; label: string; optional?: boolean; children: ReactNode }) => (
  <div>
    <label htmlFor={id} className="field-label">
      {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
    </label>
    {children}
  </div>
);

const WhatsAppButton = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-primary-foreground px-6 py-3 font-semibold text-primary hover:bg-primary-foreground/90"
  >
    <WhatsAppIcon className="h-5 w-5" />
    WhatsApp
  </a>
);

export default ContactSection;
