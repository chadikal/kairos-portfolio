# Hero asset edit provenance

- Mode: built-in `image_gen.imagegen`, edit / `background-extraction`, transparent output requested. No API key or fallback CLI was used.
- Original source: `public/brand/Kairos-favicon.png`, unchanged.
- Selected project derivative: `public/brand/derived/kairos-hourglass-transparent.png`.
- Output dimensions: 1536 × 1024; RGBA PNG.
- Original generated result was copied into the project, leaving its tool-managed source intact.
- Only the selected derivative is imported by the homepage.
- The temporary navy/checkerboard compositing proofs were made with the already installed Sharp processor for inspection. Compositing does not modify the selected asset or its original source.

## Exact editing prompt

Use case: background-extraction. Image 1 is the EDIT TARGET, the official KAIROS hourglass-shaped K artwork. Remove ONLY the entire dark rectangular background/matte to create a genuine alpha-transparent PNG cutout for a dark navy website (#080B19). Preserve the exact existing hourglass K geometry, proportions, composition, glass surfaces, all purple/cyan/blue/pink/ember gradients, neon rim lighting, orange falling sand and granular sand detail, and the delicate colored glow as accurately as possible. Do not redesign, redraw, restyle, recolor or simplify the mark. Keep the entire subject and soft luminous fringe uncropped. Background and empty negative spaces must have actual zero alpha, including empty regions within the K; softly fading colored light should use partial alpha, without a black or gray rectangular matte. No text, no wordmark, no circle, no frame, no card, no drop-shadow rectangle, no solid background, no checkerboard painted into the image. Match the supplied original rather than generating a new logo.

## Review and limits

The selected result was inspected against the source, then composited over the site's navy `#080B19` and a light checkerboard at 560px and 280px image widths. No rectangular matte was visible in these proofs; colored light fades into transparency. The alpha channel contains both zero-alpha negative space and partially transparent glow. No black rectangle is concealed by matching its color to the page.

The cutout is an AI-assisted edit, so it is not guaranteed to preserve every original pixel or grain of sand. The recognizable shape, proportions, glass, sand, gradients and neon light remain visually intact. Brand-owner approval of fine texture and glow is still recommended. Actual webpage desktop/mobile browser inspection was unavailable, and these asset proofs do not establish full-page layout or interaction correctness.
