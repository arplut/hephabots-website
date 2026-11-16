/**
 * Site-wide settings. Edit these values before publishing.
 * Anything left empty is hidden on the page rather than shown broken.
 */
export const site = {
  /** Public contact email shown in the footer. e.g. "hello@hephabots.com" */
  email: "",

  /** Company LinkedIn page. e.g. "https://www.linkedin.com/company/hephabots" */
  linkedinUrl: "",

  /**
   * WhatsApp number in international format, digits only, no "+" or spaces.
   * e.g. "919876543210". Leave empty to hide the WhatsApp buttons.
   */
  whatsappNumber: "",

  /** Pre-filled WhatsApp message. */
  whatsappMessage: "Hi Hephabots, I'd like to talk about a job for your robot arm.",

  /**
   * Google Apps Script web app URL that appends form submissions to a Google Sheet.
   * See docs/FORM_SETUP.md. e.g. "https://script.google.com/macros/s/XXXX/exec"
   */
  sheetsWebhookUrl: "",

};

/** Email delivery uses Web3Forms. The key is set as a build secret (VITE_WEB3FORMS_ACCESS_KEY). */
export const web3formsKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ?? "";

export const whatsappLink = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "";
