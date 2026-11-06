# Brand asset inventory

All six supplied originals in `public/brand` remain byte-for-byte unchanged, including the newly supplied `KAIROS Interface Tech Wordmark Logo.png`. Derivatives live in `public/brand/derived`; they never overwrite source artwork.

| File                                       | Current role after Milestone 1.3                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `derived/kairos-hourglass-crisp.png`       | Current hero. 1536 × 1024 transparent PNG, with substantially reduced baked-in halo and a thin luminous glass rim. |
| `derived/kairos-hourglass-transparent.png` | Earlier Milestone 1.2 cutout retained for provenance and comparison; no longer imported by the homepage.           |
| `Kairos-favicon.png`                       | Original detail reference for both edits, preserved unchanged; no longer used to generate the favicon.             |
| `KAIROS-Horizontal-Wordmark-Logo.png`      | Original neon horizontal wordmark retained but not rendered in the navbar.                                         |
| `Kairos-Hourglass-K-Standalone-logo.jpeg`  | Original circular K retained; not rendered on the homepage.                                                        |
| `Kairos-instagram-profile-logo.jpeg`       | Original social identity image retained; not rendered on the homepage.                                             |
| `Kairos-Logo.jpeg`                         | Original full artwork retained; unchanged copy remains the Open Graph image.                                       |

Navbar and footer now use `derived/kairos-interface-tech-wordmark.png`: a lossless 1980 × 404 crop of the newly supplied transparent original, with its silver letterforms, kerning, gradients, subtitle and purple ornaments. Crop rectangle: left 96, top 156, width 1980, height 404; no resampling, recoloring, alpha modification, font substitution or tracing. All retained decoded RGBA pixels match the original. Next Image serves this PNG with `unoptimized` to avoid lossy brand-image encoding. Display widths are 160px desktop and 144px mobile; both links keep a 44px minimum target. About remains text-only. See [size proof](visual/brand-wordmark-sizes.png) and [current report](BRAND_FIDELITY_AND_LIGHTING.md).

## Transparency and edge refinement

Milestone 1.1's alpha-channel/corner inspection did not establish that the original dark matte had been removed. Milestone 1.2 added a real cutout, but its baked-in glow was too fuzzy. Milestone 1.3 edits that cutout using the original artwork as the detail reference, saving the result as a new sibling asset.

The current asset has 1,222,883 fully transparent pixels. Low-alpha pixels (1–127) decreased from 265,936 in the prior cutout to 28,947, about 89% fewer. Edge alpha is at most 1/255. These measurements support, but do not replace, visual inspection: [before/after on navy](visual/m13-hourglass-comparison.png), [desktop/mobile artwork proof](visual/m13-hourglass-navy.png), and [checkerboard proof](visual/m13-hourglass-checker.png). No rectangular matte or thick fuzzy fringe was visible in these proofs.

The edit retains the recognizable K geometry, glass, sand and internal gradients; microscopic texture is not guaranteed pixel-identical. See [exact prompt and editing provenance](M13_ASSET_EDIT.md). The initial Milestone 1.3 artwork pseudo-element was found to end at still-colored rectangular edges. It is removed in the visual correction; broader light now comes only from the continuous `body` radial-gradient surface, through the footer. The crisp PNG itself is unchanged. See [source findings and verification limits](M13_VISUAL_CORRECTIONS.md). No blend modes, masks, recoloring filters, page-color concealment or image-card frame are used.

Next Image imports the selected PNG with intrinsic dimensions, responsive sizes and preload, and its optimized WebP response retains alpha. The former illustration-derived `src/app/icon.png` and `src/app/apple-icon.png` routes have been removed. The correction uses `public/brand/derived/kairos-favicon-v3.svg`, dedicated 16/32/180px PNGs and a custom 16+32px `src/app/favicon.ico`. These are a simplified code-native K/hourglass companion mark, with no fine sand or glass detail. Versioned filenames avoid reusing the old icon URLs. See [the favicon proof](visual/m13-corrections-favicon-proof.png). The user's flowing-background reference is inspiration only and is not used as an asset.

The brand-lighting follow-up adds a static, masked CSS ground wash beneath the unchanged crisp artwork. Percentage coordinates follow the sand and glass contact points, so light scales with the image. Every gradient fades to zero inside the artwork canvas; the outer mask adds another transparent falloff. This mask affects only CSS lighting, never the image alpha. No page background, section spacing, typography, navigation behavior or hero proportions changed. The reference floor's tiny grid and photographic reflections are not reproduced pixel-for-pixel.

Asset ownership remains with KAIROS; public repository visibility grants no reuse license. A desktop browser view was inspected during the latest follow-up. Exact viewport, mobile/tablet, footer and reduced-motion browser checks remain incomplete; see the current report. The linked static proofs inspect assets rather than rendered page layouts.
