# Brand fidelity and hero lighting refinement

Date: 2026-11-06. Continuation of the current visual refinement; no next milestone or deployment.

## Summary

| Before                                                          | After                                                                                                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Navbar/footer approximated the identity with live fonts.        | Both use the supplied original silver KAIROS / INTERFACE TECH bitmap, including its original subtitle and ornaments.                       |
| The crisp hero floated without the reference's ground lighting. | Static warm contact light, pink reflections, blue/violet floor illumination and a soft contact shadow follow the unchanged artwork's feet. |

The approved page background, section spacing, typography, content, grid rules, image dimensions and navigation behavior are preserved. The lighting wrapper has no padding or intrinsic height; its absolutely positioned decoration adds no layout space.

## Files Changed

- `src/app/page.tsx`: shared wordmark asset in both existing brand links; a stage and decorative ground layer around the existing hero image.
- `src/app/globals.css`: aspect-preserving wordmark display, static ground fields and lighting-only mask; forced-colors hides the decoration.
- `public/brand/KAIROS Interface Tech Wordmark Logo.png`: byte-identical copy of the newly supplied original in `../Logos`.
- `public/brand/derived/kairos-interface-tech-wordmark.png`: lossless display crop, 1980 × 404 pixels. Extract rectangle `{left:96, top:156, width:1980, height:404}` from the 2172 × 724 source using the already installed Sharp. No resampling or modification of retained RGBA pixels.
- `docs/visual/brand-wordmark-sizes.png`: navy asset proof at 660, 160 and 144px widths; not a browser screenshot.
- README, asset inventory, verification notes and this report.

## Components Reused

Existing Next Image, ResponsiveNavigation, ButtonLink, Section, cards, contact channels and all content configuration. Brand links keep their accessible home label and a minimum 44px target. Next Image reserves the original aspect ratio and serves the wordmark PNG unoptimized to avoid lossy conversion.

## New Components

None. Two presentation-only hero wrappers, with the light layer hidden from assistive technology and pointer input. The hourglass remains an independent asset.

## Dependencies

None added, removed or updated. Sharp already exists in the Next.js installation and was used only for local asset preparation and inspection.

## Tests and Verification

- `npm run check`: formatting, ESLint with zero warnings, Next route generation and strict TypeScript passed.
- `npm run build`: passed. Existing localhost `metadataBase` warning remains while the production domain is unset.
- `npm run verify:smoke`: passed against the production build on loopback port 3001, including 16 anchor destinations, content, CSS, image/icon/font responses and 404 behavior.
- Additional production HTTP inspection: navbar and footer contain the same wordmark source; served PNG bytes exactly match the local derivative. Lighting is decorative in the rendered HTML.
- Asset checks: the source copy matches the supplied PNG byte-for-byte; every decoded RGBA pixel in the crop matches the corresponding source pixel. The crop contains 466,518 fully transparent pixels; boundary alpha is at most 1/255. Composited navy proof inspected at navigation sizes. Source RGB in transparent pixels initially looked like speckles in the image viewer; proper alpha compositing confirmed these do not appear on navy.
- All five earlier supplied originals match their source SHA-256 hashes. The crisp hourglass, dependencies, content, layout metadata and existing component files have no diff. All 18 files in the toolkit adoption manifest still match the separate starter.
- Actual Chrome desktop inspection at the existing LAN URL: the new navbar wordmark, unchanged crisp hourglass, attached floor light and page integration were visible. No rectangular boundary was visible in this inspected view. This was one desktop window, not a measured viewport matrix.
- Responsive inspection was attempted through Chrome DevTools, but native control detected user input and then a minimized window. Rebinding/restoring through the available API failed. Desktop widths 1024/1440, tablet 768, mobile 320/390, footer visual appearance, keyboard interaction and browser reduced-motion emulation are **not verified** in this follow-up. No full-page screenshot comparison or device pass is claimed.

## Functionality

Both brand links still target `#home`; section anchors, CTAs, disclosure behavior and contact placeholders retain their existing implementation. The lights use percentage positions from the original 1536 × 1024 hourglass canvas (sand at x≈627, base at y≈806), so their geometry scales with the image without breakpoint-specific offsets. All fields fade to transparent, and the additional mask reaches zero before the canvas perimeter. The mask never alters hourglass pixels. No blend modes, animation, canvas, image card or page-color matte are used.

The supplied transparent wordmark is used directly rather than redrawn or generated. Original files remain unchanged. A built-in image-generation extraction candidate was inspected but rejected in favor of the supplied PNG because it shifted letter spacing; it is not referenced or copied into the project.

## Manual Review

Review the navbar and footer at 320, 390, 768, 1024 and 1440px, including the small subtitle, focus outline and menu toggle. Inspect the warm hotspot at the sand base, the right-foot reflection and falloff against the actual page background. Check overflow, zoom, sticky-anchor clearance, keyboard navigation, reduced motion and forced colors on target browsers.

The existing transparent PNG provides accurate supplied letterforms without a source-resolution extraction limitation. As a raster, it is not resolution-independent. The intentionally small subtitle follows the original proportions and will have limited detail at navigation size. CSS lighting recreates the reference's direction, contact positions and palette; it is not a pixel-exact reproduction of the original JPEG's photographic reflections or tiny floor grid. Those details are not present in the approved standalone hourglass asset. No damage to that asset was introduced to imitate them.

## Learning Notes

Transparent pixels can contain arbitrary RGB values; judge a cutout after alpha compositing. A lossless crop preserves lettering more faithfully than font substitution or a generated extraction. Ground lighting should track artwork coordinates, and its opacity must reach zero before a bounded element ends.

## Toolkit Improvements

None. No toolkit files were edited.

## Git Status

Prepared on `main`, based on `acb7424`. Commit/push follows the existing session authorization after available checks; the final delivery message records the resulting revision. No deployment.
