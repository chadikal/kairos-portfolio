# Toolkit provenance

## Origin

Copied on 2026-11-06 from:

`C:\Users\compume\OneDrive - Notre Dame University-Louaize\Desktop\Kairos-Frontend-Toolkit\starters\web`

The source toolkit has no committed revision (its working source is untracked). There is no source commit hash to cite. The starter is a private, copy-based foundation owned by the project owner; its README provides no blanket open-source license. This portfolio copy was explicitly requested by that owner.

`toolkit-source.sha256.json` records the SHA-256 of every copied starter file at the time of adoption. Generated files, dependency directories, Git metadata, and build output were excluded. These hashes allow the original working-tree snapshot to be identified without publishing the private toolkit source separately.

## Reused foundation

- Next.js 16.4.5 App Router with React / React DOM 19.3.0.
- Strict TypeScript configuration and `@/*` source alias.
- Tailwind CSS 4 and the starter's Turbopack integration.
- ESLint 9 / Next configuration and Prettier setup.
- Formatting, lint, clean route type generation, typecheck and production build scripts.
- `.editorconfig`, `.gitattributes`, `.gitignore`, `.nvmrc`, `.env.example`, lockfile, and portable `AGENTS.md`.

The toolkit component catalog contains no registered reusable UI. No existing UI component was copied. All portfolio components are new; prospective reusable patterns are recorded in `TOOLKIT_CANDIDATES.md`.

## Adaptations

Package renamed to `kairos-portfolio`; lockfile refreshed. The neutral starter page, layout, metadata, favicon, and CSS were replaced with KAIROS content and styling. Official artwork was added. Fonts use Next's built-in loader. The same dependency set is retained; no production or development packages were added. The copied portable instructions remain standalone.

No original toolkit file was modified. There are no runtime imports, symlinks, `file:` dependencies, or private package requirements pointing to the toolkit.

Framework guidance consulted: the installed Next.js 16.4.5 documentation for fonts, images, metadata, and the [official font optimization guide](https://nextjs.org/docs/app/getting-started/fonts).
