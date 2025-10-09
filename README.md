# AIppliance Manager

AIppliance Manager keeps every appliance manual, troubleshooting tip, and maintenance reminder at your fingertips. The mobile app lets homeowners scan model numbers, store manuals, and chat with an AI that understands the manufacturer documentation. This repository powers the public marketing site that introduces the product, surfaces support resources, and links out to the Android release on Google Play.

## Product highlights
- Add appliances in seconds by scanning a label or entering model details manually.
- Ask conversational questions and get answers sourced directly from the official manual.
- Organize appliances by room or property so nothing gets lost between homes.
- Receive proactive maintenance reminders (coming soon) so filters, cleanings, and tune-ups stay on track.
- Keep data private—appliance records live securely on the device and in encrypted cloud storage, and deletion requests are honored quickly.

## Website experience
- Landing page hero with Google Play call-to-action, feature overview, testimonial, and UI gallery.
- "How it works" and FAQ sections that explain scanning, AI chat, and data practices for prospective users.
- Legal and compliance pages for Privacy Policy, Terms of Service, and Data Deletion requests.
- Responsive layout built with Tailwind CSS and shadcn/ui components to match the mobile app brand.

## Tech stack
- Vite + React + TypeScript for the single-page application shell.
- Tailwind CSS, shadcn/ui, and lucide-react for styling and iconography.
- React Router for page routing and smooth navigation.
- TanStack Query for any client-side data fetching hooks.

## Local development
1. Install Node.js 18 (or newer) and npm.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the dev server:
   ```sh
   npm run dev
   ```
   Vite will print a local URL where the marketing site is served with hot reloading.

## Production build & preview
```sh
npm run build
npm run preview
```
The build command outputs the static site to `dist/` and runs `scripts/create-404.mjs` so static hosts can serve a SPA-style fallback. `npm run preview` serves the build locally for smoke testing before deployment.

## Repository structure
- `src/pages` – route-level pages for the home, privacy, terms, and data-deletion views.
- `src/components` – reusable UI sections such as the hero, feature grid, FAQ, testimonial, and footer.
- `src/assets` – marketing imagery and UI screenshots referenced by the components.
- `public/` – static assets copied through the Vite build.
- `scripts/create-404.mjs` – post-build script that mirrors `index.html` to `404.html` for static hosting.

## Deployment
Deploy the contents of the `dist/` folder to your static hosting provider (Netlify, Vercel, GitHub Pages, etc.). Ensure the host is configured to serve `index.html` for unknown routes or use the generated `404.html` fallback.

## Support
For help with the site or app, email [support@AIpplianceManager.com](mailto:support@AIpplianceManager.com).
