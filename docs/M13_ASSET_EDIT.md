# Milestone 1.3 artwork edit

- Tool: built-in `image_gen.imagegen`; transparent PNG edit, no fallback CLI or API key.
- Edit target: `public/brand/derived/kairos-hourglass-transparent.png` (Milestone 1.2).
- Detail reference: original `public/brand/Kairos-favicon.png`.
- Selected output: `public/brand/derived/kairos-hourglass-crisp.png`, 1536 × 1024 RGBA PNG.
- Both inputs and every original supplied asset remain unchanged. The generated output was copied into the project without deleting its tool-managed original.

## Exact prompt

Use case: precise-object-edit / background-extraction. Image 1 is the EDIT TARGET, the currently processed transparent KAIROS hourglass K. Image 2 is the ORIGINAL DETAIL REFERENCE. Refine Image 1 by removing at least 90% of its thick fuzzy/blurred outer halo and cloudy colored fringe. Keep only the very thin sharp neon rim that belongs to the glass edges. Make the silhouette crisp, clean, precise and visually sharp, without rough or clipped edges. Use Image 2 to preserve/restore the original glass geometry, thin luminous curves, purple/cyan/blue/pink/ember gradients inside the glass, delicate granular sand and falling orange sand stream. Keep the original K/hourglass shape, exact proportions, position and 1536x1024 composition. No redesign, no new objects, no circle, no text. Empty space immediately outside the sharp silhouette must be genuinely alpha-transparent; no black/navy rectangle, fog, bloom, cloudy blobs, broad ambient light, shadow or matte around it. The website will add very subtle broad ambient lighting separately with CSS. Do not reduce internal detail or flatten the materials while removing the halo. Return a genuine transparent PNG; do not paint checkerboards. Change only the unwanted outer blur, preserve the artwork as accurately as possible.

## Inspection

The side-by-side [navy comparison](visual/m13-hourglass-comparison.png) shows the earlier asset on the left and the sharper asset on the right. The thick cloudy halo is substantially reduced. The [desktop/mobile navy proof](visual/m13-hourglass-navy.png) uses 560px and 280px image widths. The [checkerboard proof](visual/m13-hourglass-checker.png) exposes alpha and edge treatment. These are compositing proofs, not browser screenshots.

The new image has 1,222,883 fully transparent pixels. Pixels with alpha from 1 through 127 fell from 265,936 to 28,947 (about 89% fewer), supporting the observed reduction in diffuse fringe. That is not a formal perceptual-sharpness score. Outermost-edge alpha is at most 1/255. The silhouette and thin neon glass rim remain intact in the inspected proofs, with no visible rectangular matte.

ImageGen uses an AI-assisted edit, so individual sand grains, glass texture, and other microscopic details are not guaranteed pixel-identical to the original. The original was supplied as a detail reference and remains available for a future manual extraction if stricter fidelity is needed. Broad ambient light is now a separate, restrained CSS gradient field; the PNG does not carry the previous thick fuzzy fringe.
