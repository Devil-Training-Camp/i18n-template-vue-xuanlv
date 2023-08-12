import { i18n } from "@lingui/core";

export const dynamicActivateFrom = (locale: string) =>
  import(`./locales/${locale}/messages.ts`).then(({ messages }) => messages);

const defaultLocale = localStorage.getItem("locale") || "zh-cn";

const messages = await dynamicActivateFrom(defaultLocale);

i18n.load(defaultLocale, messages);
i18n.activate(defaultLocale);
