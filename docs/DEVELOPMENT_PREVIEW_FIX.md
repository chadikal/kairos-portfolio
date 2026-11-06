# Development preview fix — 2026-11-06

## Summary

Fixed the blank LAN preview. The development server returned HTTP 500 because `package.json` began with a UTF-8 byte-order mark. Removed the marker, normalized JSON serialization, configured the exact requested LAN hostname, and restarted only this project's server with a fresh development cache. The stale cache was preserved under `.next/dev-before-encoding-fix-*`.

## Files Changed

- `package.json`: UTF-8 without BOM; normal JSON characters instead of escaped operators.
- `next.config.ts`: `allowedDevOrigins: ['192.168.1.8']`.
- This completion report.

## Components Reused

Existing homepage and verification script; no UI changes.

## New Components

None.

## Dependencies

No changes.

## Tests and Verification

Formatting, ESLint, strict TypeScript, and a fresh production build passed. Production smoke checks passed on temporary port 3001. The LAN development homepage and 22 script/style/image/icon responses returned HTTP 200 with the LAN Origin and Referer headers. The production smoke script's font-preload assertion is production-specific and does not pass against the dev server; the dev asset check was performed separately. Visual browser review remains unverified.

The original milestone build ran before the final manifest serialization added the BOM. Its production server used an already-built artifact, which is why those checks did not reveal the subsequent development-mode parsing failure. The fresh build above verifies the corrected manifest.

## Functionality

Development preview left running at http://192.168.1.8:3000. The temporary production verification server was stopped. No deployment performed.

## Manual Review

Hard-refresh the LAN page with Ctrl+Shift+R. Confirm the design and mobile navigation in your browser.

## Learning Notes

Windows PowerShell's `Set-Content -Encoding utf8` can write a BOM. npm tolerates it, while Turbopack and its CSS loader's JSON parser reject it. The existing EditorConfig already requests plain UTF-8. Next.js also restricts development resource origins; see the [official allowedDevOrigins documentation](https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins).

## Toolkit Improvements

Consider a development-server smoke check alongside production verification when adopting the starter. The original toolkit was not modified.

## Git Status

The preview fix was originally left uncommitted for review. It is included in the subsequent Milestone 1.1 delivery on `main`; no push was performed during the original troubleshooting follow-up.
