import { extractor as babelExtractor } from "@lingui/cli/api";
import { formatter } from "@lingui/format-json";
import { vueExtractor } from "@lingui/extractor-vue";
import type { LinguiConfig } from "@lingui/conf";

export default {
  locales: ["zh-cn", "en"],
  sourceLocale: "zh-cn",
  compileNamespace: "ts",
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["<rootDir>/src"],
    },
  ],
  format: formatter({ style: "minimal" }),
  extractors: [babelExtractor, vueExtractor],
} as LinguiConfig;
