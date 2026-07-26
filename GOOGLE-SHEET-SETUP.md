# Connect the enquiry form to a Google Sheet

Every "Book a Strategy Call" form submission will drop into a Google Sheet you own.
This takes ~2–3 minutes. You do steps 1–5 (only you can, it's your Google account),
then paste one URL and it's live.

---

## Your sheet link (fill this in so you can find it later)

- **Google Sheet:** _paste the sheet link here after step 1_
- **Web App URL:** _paste the deployment URL here after step 4_

---

## Steps

**1. Create the sheet**
- Go to https://sheets.new (creates a blank Google Sheet in your Drive).
- Rename it something like `Stics Media — Enquiries`.
- Move it into whatever Drive folder you like so you can find it.

**2. Open Apps Script**
- In the sheet: **Extensions → Apps Script**.
- Delete any starter code in `Code.gs`.
- Open `apps-script/Code.gs` from this project, copy ALL of it, and paste it in.
- Click the **Save** (disk) icon.

**3. Authorize**
- Click **Run** once (the `doGet` function is fine).
- Google will ask for permission → **Review permissions → pick your account →
  Advanced → Go to (project) → Allow**. (This is Google warning you about your
  own script; it's expected.)

**4. Deploy as a Web App**
- Top right: **Deploy → New deployment**.
- Click the gear ⚙ next to "Select type" → choose **Web app**.
- Set:
  - **Execute as:** Me (your email)
  - **Who has access:** **Anyone**
- Click **Deploy** → copy the **Web app URL** (ends in `/exec`).

**5. Give me the URL**
- Paste the Web App URL into the top of the `<script>` in `index.html`:
  ```js
  const SHEET_ENDPOINT = 'https://script.google.com/macros/s/XXXXX/exec';
  ```
  …or just send me the URL and I'll paste it, commit, and push so it goes live
  on Vercel.

---

## How it works
- The form posts Name, Work Email, Company, Website, Marketing Goal, Budget, and
  Message to your Web App URL.
- The script appends one row per submission to a tab called **Enquiries**
  (it creates the header row automatically on the first submission).
- Nothing is stored on the website or with any third party — the data goes
  straight into your own Google Sheet.

## Test it
- After connecting, submit the form on the live site once.
- A new row should appear in the **Enquiries** tab within a couple of seconds.
