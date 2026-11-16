/**
 * Hephabots website form -> Google Sheet (and optional email).
 * Paste into Extensions > Apps Script of the Google Sheet you want leads in. See docs/FORM_SETUP.md.
 */

// Web3Forms already emails you each lead. Set to true only if you want a second email from Google.
const SEND_EMAIL = false;
const NOTIFY_EMAIL = "you@example.com";

const COLUMNS = [
  ["submittedAt", "Submitted at"],
  ["name", "Name"],
  ["organisation", "Organisation"],
  ["contact", "Email or phone"],
  ["task", "What would you like the arm to do?"],
  ["page", "Page"],
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads") ||
      SpreadsheetApp.getActiveSpreadsheet().insertSheet("Leads");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.map((c) => c[1]));
      sheet.setFrozenRows(1);
    }

    // Prefix with ' so phone numbers like +91... are stored as text, not formulas.
    const row = COLUMNS.map(([key]) => {
      const v = String(data[key] == null ? "" : data[key]).slice(0, 2000);
      return /^[=+\-@]/.test(v) ? "'" + v : v;
    });
    sheet.appendRow(row);

    if (SEND_EMAIL) {
      const body = COLUMNS.map(([key, label]) => label + ": " + (data[key] || "")).join("\n");
      MailApp.sendEmail(NOTIFY_EMAIL, "Website enquiry: " + (data.organisation || data.name || ""), body);
    }

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
