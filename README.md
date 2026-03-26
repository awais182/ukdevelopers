


## Run Locally

**Prerequisites:**  Node.js




> To start both front‑end and backend together with a single command, run:
> ```bash
> npm install
> npm run start:all
> ```
> A small Node script (`startAll.js`) will spawn both services so you don't need any extra packages.  
> Works reliably even when your project path contains spaces.
---

## Backend Service
A simple Node/Express backend listens on port 5000. During development the Vite server proxies `/api` requests to that backend (see `vite.config.ts`), so your React code can use **relative `/api/...` URLs**. When you build for production the frontend is served by the backend directly, so the same URLs continue to work. For additional security you can restrict backend access to localhost by setting `LOCAL_ONLY=true` in `.env`.


A backend route protects the admin data and an optional front‑end panel provides viewing/exporting.

### Setup
1. `cd server`
2. `npm install`
3. `npm run migrate`  # initializes SQLite database and default admin user
4. `npm start` or `npm run dev`  # starts backend on port 5000

Default admin credentials: `admin` / `UK_Developers@2026` (the code automatically resets the password to this value on startup; you can still change it via `server/resetAdmin.js` or `server/.env`).

### API Endpoints
- `POST /api/inquiries` – accepts JSON `{name,email,phone,projectId?,message?}`
- `POST /api/login` – admin login returns JWT
- `GET /api/inquiries` – protected, returns all inquiries
- `GET /api/export?format=csv|json` – protected, downloads inquiries data

### Frontend Integration
Contact form now sends submissions to the backend. The admin panel route (`/admin`) is only included if the environment variable `VITE_ENABLE_ADMIN` is set to `true` at build time. Leave it undefined or false to completely remove the page; the route is not linked anywhere in the UI. When running the dev server it will be available at **http://localhost:3000/admin** (the site is restricted to `localhost`).


