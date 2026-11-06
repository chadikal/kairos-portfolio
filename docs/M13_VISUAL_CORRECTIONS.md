# Milestone 1.3 — visual corrections

This corrects Milestone 1.3; it does not begin Milestone 1.4. No deployment. Date: 2026-11-06.

## Summary

| Issue                  | Source finding / before                                                                                                                                                                                                                                              | Correction / after                                                                                                                                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hourglass rectangle    | The new artwork pseudo-element was an element-sized gradient image whose left/right edges still had about 1.4% color opacity. Its paint abruptly ended at a rectangle. The PNG edge alpha is at most 1/255, and no pixel in its outer 32px band exceeds alpha 8/255. | Removed the pseudo-element and its stacking context entirely. Kept the exact crisp PNG bytes, proportions, and responsive sizes. Atmosphere belongs to the continuous page background, not a second overlay around the image.                              |
| Weak atmosphere        | Field peaks were only 1.8–6.5%, with an additional bounded artwork layer; background paint stopped at `main`, before the footer.                                                                                                                                     | Broad blue/violet/pink fields now live on `body`, spanning header-to-footer. Peaks are 22% blue / 24% violet near the top, 14% blue / 9% pink / 13% violet farther down, with long soft falloffs and no wave lines.                                        |
| About alignment        | Container boxes already used top alignment, but the lead text had different sizes, line heights and weights. Optical alignment relied on optional `text-box-trim` support.                                                                                           | Both lead lines share Space Grotesk, the same size, weight 500, line height, letter spacing and zero start margins. Subtitle is a normal block below the right lead line. Removed the optional trim rule; no negative margins or viewport-specific nudges. |
| Favicon                | A detailed 1536 × 1024 illustration with large transparent margins had been shrunk into tiny icons; most sand/glass detail cannot read at 16px.                                                                                                                      | Purpose-built, simple K/hourglass vector in brand colors. Dedicated 16px, 32px and 180px PNGs, SVG and multi-size ICO; versioned metadata URLs replace old illustration routes.                                                                            |
| Empty section gaps     | Adjacent sections each had 56–84px padding, adding to 112–168px between their content. Footer had another 54px top pad; project previews enforced a 200px minimum.                                                                                                   | Shared section padding is 28–48px per side; heading gap 20–28px; footer padding 24–36px. Project preview content uses normal flow and responsive padding, without fixed height, aspect-ratio height or minimum height.                                     |
| Sticky/anchor behavior | Scroll offsets were independent hardcoded values. The open mobile disclosure participated in document flow and changed sticky-header/page geometry when closing.                                                                                                     | Header size and anchor offset share tokens (88px desktop / 72px mobile, plus 16px clearance). Mobile navigation opens below the bar as a scrollable dropdown without moving page content; native anchors and existing Escape/close behavior remain.        |

These are source-confirmed findings and implemented corrections. They are not a claim that the user's reported screenshots or browser appearance have been visually reproduced: no page screenshot attachments were available in this turn, and browser access remains unavailable.

## Files Changed

- `src/app/globals.css`: bounded-layer removal, stronger continuous atmosphere, equal About lead typography, spacing tokens, content-driven preview sizing, shared scroll tokens and stable mobile dropdown.
- `src/app/page.tsx`: removed the hard line break before the now-block About subtitle; no copy changed.
- `src/app/layout.tsx`, `src/app/favicon.ico`, four `public/brand/derived/kairos-favicon-v3*` assets: explicit brand favicon selection and formats. Removed the old generated `src/app/icon.png` and `src/app/apple-icon.png` routes.
- `scripts/smoke-check.mjs`: discover icon targets from actual metadata and verify the new targets replace legacy routes.
- README, asset inventory, verification notes, this report, and three `docs/visual/m13-corrections-*` inspection studies.

## Components Reused

All existing React components and content data. No new UI component or client logic; existing disclosure keyboard handling and CTA destinations remain.

## New Components

None. One small code-native SVG favicon and raster/ICO variants, designed for the existing K/hourglass identity. No AI image editing was used for these corrections.

