# Milestone 1 verification

Date: 2026-11-06. Runtime: existing Node.js 22.20.0 and npm 10.9.3 on Windows. The runtime was selected in command-local PATH only. No global runtime, credentials, or toolkit configuration were changed.

## Milestone 1.3 visual corrections

The initial milestone is not visually accepted. See [the correction report](M13_VISUAL_CORRECTIONS.md) for source-confirmed findings, completed code/HTTP checks, missing screenshot comparison, and the outstanding browser/device review. No Milestone 1.4 or deployment. The custom favicon is verified in served metadata and source-identical responses; actual browser-tab selection remains unverified.

## Milestone 1.3 follow-up

Reduced the baked-in hero halo using the original as a detail reference, added a continuous static CSS atmosphere, and aligned About heading caps on desktop. See [Milestone 1.3](MILESTONE_1_3.md) for the latest checks, contrast bound, artwork proofs, and browser-verification limits.

## Milestone 1.2 follow-up

Restored the clean text navbar, replaced the hero source with an independently saved background-extracted PNG, and removed the circular About image and panel styling. See [Milestone 1.2](MILESTONE_1_2.md) for the current verification report, image-level navy/checkerboard proofs, and actual browser-review limitations. The earlier alpha-channel-only inspection was insufficient to rule out a dark matte; the new review checks visible compositing as well.

## Milestone 1.1 follow-up

The navbar/hero asset treatment, heading tokens, and section rhythm were refined. Required checks and a fresh production smoke check passed. See [the refinement report](MILESTONE_1_1.md) for exact scope, contrast calculations, unchanged original-asset checks, and browser verification limitations at all five requested widths. No deployment performed.

## Executed checks

| Check                    | Result                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Independent installation | `npm ci --offline --no-audit --foreground-scripts` passed using the copied lockfile. No toolkit dependency directory was copied.                                                                                                                                                                                                         |
| Formatting               | `npm run format:check` passed after formatting.                                                                                                                                                                                                                                                                                          |
| ESLint                   | `npm run lint` passed with zero warnings.                                                                                                                                                                                                                                                                                                |
| Strict TypeScript        | `npm run typecheck` passed, including Next route type generation.                                                                                                                                                                                                                                                                        |
| Production build         | `npm run build` passed; homepage and metadata image routes prerendered.                                                                                                                                                                                                                                                                  |
| Production HTTP smoke    | `npm run verify:smoke` passed against the production server. Verified all six named targets, 16 anchor links, unique IDs, one h1, title/language, disclosure attributes, placeholder content, encoded names, Open Graph/Twitter/noindex metadata, compiled CSS behaviors, served image/icon/font assets, and HTTP 404 for unknown pages. |
| Logo preservation        | SHA-256 checks passed for all five originals against `public/brand`.                                                                                                                                                                                                                                                                     |
| Toolkit preservation     | Every file recorded in the adoption manifest still matches its original hash. Original toolkit Git status is unchanged (all initial source remains untracked; no source commit exists).                                                                                                                                                  |
| Dependency audit         | `npm audit` reports 8 moderate findings, zero high/critical, inherited from the starter's development tooling.                                                                                                                                                                                                                           |

The production build warns that `metadataBase` is unset and uses localhost for social image URLs. This is expected while no domain is supplied. Set `SITE_URL` to the real origin before deployment; then rebuild. Indexing stays disabled until publication review.

## Dependency findings

The same 8 moderate findings were documented in the original toolkit. They are in the TypeScript ESLint / minimatch development dependency chain. No new dependency was added, no forced upgrade was applied, and no claim is made that the audit is clean. The installed ESLint 9.39.5 is deprecated; upgrade with the compatible framework lint stack in a future maintenance pass. `npm ls --depth=0` succeeds but reports two optional Sharp/WASM packages as extraneous, matching the toolkit's documented installation behavior. These installed packages are ignored and are not repository source.

## Browser verification limit

The browser access host was unavailable. A native Brave fallback was attempted through Computer Use, but Computer Use ended because it could not determine the browser URL with sufficient confidence to enforce policy. No visual browser inspection or menu interaction was completed.

Responsive rules are implemented for desktop, tablet, and mobile, with stacked content, flexible grids, visible focus states, reduced motion, and forced colors. Their presence in compiled CSS is verified; this does not establish that every layout has rendered correctly.

Before accepting visual QA, manually review widths 320, 390, 768, 1024, and 1440px, 200% zoom, no horizontal overflow, image treatment, typography, long content, mobile menu open/close/Escape/resize/link selection, tab order, skip link and anchor scrolling under the sticky header. Check reduced motion, contrast, forced colors and a screen reader on target devices. These checks are **not claimed as passed**.

## Reproduce smoke checks

In one terminal run `npm run build` then `npm start`. In another run `npm run verify:smoke`. Set `SMOKE_ORIGIN` only when checking a different local port or confirmed environment. The check requires no extra testing dependency.

## Delivery scope

No website deployment was performed. The contact channels remain explicit placeholders; no email, social handle, project screenshot, outcome, testimonial or client statistic was fabricated. The social identity logo and alternate horizontal logo are preserved but not placed in inappropriate page roles. Arabic font support is prepared; Arabic translation and RTL verification are outside this milestone.
