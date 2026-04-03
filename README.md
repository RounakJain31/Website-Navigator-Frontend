# MERN Website Navigator

# Project Overview
This is a full-stack MERN application that allows users to upload an Excel or CSV file containing website URLs and navigate through them inside the application.
The app extracts URLs from the uploaded file, displays them inside an iframe, and allows navigation using Previous and Next buttons.
---

# Features
* Upload Excel (.xlsx, .xls) or CSV file
* Extract URLs from file on backend
* Display websites using iframe
* Navigate with Next and Previous buttons
* Responsive UI using Material UI
* Fallback option to open blocked websites in a new tab

---

# Tech Stack
* Frontend: React.js + Material UI
* Backend: Node.js + Express.js
* File Parsing: Multer + XLSX

# Project Structure
project/
│
├── backend/
│   ├── uploads/
│   ├── server.js
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── App.js
```

# ⚙️ Setup Instructions

# 1 Backend Setup
cd backend
npm install
npm run dev

# 2 Frontend Setup
cd frontend
npm install
npm start
```

# Sample Excel / CSV Format

| Name   | URL                           |
| ------ | ----------------------------- |
| Google | https://example.com           |
| GitHub | https://github.com            |
| MDN    | https://developer.mozilla.org |

👉 Important:

* Column name must be **URL**
* URLs must include **http:// or https://**
---

# Assumptions

* The uploaded file contains a column named "URL"
* Only valid URLs are processed
* Some websites may block iframe loading due to security policies

---

# Known Limitations
Some websites (like Google, Facebook) block iframe embedding due to security headers.
👉 Solution implemented:
* "Open in new tab" fallback option

# 🎥 Demo Video

(Add demo video link here)

# Conclusion
This project demonstrates file upload handling, backend data processing, and dynamic frontend rendering using the MERN stack.

This project demonstrates file upload handling, backend data processing, and dynamic frontend rendering using the MERN stack.
