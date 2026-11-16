# Before you publish

All public settings live in `src/config/site.ts`. Empty values are hidden on the page.

| Setting | What to put | If left empty |
|---|---|---|
| `email` | Public contact email | Not shown in footer |
| `linkedinUrl` | Company LinkedIn URL | Not shown in footer |
| `whatsappNumber` | Digits only, with country code, e.g. `919876543210` | WhatsApp buttons hidden |
| `sheetsWebhookUrl` | Apps Script web app URL (below) | Leads go to email only |

Other content to-dos:

- **Videos:** the design-model renders are in `public/videos/`. Replace `arm-motion.mp4` (hero loop) with real hardware footage as soon as it moves. Keep files small (the hero loop is ~200 KB).

- **Team photo:** add one photo of the founder with the prototype (see the comment in the Team section).

## Contact form: where submissions go

Each submission is sent to two places at once. If one fails, the other still captures the lead.

### 1. Email (Web3Forms)

Already wired up. The key is the `VITE_WEB3FORMS_ACCESS_KEY` GitHub secret (and `.env` locally). Emails go to the address you registered with Web3Forms.

### 2. Google Sheet (Apps Script)

1. Create a Google Sheet, e.g. "Hephabots leads".
2. In the sheet: **Extensions → Apps Script**. Delete the sample code and paste in `docs/google-apps-script.gs`. Save.
3. **Deploy → New deployment →** type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Authorise when asked, then copy the **Web app URL** (ends in `/exec`).
5. Paste it into `sheetsWebhookUrl` in `src/config/site.ts`, commit and push.

Rows appear in a tab called **Leads**. If you edit the script later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.

Test it: submit the form on the live site and check both your inbox and the sheet.
