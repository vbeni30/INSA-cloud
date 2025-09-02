# INSA Cloud – Complete Developer & Handoff Documentation

---

## 1. Project Overview

**Project Name:** INSA Cloud Services Portal  
**Framework:** Next.js (App Router)  
**Language:** TypeScript  
**Styling:** Tailwind CSS + PostCSS  
**Hosting Environment:** Ubuntu Linux  
**Package Manager:** pnpm (preferred)  
**Purpose:** An internal platform designed to help INSA staff, students, and administrators discover, estimate, and request cloud resources and services efficiently.  
**Target Users:** Internal employees, students, and IT administrators.  
**Current Version:** v1.0.0  
**Last Update:** 2025-09-02

**Key Features:**
- Interactive pricing calculator to estimate cloud service usage and cost.
- Catalog of available services with detailed descriptions and icons.
- Case studies and project showcases under Solutions page.
- Responsive design supporting both desktop and mobile devices.
- Dark/light mode toggle for accessibility and user preference.
- Contact form integration via Web3Forms for easy user communication.
- Reusable, modular components for faster development and scalability.

---

## 2. Project Architecture & Structure

```
INSA-cloud/
├── app/
│   ├── about/
│   ├── contact/
│   ├── pricing/
│   ├── services/
│   ├── solutions/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── hooks/
├── layout/
├── lib/
├── public/
├── sections/
├── styles/
└── ui/
```

### 2.1 app/ – Pages & Routes
- **about/** – `/about`  
- **contact/** – `/contact`  
- **pricing/** – `/pricing`  
- **services/** – `/services`  
- **solutions/** – `/solutions`  
- **globals.css** – Global styling
- **layout.tsx** – Wraps all pages with Navbar, Footer, theme
- **page.tsx** – Homepage content

### 2.2 components/
Reusable components: Button, Card, Navbar, Footer, Input, Modal, Toast

### 2.3 hooks/
Custom hooks: use-mobile, use-toast

### 2.4 layout/
Global layout structure and theme provider

### 2.5 lib/
Utility functions and constants

### 2.6 public/
Static assets: images, fonts, icons

### 2.7 sections/
Modular content blocks

### 2.8 styles/
Tailwind & PostCSS configs

### 2.9 ui/
Low-level UI primitives

---

## 3. Development Setup

### Prerequisites
- Node.js >= 20
- pnpm >= 8
- Ubuntu Linux

### Installation
```bash
git clone https://github.com/vbeni30/INSA-cloud.git
cd INSA-cloud
pnpm install
```

### Running Locally
```bash
pnpm dev -- -H 0.0.0.0 -p 3000
```

### Build & Production Start
```bash
pnpm build
pnpm start
```

### Linting & Formatting
```bash
pnpm lint
pnpm format
```

---

## 4. How to Modify Each Page
- **Home (`app/page.tsx`)** – Hero, CTA, featured sections, images in `public/images/home/`
- **About (`app/about/page.tsx`)** – Mission, vision, images `public/images/about/`
- **Contact (`app/contact/page.tsx`)** – Form fields, Web3Forms API key
- **Pricing (`app/pricing/page.tsx`)** – Calculator variables, labels, components
- **Services (`app/services/page.tsx`)** – Service descriptions, icons/images
- **Solutions (`app/solutions/page.tsx`)** – Projects, research, images
- **Global Components:** Navbar (`components/Navbar.tsx`), Footer (`components/Footer.tsx`), Colors/typography (`styles/tailwind.config.ts`), Global styles (`app/globals.css`)

---

## 5. Deployment

### Initial Deployment
```bash
ssh ubuntu@<server-ip>
cd ~/Downloads/insa/INSA-cloud
pnpm install
pnpm build
pnpm start
```

### Persistent Deployment with PM2
```bash
sudo npm install -g pm2
pm2 start npm --name "insa-cloud" -- run start
pm2 save
pm2 status
```

---

## 6. Linux/Ubuntu Integration
- SSH & RDP access
- Services managed via systemctl or PM2
- Logs: `pm2 logs insa-cloud`

---

## 7. Contact Form Setup (Web3Forms)
1. Go to [Web3Forms](https://web3forms.com/#start)
2. Sign up and get an API key
3. Update your contact page API integration with the key
4. Example `.env.local`:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=<your-api-key>
```

---

## 8. Maintenance & Updates
- Node.js LTS update: `nvm install --lts`
- Update dependencies: `pnpm update`
- Backup `public/` and `.env.local`
- Monitor server logs regularly

---

## 9. Contributing Guidelines
- Fork repo, create feature branch, commit changes, open PR
- Ensure code is linted/formatted before submission

---

## 10. Environment Variables
- `.env.local` (do not commit!)
```env
NEXT_PUBLIC_WEB3FORMS_KEY=<your-api-key>
NODE_ENV=production
```

---

## 11. Screenshots & References
- Next.js Docs: [https://nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Web3Forms: [https://web3forms.com](https://web3forms.com)

---

## 12. FAQ / Common Issues
- Images not loading → Check path in `public/images/...`
- Contact form not sending → Verify Web3Forms key
- PM2 service not starting → Check Node.js version compatibility

---

This README ensures that anyone receiving the project can **understand the folder structure, development workflow, deployment process, and maintenance procedures** clearly.
