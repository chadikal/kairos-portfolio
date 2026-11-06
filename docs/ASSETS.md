# Brand asset inventory

All five files from the supplied `Kairos/Logos` folder are preserved byte-for-byte in `public/brand`. No logo was redrawn, recolored, cropped, or stripped of its background.

| Original file                             | Role in this milestone                                                                  |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| `Kairos-Logo.jpeg`                        | Prominent full artwork in the hero; unchanged copy used as the Open Graph social image. |
| `Kairos-Hourglass-K-Standalone-logo.jpeg` | Compact brand artwork beside the About statement.                                       |
| `Kairos-favicon.png`                      | Source for proportionally resized 64px icon and 180px Apple icon. Original retained.    |
| `Kairos-instagram-profile-logo.jpeg`      | Preserved for future social identity placement; not shown as an invented profile link.  |
| `KAIROS-Horizontal-Wordmark-Logo.png`     | Preserved as an alternate official asset. The navbar uses a legible text wordmark.      |

`src/app/icon.png` and `src/app/apple-icon.png` are size-only derivatives made with the starter's installed Sharp image processor. They preserve the original favicon proportions and design. They are used through Next.js metadata file conventions. Full logo imagery uses `next/image` with responsive sizes and explicit intrinsic dimensions from static imports. The hero artwork retains its original background inside a matching dark frame.

SHA-256 preservation checks against all original files passed at implementation time; see `VERIFICATION.md` for verification scope. Original asset ownership remains with KAIROS; repository visibility does not license these assets for third-party reuse.
