# KAIROS | Interface Tech

The official portfolio foundation for Chadi's independent frontend development brand.

**Every great idea has its moment.**

KAIROS turns client-provided Figma and Adobe XD designs into responsive, interactive websites. This first milestone establishes the brand, homepage, reusable UI, and independent development workflow. No deployment is configured or performed.

## Development

Use Node.js **22.20.0** (see `.nvmrc`) and npm **10.9.3**. The project is independent of the Kairos Frontend Toolkit.

```sh
npm ci
npm run dev
```

Open <http://localhost:3000>. On Windows, use `npm.cmd` if PowerShell blocks the npm script shim. Do not change the global Node selection just for this project.

```sh
npm run check     # Prettier, ESLint, strict TypeScript and generated route types
npm run build     # Optimized production build
npm start        # Serve the production build locally
```

No environment variables are required for local use. Copy `.env.example` to `.env.local` and set `SITE_URL` to the confirmed production origin before a future deployment. Until then, Next.js resolves social image URLs against localhost. Indexing is intentionally disabled in `src/app/layout.tsx`; enable it only when the content and domain are ready. Do not commit local environment files.

## Homepage

- Responsive navigation with the restored white KAIROS wordmark and INTERFACE TECH subtitle, mobile menu, contact CTA, and skip link.
- Hero with a separately saved, crisp transparent cutout of the supplied hourglass K artwork and both primary actions.
- Selected Work: explicitly labeled Techblade and Bon Marché placeholders, plus a future-project slot.
- Four focused frontend services.
- Clean, text-only About section with a personal introduction, direct client communication, and the meaning of KAIROS.
- Contact placeholders for email, Instagram, and GitHub.
- Footer navigation and copyright.

Project imagery, descriptions, outcomes, URLs, and contact details have deliberately not been invented. Placeholder project cards and missing contact channels are noninteractive. Navigation and hero actions link to real homepage sections.

## Structure

```text
src/app/                  Homepage, layout, metadata images, brand tokens and styles
src/components/ui/        Generic navigation, button link, section, and arrow
src/components/           Project, service, and contact presentation components
src/content/site.ts       Navigation, projects, services, contact configuration
public/brand/             Original supplied assets, unchanged; edited hero in derived/
TOOLKIT_CANDIDATES.md      Proposed future extractions (no toolkit changes)
docs/                     Provenance, asset inventory, and verification report
```

The App Router renders the page on the server. Only the responsive navigation requires a client boundary. Next Image provides responsive image sizing; `next/font` optimizes and self-hosts Space Grotesk, Inter, IBM Plex Mono, and the prepared IBM Plex Sans Arabic font. Arabic typography is prepared; translated content and RTL layouts are future work. No animation library, backend, contact form, or analytics is included.

CSS variables centralize brand colors and typography. A continuous radial-gradient atmosphere spans the whole page and footer on navy, strongest near the hero; it uses no background image, animation, canvas, or blend modes. Layouts switch to stacked content on small screens, with reduced-motion and forced-color support. Shared responsive spacing tokens control section/heading/footer gaps. Header height tokens also set native-anchor clearance; the mobile dropdown does not expand the sticky bar or move page content. The mobile disclosure closes on Escape, link selection, and transition to desktop. Escape returns focus to the toggle.

## Assets and ownership

See [asset inventory](docs/ASSETS.md) for source roles and preservation details. KAIROS artwork and branding remain the owner's assets. This public repository does not grant a license to reuse the brand, assets, or code. Preserve third-party package licenses. See [toolkit provenance](docs/TOOLKIT_PROVENANCE.md) for the copied starter origin.

## Verification and next milestone

See [verification](docs/VERIFICATION.md) for executed checks and remaining manual review. [Milestone 1.3 visual corrections](docs/M13_VISUAL_CORRECTIONS.md) records the latest source findings, favicon, spacing and scroll corrections, and unverified browser checks. [The initial 1.3 report](docs/MILESTONE_1_3.md) remains as history; no Milestone 1.4 has begun. [Milestone 1.2](docs/MILESTONE_1_2.md) records the preceding branding corrections. [Milestone 1.1](docs/MILESTONE_1_1.md) preserves the earlier refinement history. Before publication, supply approved project material, professional contact links, and the final domain. Then refine the case studies and complete device, keyboard, screen-reader, and visual review. Deployment is a separate milestone.
