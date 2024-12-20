import "server-only";

type Dictionary = {
  page: {
    desc: string;
    things: string;
  };
};

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loadDictionary = dictionaries[locale];

  if (!loadDictionary) {
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }

  return loadDictionary();
};
