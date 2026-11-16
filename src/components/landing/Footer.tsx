import { site, whatsappLink } from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        <span className="font-semibold text-foreground">Hephabots Autonomous Systems Pvt. Ltd.</span> · Bengaluru
      </p>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {site.email && (
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-primary">
              {site.email}
            </a>
          </li>
        )}
        {site.linkedinUrl && (
          <li>
            <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              LinkedIn
            </a>
          </li>
        )}
        <li>© {new Date().getFullYear()}</li>
      </ul>
    </div>
  </footer>
);

/** Floating click-to-chat button, bottom right. Hidden until a WhatsApp number is set. */
export const WhatsAppFloat = () =>
  whatsappLink ? (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hephabots on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-lg hover:bg-[#1a7a43] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  ) : null;

export default Footer;
