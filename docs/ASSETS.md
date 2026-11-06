# Brand asset inventory

All five files from the supplied `Kairos/Logos` folder are preserved byte-for-byte in `public/brand`. No logo was redrawn, recolored, cropped, or stripped of its background.

| Original file                             | Current role after Milestone 1.1                                                                                                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `KAIROS-Horizontal-Wordmark-Logo.png`     | Official neon navbar wordmark, including its integrated hourglass K. Shown with Next Image at 192px wide on desktop and 148px on mobile, with intrinsic aspect ratio and all original glow preserved. The navbar has no separate subtitle. |
| `Kairos-favicon.png`                      | Border-free standalone hourglass K in the hero, plus the existing favicon source. Despite its filename, the supplied original is a 1536 × 1024 transparent artwork suitable for the hero.                                                  |
| `Kairos-Hourglass-K-Standalone-logo.jpeg` | The circular version remains beside the About statement. This JPEG contains a circular border and is deliberately not the hero asset.                                                                                                      |
| `Kairos-Logo.jpeg`                        | Original full artwork retained; unchanged copy remains the Open Graph social image. No longer used in the hero.                                                                                                                            |
| `Kairos-instagram-profile-logo.jpeg`      | Preserved for future social identity placement; not shown as an invented profile link.                                                                                                                                                     |

The two navbar/hero PNGs contain actual alpha transparency. Metadata/raw pixel inspection confirmed alpha values from 0 to 254 and alpha 0 at all four canvas corners. No CSS blending, masks, artificial transparency, background removal, filters, cropping, or AI edits are used. The hero's separate CSS pseudo-element adds static ambient purple/blue lighting without altering image pixels. The image container has no visible background, frame, or border.

The navbar PNG is 1916 × 821. Its full canvas renders approximately 82px high at 192px wide and 63px high at 148px wide. Navbar minimum heights are 88px and 72px respectively, including the original transparent margins and glow. Both images have explicit intrinsic dimensions through static imports and responsive `sizes`; the hero is preloaded and the navbar image loads eagerly.

`src/app/icon.png` and `src/app/apple-icon.png` remain the original milestone's size-only favicon derivatives. No asset or derivative was regenerated during Milestone 1.1. Artwork ownership remains with KAIROS; repository visibility does not license these assets for third-party reuse.

All five supplied assets are still hash-identical to their originals. See `MILESTONE_1_1.md` for verification limits, including the unavailable visual browser review.
