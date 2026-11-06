# Brand asset inventory

All five supplied originals in `public/brand` remain byte-for-byte unchanged. Edited derivatives live in `public/brand/derived`; they never overwrite source artwork.

| File                                       | Current role after Milestone 1.3                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `derived/kairos-hourglass-crisp.png`       | Current hero. 1536 × 1024 transparent PNG, with substantially reduced baked-in halo and a thin luminous glass rim. |
| `derived/kairos-hourglass-transparent.png` | Earlier Milestone 1.2 cutout retained for provenance and comparison; no longer imported by the homepage.           |
| `Kairos-favicon.png`                       | Original detail reference for both edits, preserved unchanged; source for the existing favicon derivatives.        |
| `KAIROS-Horizontal-Wordmark-Logo.png`      | Original neon horizontal wordmark retained but not rendered in the navbar.                                         |
| `Kairos-Hourglass-K-Standalone-logo.jpeg`  | Original circular K retained; not rendered on the homepage.                                                        |
| `Kairos-instagram-profile-logo.jpeg`       | Original social identity image retained; not rendered on the homepage.                                             |
| `Kairos-Logo.jpeg`                         | Original full artwork retained; unchanged copy remains the Open Graph image.                                       |

Navbar and footer retain the clean white KAIROS text wordmark and small INTERFACE TECH subtitle. About remains text-only.

## Transparency and edge refinement

Milestone 1.1's alpha-channel/corner inspection did not establish that the original dark matte had been removed. Milestone 1.2 added a real cutout, but its baked-in glow was too fuzzy. Milestone 1.3 edits that cutout using the original artwork as the detail reference, saving the result as a new sibling asset.

The current asset has 1,222,883 fully transparent pixels. Low-alpha pixels (1–127) decreased from 265,936 in the prior cutout to 28,947, about 89% fewer. Edge alpha is at most 1/255. These measurements support, but do not replace, visual inspection: [before/after on navy](visual/m13-hourglass-comparison.png), [desktop/mobile artwork proof](visual/m13-hourglass-navy.png), and [checkerboard proof](visual/m13-hourglass-checker.png). No rectangular matte or thick fuzzy fringe was visible in these proofs.

The edit retains the recognizable K geometry, glass, sand and internal gradients; microscopic texture is not guaranteed pixel-identical. See [exact prompt and editing provenance](M13_ASSET_EDIT.md). Broader purple/blue light is now applied independently with restrained static CSS radial gradients. No blend modes, masks, recoloring filters, page-color concealment or image-card frame are used.

Next Image imports the selected PNG with intrinsic dimensions, responsive sizes and preload, and its optimized WebP response retains alpha. Existing `src/app/icon.png` and `src/app/apple-icon.png` were not regenerated. The user's flowing-background reference is inspiration only and is not used as an asset.

Asset ownership remains with KAIROS; public repository visibility grants no reuse license. Full-page browser review remains unavailable; the linked proofs inspect artwork rather than rendered page layouts.
