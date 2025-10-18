// // Replace SHEET_NAME with your sheet tab name
// const SHEET_NAME = "VirTech_Enrollments";

// function doGet(e) {
//   // Return simple message if accessed via browser
//   return ContentService
//     .createTextOutput(JSON.stringify({ status: "ok", message: "Use POST to submit data." }))
//     .setMimeType(ContentService.MimeType.JSON);
// }

// function doPost(e) {
//   try {
//     // Parse JSON payload
//     const body = JSON.parse(e.postData.contents);
//     const { name, email, phone, location, message } = body;

//     // Basic validation
//     if (!name || !email || !phone) {
//       return ContentService
//         .createTextOutput(JSON.stringify({ status: "error", message: "Missing required fields." }))
//         .setMimeType(ContentService.MimeType.JSON);
//     }

//     // Append to Google Sheet
//     const ss = SpreadsheetApp.getActiveSpreadsheet();
//     const sheet = ss.getSheetByName(SHEET_NAME);

//     if (!sheet) {
//       return ContentService
//         .createTextOutput(JSON.stringify({ status: "error", message: "Sheet not found." }))
//         .setMimeType(ContentService.MimeType.JSON);
//     }

//     // Add header row if empty
//     if (sheet.getLastRow() === 0) {
//       sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Location", "Message"]);
//     }

//     const timestamp = new Date();
//     sheet.appendRow([timestamp, name, email, phone, location, message]);

//     // Send confirmation email to user
//     GmailApp.sendEmail(
//       email,
//       "VirTech Academy — Reservation Received",
//       `Hello ${name},

// Thank you for reserving your seat at VirTech Academy. We have received your details and will contact you shortly.

// Course: Data Analytics (8-week)
// If you have any questions, reply to this email.

// Regards,
// VirTech Academy`
//     );

//     return ContentService
//       .createTextOutput(JSON.stringify({ status: "success" }))
//       .setMimeType(ContentService.MimeType.JSON);

//   } catch (err) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }


// }


// script.js – handles fallback & debug for Google Sheet form

console.log("VirTech site loaded successfully.");

// No additional logic needed; faq.js handles form submission.


// const SHEET_ID = "1nzQsjRASLyRlMtZ4viGdiu7HZVNZGVyatChqrxfFgbc"; // your sheet ID
// const SHEET_NAME = "VirTech_Enrollments";

// function doPost(e) {
//   try {
//     const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
//     const data = JSON.parse(e.postData.contents);
//     const { name, email, phone, location, message } = data;
//     const date = new Date();

//     // Add header if sheet empty
//     if (sheet.getLastRow() === 0) {
//       sheet.appendRow([
//         "Timestamp",
//         "Name",
//         "Email",
//         "Phone",
//         "Location",
//         "Message",
//       ]);
//     }

//     // Append new row
//     sheet.appendRow([date, name, email, phone, location, message]);

//     // Send confirmation email
//     GmailApp.sendEmail(
//       email,
//       "🎓 VirTech Academy - Seat Reservation Confirmation",
//       `Hello ${name},

// Thank you for reserving your seat at VirTech Academy!
// We’ve received your details and our team will contact you soon.

// Your submitted details:
// Email: ${email}
// Phone: ${phone}
// Location: ${location}
// Message: ${message}

// Warm regards,
// VirTech Team`
//     );

//     // Respond success
//     return ContentService.createTextOutput(
//       JSON.stringify({
//         status: "success",
//         message: "Data stored successfully!",
//       })
//     ).setMimeType(ContentService.MimeType.JSON);
//   } catch (err) {
//     Logger.log("Error: " + err);
//     return ContentService.createTextOutput(
//       JSON.stringify({ status: "error", message: err.message })
//     ).setMimeType(ContentService.MimeType.JSON);
//   }
// }

// const SPREADSHEET_ID =
//   "AKfycbypD0ZsVQs-nto8zOF-zBgYfqd2N4hY9G7yn-BFnsbp0dESBrom9oBRGPii-imNMyXz3A"; // <<--- REPLACE with your sheet ID
// const SHEET_NAME = "VirTech_Enrollments"; // <<--- update if your sheet tab name differs

// // AKfycbypD0ZsVQs-nto8zOF-zBgYfqd2N4hY9G7yn-BFnsbp0dESBrom9oBRGPii-imNMyXz3A
// // https://script.google.com/macros/s/AKfycbypD0ZsVQs-nto8zOF-zBgYfqd2N4hY9G7yn-BFnsbp0dESBrom9oBRGPii-imNMyXz3A/exec
// function doGet(e) {
//   return ContentService.createTextOutput(
//     JSON.stringify({ status: "ok", message: "Use POST to submit data." })
//   ).setMimeType(ContentService.MimeType.JSON);
// }

// function doPost(e) {
//   try {
//     // Parse incoming JSON
//     const body =
//       e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
//     const name = body.name || "";
//     const email = body.email || "";
//     const phone = body.phone || "";
//     const location = body.location || "";
//     const message = body.message || "";
//     const timestamp = new Date();

//     // Basic validation
//     if (!name || !email || !phone) {
//       return ContentService.createTextOutput(
//         JSON.stringify({ status: "error", message: "Missing required fields." })
//       ).setMimeType(ContentService.MimeType.JSON);
//     }

//     // Append to sheet
//     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
//     const sh = ss.getSheetByName(SHEET_NAME);
//     if (!sh) {
//       return ContentService.createTextOutput(
//         JSON.stringify({ status: "error", message: "Sheet not found." })
//       ).setMimeType(ContentService.MimeType.JSON);
//     }

//     // Add header if first row empty
//     if (sh.getLastRow() === 0) {
//       sh.appendRow([
//         "Timestamp",
//         "Name",
//         "Email",
//         "Phone",
//         "Location",
//         "Message",
//       ]);
//     }

//     sh.appendRow([timestamp, name, email, phone, location, message]);

//     // Send confirmation email to student
//     const subject = "VirTech Academy — Reservation Received";
//     const plainBody =
//       "Hello " +
//       name +
//       ",\n\n" +
//       "Thank you for reserving your seat at VirTech Academy. We have received your details and will contact you shortly.\n\n" +
//       "Course: Data Analytics (8-week)\n" +
//       "If you have any questions, reply to this email.\n\n" +
//       "Regards,\nVirTech Academy";
//     // Send email from your account (the account executing the script)
//     GmailApp.sendEmail(email, subject, plainBody);

//     // Optionally: send internal notification to admin (uncomment & set ADMIN_EMAIL)
//     // const ADMIN_EMAIL = 'you@yourdomain.com';
//     // GmailApp.sendEmail(ADMIN_EMAIL, 'New reservation: ' + name, 'Details:\n' + JSON.stringify(body));

//     return ContentService.createTextOutput(
//       JSON.stringify({ status: "success" })
//     ).setMimeType(ContentService.MimeType.JSON);
//   } catch (err) {
//     return ContentService.createTextOutput(
//       JSON.stringify({ status: "error", message: err.message })
//     ).setMimeType(ContentService.MimeType.JSON);
//   }
// }
