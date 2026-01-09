# portfolio2026

Static plain-HTML engineering portfolio scaffold for GitHub Pages.

This repository contains a single-page portfolio built with plain HTML and CSS and a GitHub Actions workflow that automatically deploys the site to GitHub Pages (gh-pages branch).

How to use
1. Replace the placeholder bio in `index.html` with your real bio.
2. Replace the inline SVG profile placeholder in the About section or replace it with an image placed in `assets/` and update the `<img>` src.
3. Edit the 9 sample projects in the Projects section of `index.html` to update titles, descriptions, tech tags, and links.
4. Enable GitHub Pages or rely on the included workflow to publish the `gh-pages` branch automatically.

To preview locally
- Open `index.html` in your browser (no server required). For full testing of client-side routing or CORS, run a local static server, for example:
  - `npx http-server . -p 8080`

Deployment
- The included GitHub Actions workflow (.github/workflows/pages.yml) will publish the repository root to the `gh-pages` branch using the default `GITHUB_TOKEN` when a commit is pushed to the main branch.

Notes
- This scaffold intentionally uses inline SVG for the profile placeholder so there are no binary assets. Replace with your photo when ready.
