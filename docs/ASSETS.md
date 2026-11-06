# Brand asset inventory

All five original supplied files remain byte-for-byte unchanged in `public/brand`. Milestone 1.2 adds a separate edited hero derivative in `public/brand/derived`; it does not overwrite any original.

| File                                       | Current role                                                                                                                                                           |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `derived/kairos-hourglass-transparent.png` | Background-extracted hero artwork, edited from the original `Kairos-favicon.png` using the built-in ImageGen tool. 1536 × 1024 PNG, real alpha, no circle or wordmark. |
| `Kairos-favicon.png`                       | Original source preserved for provenance and existing favicon derivatives. No longer used directly in the hero.                                                        |
| `KAIROS-Horizontal-Wordmark-Logo.png`      | Original neon horizontal asset preserved but no longer rendered in the navbar.                                                                                         |
| `Kairos-Hourglass-K-Standalone-logo.jpeg`  | Original circular K preserved but no longer used in About or elsewhere on the homepage.                                                                                |
| `Kairos-instagram-profile-logo.jpeg`       | Original social identity asset preserved; not rendered in About or elsewhere on the homepage.                                                                          |
| `Kairos-Logo.jpeg`                         | Original full artwork preserved; unchanged copy remains the Open Graph social image.                                                                                   |

The navbar restores the original clean white text `KAIROS` with its small `INTERFACE TECH` subtitle. The About section is text-only. No logo image is used in either location.

## Transparency correction

The previous milestone established that the original source had an alpha channel and clear corners. That check did **not** establish that its dark matte had been removed. User review identified the remaining rectangular backdrop. Milestone 1.2 replaces that source in the hero with an edited cutout, checked visually over navy and checkerboard backgrounds as well as by reading the actual alpha pixels.

The derivative has 895,969 fully transparent pixels and 676,895 partially transparent pixels. Its outermost edge alpha is at most 1/255. The mark retains its recognizable geometry, glass, falling sand, gradients and soft neon fringe in the inspected proofs. As an AI-assisted edit, it is not a pixel-identical extraction; fine-grain sand/glass texture and glow fidelity remain subject to brand-owner visual review. No CSS blending, masks, page-color matching, image filters, rectangle/card backgrounds, or background-removal dependencies are used.

[Asset edit provenance and exact prompt](HERO_ASSET_EDIT.md) records the built-in tool and paths. [Navy proof](visual/hero-navy-review.png) and [checkerboard proof](visual/hero-checker-review.png) show the actual derivative composited at 560px and 280px image widths. These are image inspection proofs, not screenshots of a running webpage.

Existing `src/app/icon.png` and `src/app/apple-icon.png` were not regenerated. Ownership remains with KAIROS; repository visibility does not license these assets for reuse.
