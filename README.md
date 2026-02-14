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
This repository now includes a GitHub Actions workflow that deploys the Vite build output to GitHub Pages whenever you push to `main`.

1. In GitHub, open **Settings → Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` (or manually run the **Deploy to GitHub Pages** workflow from the Actions tab).

The workflow builds the site with `npm ci && npm run build` and publishes the `dist/` directory.

The Vite `base` path is auto-derived for GitHub Pages builds (root `/` for `username.github.io` repos, `/<repo>/` for project pages).

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys on pushes to `main`.

1. In GitHub, open **Settings → Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` (or manually run **Deploy to GitHub Pages** from the Actions tab).

The workflow builds with `npm ci && npm run build` and publishes `dist/`.

Vite `base` is auto-derived for Pages builds:
- `/` for `username.github.io` repositories.
- `/<repo>/` for project pages repositories.
