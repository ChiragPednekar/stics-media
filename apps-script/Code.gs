/**
 * Stics Media — enquiry form -> Google Sheet
 *
 * This runs INSIDE your Google Sheet (Extensions > Apps Script).
 * It receives each form submission and appends a row.
 * Full setup steps are in ../GOOGLE-SHEET-SETUP.md
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Enquiries') || ss.insertSheet('Enquiries');

    // Write the header row once.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Work Email', 'Company', 'Website', 'Marketing Goal', 'Budget', 'Message']);
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    }

    var p = (e && e.parameter) || {};
    sheet.appendRow([
      new Date(),
      p.name    || '',
      p.email   || '',
      p.company || '',
      p.website || '',
      p.goal    || '',
      p.budget  || '',
      p.message || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Lets you open the Web App URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('Stics Media enquiry endpoint is live.');
}
