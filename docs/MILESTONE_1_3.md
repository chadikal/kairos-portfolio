# Milestone 1.3 — atmospheric design refinement

Date: 2026-11-06. Repository: `chadikal/kairos-portfolio`. No deployment.

## Summary

Refined the existing page without rebuilding it. The hourglass now uses a sharper, separately saved transparent derivative. The previous cutout was edited with the original supplied artwork as a detail reference; the thick fuzzy halo is substantially reduced while the thin glass rim, K silhouette, internal gradients and sand remain recognizable and intact in the inspected proofs.

Added one continuous, predominantly navy atmospheric surface to `main`: five broad radial gradient fields, strongest in the hero area and quieter farther down the page. Purple/blue field peak opacities are 6.5% / 4% near the hero, 2.8% / 2% farther down, and 1.8% for the quiet pink field. A separate pair of broad 6% purple / 3.5% blue gradients sits behind the artwork. These are static CSS backgrounds, without canvas, image backgrounds, blend modes, blur filters, wave outlines, stripes or new decorative borders.

Removed the prior section-specific fills and separator borders between Work, Services, About and Contact so the atmospheric surface continues through them. Cards, their borders, navbar, footer, typography tokens, copy, dimensions, CTA behavior and responsive breakpoints are preserved. The supplied reference image is inspiration only; it is not used as a page background or copied into public assets.

## Files Changed

- `src/app/page.tsx`: only the hero image import changes to the new sibling PNG; all markup and content remain unchanged.
- `src/app/globals.css`: continuous atmosphere, restrained independent artwork ambience, explicit top alignment and desktop cap-edge trimming for About, removal of the separate section fills/dividers, and forced-colors handling.
- `public/brand/derived/kairos-hourglass-crisp.png`: 1536 × 1024 transparent PNG.
- `docs/M13_ASSET_EDIT.md` and three `docs/visual/m13-*` proofs: exact prompt, reference roles and inspection evidence.
- README, asset inventory, verification notes, historical edit notice and this report: current roles and limitations.

## Components Reused

Existing `ResponsiveNavigation`, `ButtonLink`, `Section`, `ProjectCard`, `ServiceCard`, `ContactChannel`, `Arrow`, App Router layout and optimized fonts/images. All generic component files and site content remain unchanged.

## New Components

None. The artwork refinement used the built-in ImageGen editing tool, with a project-local output and unchanged originals. The exact prompt and input roles are in [the asset edit record](M13_ASSET_EDIT.md).

## Dependencies

No additions, removals or version changes. No animation, canvas or background-effect package. Existing Sharp was used for alpha inspection and compositing proofs only, without modifying the selected image or original assets.

## Tests and Verification

Formatting, ESLint with zero warnings, strict TypeScript including route generation, and a fresh production build passed. Production smoke checks passed for the homepage, 16 anchor destinations, IDs, headings, metadata, fonts, image responses, compiled CSS behaviors, icons and 404 handling.

Additional served-output checks confirmed the unchanged clean navbar, text-only About, new hero asset source, real alpha in the optimized WebP, and compiled gradient, cap-trimming, focus, reduced-motion and forced-colors rules. The LAN development preview returns HTTP 200 with the new asset. All original supplied asset hashes and all toolkit files in the adoption manifest remain unchanged.

Conservative contrast calculation: even if all seven gradient fields were at maximum opacity at the same point, a component-wise upper bound for the background is `#252A56`. Main text then has 12.63:1 contrast; secondary text and the tested purple heading endpoint each have 6.43:1. Real field positions and fades are less intense. This is a mathematical color check, not a complete rendered contrast audit.

The existing build warning remains: social images resolve against localhost until the confirmed domain is supplied with `SITE_URL`. No website deployment was performed.

## Functionality

Navigation, CTAs, services, project placeholders and Contact remain. The sharper hourglass keeps real transparency; there is no rectangular backdrop or image-card treatment. The broad CSS ambience is separate from the silhouette. Gradients have no animation and no input interception; the artwork pseudo-element stays within its container, with no negative horizontal inset or expanded layout width.

About columns explicitly align to the top with zero start margins/padding. On desktop, both first text blocks use `text-box-trim: trim-start` with `text-box-edge: cap alphabetic` inside `@supports`, aligning the visible capital-letter tops despite their different font sizes and line heights. This avoids arbitrary pixel offsets. The existing stacked mobile layout is unchanged. Older engines without the properties retain top-aligned grid boxes, but exact optical cap alignment remains a browser-review item. See [MDN text-box-trim](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-trim) and [text-box-edge](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-edge).

## Manual Review

Inspected the original reference, previous processed cutout and new result. [Before/after on navy](visual/m13-hourglass-comparison.png) shows the old image on the left and new on the right. [Navy desktop/mobile artwork proof](visual/m13-hourglass-navy.png) and [checkerboard proof](visual/m13-hourglass-checker.png) show the selected asset at 560px and 280px image widths. The new silhouette appears crisp, with a thin luminous rim and no visible rectangular matte.

The new image has 1,222,883 fully transparent pixels. Low-alpha pixels (1–127) fell from 265,936 to 28,947, approximately 89% fewer; this supports the observed halo reduction but is not a perceptual sharpness score. No obvious clipped or broken silhouette was visible in the proofs. AI-assisted editing cannot guarantee pixel-identical glass texture or individual sand grains; those fine details remain subject to the owner's review.

Browser inventory was checked again, but the browser access host remains unavailable. These proofs are image composites, not screenshots of the website. Actual full-page desktop/mobile review, exact About cap alignment, gradient flow/banding, text contrast at every location, horizontal overflow, keyboard/menu runtime behavior and reduced-motion runtime behavior were not visually verified. Review widths 320, 390, 768, 1024 and 1440px, plus 200% zoom, when browser access is available. No browser verification is claimed.

## Learning Notes

Separate artwork edge light from page atmosphere: a crisp transparent PNG carries the glass detail, while low-opacity CSS fields provide the broader ambient light. About's top-aligned boxes alone do not ensure equal optical text tops when font sizes/line heights differ; cap-edge trimming addresses that directly in supporting browsers.

## Toolkit Improvements

No toolkit changes. Potential future patterns: restrained continuous atmosphere with a conservative contrast budget, and cap-aware heading alignment with a progressive fallback. These remain proposals after browser/device review.

## Git Status

Verified changes are committed and pushed to the existing `main` branch. The final response records the commit and remote synchronization. No force-push, repository replacement, deployment or toolkit modification.
