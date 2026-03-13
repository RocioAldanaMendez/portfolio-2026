import type { Locale } from "./config";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";

const dictionaries: Record<string, typeof en> = { en, es };

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] || dictionaries.en;
};
