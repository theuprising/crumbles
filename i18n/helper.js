import localizations from './localizations'

// log({localizations})

const i18n = locale => (path, args = []) => {
  // console.log({locale, path, args})
  const copy = locale ? localizations[locale] : localizations['en_us']
  const keys = path.split('.')
  const copyText = keys.reduce((result, key) => result[key], copy)
  return args.reduce((text, arg, i) =>
    text.replace(`${i + 1}$`, arg), copyText)
}

export default i18n
