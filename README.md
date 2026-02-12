# Regulatory Reporting Web App

This project is a Next.js app scaffold to translate your Figma prototype into a production web app deployable on Vercel.

## 1) Local setup

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## 2) Push to GitHub

```bash
git init
git add .
git commit -m "Initial regulatory reporting app scaffold"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## 3) Deploy to Vercel

1. In Vercel, click **Add New Project**.
2. Import your GitHub repo.
3. Keep framework preset as **Next.js**.
4. Click **Deploy**.

Vercel auto-deploys on every push to `main`.

## 4) Converting Figma screens to code

Recommended workflow:

1. Create one route per major prototype screen in `app/`.
2. Extract repeated UI blocks into `components/`.
3. Keep design tokens in `app/globals.css` (`:root` variables).
4. Replace placeholder data in `components/reporting-dashboard.tsx` with real API data.

## 5) Suggested next implementation pass

- Add auth (Vercel + NextAuth or Clerk)
- Add report detail pages: `app/reports/[id]/page.tsx`
- Add server actions for draft/review/submit transitions
- Add integration tests for critical filing flows
