// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.

/* eslint-disable */
import en from './en'
import { initFormatters } from './formatters'
import fr from './fr'
import type { Translation, TranslationFunctions, Formatters, Locales } from './i18n-types'
import type { LocaleTranslations } from 'typesafe-i18n'
import { i18nString as initI18nString, i18nObjectLoader, i18n as initI18n } from 'typesafe-i18n'
import type { LocaleDetector } from 'typesafe-i18n/detectors'
import { detectLocale as detectLocaleFn } from 'typesafe-i18n/detectors'

export const baseLocale: Locales = 'en'

export const locales: Locales[] = ['en', 'fr']

const localeTranslations: LocaleTranslations<Locales, Translation> = {
  en: en as Translation,
  fr,
}

export const getTranslationForLocale = (locale: Locales) =>
  localeTranslations[locale] || localeTranslations[baseLocale]

export const i18nObject = (locale: Locales) =>
  i18nObjectLoader<Locales, Translation, TranslationFunctions, Formatters>(
    locale,
    getTranslationForLocale,
    initFormatters
  )

export const i18n = () =>
  initI18n<Locales, Translation, TranslationFunctions, Formatters>(
    getTranslationForLocale,
    initFormatters
  )

export const i18nString = (locale: Locales) =>
  initI18nString<Locales, Formatters>(locale, initFormatters(locale))

export const detectLocale = (...detectors: LocaleDetector[]) =>
  detectLocaleFn<Locales>(baseLocale, locales, ...detectors)
