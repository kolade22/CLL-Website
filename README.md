# Crest Latitude Ltd. — Website

React + Vite (client) + Node/Express (server) + Tailwind CSS

---

## 🚀 LOCAL DEVELOPMENT

```bash
# 1. Install all dependencies
npm run install-all

# 2. Start both client and server together
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 🏗️ PRODUCTION BUILD

```bash
# Build the React app
npm run build
# → outputs to client/dist/
```

---

## 🌐 DEPLOYING TO HOST AFRICA (VPS / Node Hosting)

Host Africa offers Node.js hosting (VPS or Cloud). Steps:

### Step 1 — Upload files

Upload everything EXCEPT `node_modules` via FTP or SSH to your server.
Recommended path: `/var/www/crestlatitude/`

### Step 2 — Install dependencies on server

```bash
cd /var/www/crestlatitude
npm run install-all
```

### Step 3 — Build the frontend

```bash
npm run build
```

### Step 4 — Configure .env

Edit `server/.env` and set your real SMTP password:

```
SMTP_PASS=your_real_email_password
```

### Step 5 — Start the server with PM2 (keeps it running 24/7)

```bash
npm install -g pm2
pm2 start server/server.js --name crest-latitude
pm2 save
pm2 startup
```

### Step 6 — Configure Nginx reverse proxy

Point your domain to Node port 5000:

```nginx
server {
    listen 80;
    server_name crestlatitude.ng www.crestlatitude.ng;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Then install SSL:

```bash
sudo certbot --nginx -d crestlatitude.ng -d www.crestlatitude.ng
```

---

## 📧 EMAIL SETUP (Host Africa cPanel)

1. Log into cPanel → Email Accounts → Create
2. Create: info@crestlatitude.ng (use strong password)
3. Update server/.env: SMTP_PASS=that_password
4. Restart server: `pm2 restart crest-latitude`

### Staff emails to create:

- admin@crestlatitude.ng
- support@crestlatitude.ng
- training@crestlatitude.ng
- projects@crestlatitude.ng

### Email client settings:

- IMAP: mail.crestlatitude.ng | Port 993 | SSL
- SMTP: mail.crestlatitude.ng | Port 465 | SSL

---
