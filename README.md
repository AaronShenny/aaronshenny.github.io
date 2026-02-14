# Aaron Shenny Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys on pushes to `main`.

1. In GitHub, open **Settings → Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` (or manually run **Deploy to GitHub Pages** from the Actions tab).

The workflow builds with `npm ci && npm run build` and publishes `dist/`.

Vite `base` is auto-derived for Pages builds:
- `/` for `username.github.io` repositories.
- `/<repo>/` for project pages repositories.
