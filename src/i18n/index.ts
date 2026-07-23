import en from './en.json';
import id from './id.json';

export type TranslationSet = typeof en;

const files: Record<string, TranslationSet> = { en, id };

export function useTranslations(locale: string): TranslationSet {
  return files[locale] || files.en;
}
