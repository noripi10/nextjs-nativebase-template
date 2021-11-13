import { useRouter } from "next/router";

import ja from "../locales/ja";
import en from "../locales/en";

export const useLocale = () => {
  const router = useRouter();

  const t = router.locale === "ja" ? ja : en;
  const locales = [
    { lang: "ja", name: "日本語" },
    { lang: "en", name: "English" },
  ];

  return { locale: router.locale, t, locales };
};