## Dependencies

No changes. Existing Sharp only rasterized the vector and inspected pixels; the website adds no package or background runtime. All original supplied logos, the crisp hourglass image and the separate frontend toolkit remain unchanged by hash.

## Tests and Verification

Formatting, ESLint with zero warnings, strict TypeScript including clean route generation, and a fresh production build passed after the final source changes. Production smoke checks passed for metadata, 16 anchor destinations, IDs, headings, image/font/icon responses, CSS behaviors and 404 handling.

Additional HTTP checks verified:

- Served icon metadata contains the versioned SVG, 16px/32px PNGs, 180px Apple icon and the custom ICO. PNG response bytes match source files and their actual dimensions are correct. The ICO contains source-identical 16px and 32px entries.
- The removed `/icon.png` and `/apple-icon.png` routes return 404. No default framework icon source is present; the only app favicon file is the new KAIROS ICO.
- The served optimized WebP still has alpha. The compiled CSS has no `.hero-artwork::before` layer and contains the shared scroll tokens and existing reduced-motion rules.
- The LAN development page returns HTTP 200 and references the new favicon SVG.

A 1001 × 1001 normalized sample of the declared radial fields produced minimum modeled contrast of 13.92:1 for main text and 7.08:1 for secondary text. This is a numerical gradient/color model, not browser-rendered contrast verification. Gradients are static, with no blend modes or filters, and remain disabled in forced-colors mode.

The existing build warning remains: social images use localhost until the confirmed origin is supplied through `SITE_URL`. No deployment was performed.

## Functionality

Current navbar branding, hero artwork/content, services, project placeholders, About copy, Contact and footer content are preserved. About lead typography and card flow change only to address alignment, clipping risk and spacing. The mobile dropdown keeps the current labels, toggle, Escape behavior and native links, while avoiding document-flow expansion. Anchor clearance is derived from the same header token rather than doubled scroll margins.

## Manual Review

The browser access host was checked and is still unavailable. No desktop/tablet/mobile browser screenshot, DOM measurement, scroll interaction or browser-tab favicon selection was completed. Comparison against page screenshots was not possible because no such attachments were available to this turn. The earlier supplied wave reference was used as visual direction only, never as a page asset.

Inspection artifacts:

- [Favicon sizes](visual/m13-corrections-favicon-proof.png): actual 16px and 32px rasters on the left, nearest-neighbor enlargements on the right. Inspected for recognizable silhouette without tiny sand/glass detail.
- [Desktop gradient/artwork study](visual/m13-corrections-atmosphere-desktop.png) and [mobile study](visual/m13-corrections-atmosphere-mobile.png): numerical composites of the declared CSS field model and unchanged PNG. No rectangular region is visible in these studies. They contain no UI and are **not website screenshots** or a rendered-layout comparison.

Still required for visual acceptance: inspect 320, 390, 768, 1024 and 1440px; check About lead alignment, gradient strength/flow, real background around the hourglass, footer/section gaps, horizontal overflow, card clipping, 200% zoom, mobile dropdown open/close/Escape, every anchor under the sticky bar, keyboard focus, reduced motion and browser-tab favicon. Hard-refresh the preview because favicon paths and CSS have changed. A successful build or HTTP response does not establish that these visual checks passed.

## Learning Notes

A transparent PNG can be correct while a surrounding CSS background produces a rectangle. Gradients need inspection at their paint boundaries. Shared text metrics avoid relying on optional trimming features for basic alignment. Small favicons need their own simplified silhouette, not a scaled hero illustration. Adjacent section padding and expanding sticky menus must be considered together with their neighbors and anchor behavior.

## Toolkit Improvements

No toolkit changes. Potential future checklist items: test decoration at element bounds; inspect favicons at native pixel sizes; use shared spacing/header tokens; validate native anchor behavior when disclosures change layout.

## Git Status

Corrections and available checks are complete before commit/push to the existing `main` branch. The final response records the resulting commit. Browser visual acceptance remains pending; no deployment or force-push.
