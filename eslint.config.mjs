import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // Full document navigation avoids hosted RSC route interception failures.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([".next/**", ".vinext/**", "dist/**", "out/**", "next-env.d.ts"]),
]);
