/**
 * Long-tail language access via Google Translate's website-translation proxy
 * (translate.goog). This is free, needs no API key or injected script, works
 * in every browser, and covers 100+ languages — so communities not served by
 * the five reviewed in-app languages (e.g. Somali, Yoruba, Igbo, Hausa,
 * Amharic, Tigrinya) can still read the whole site.
 *
 * Codes are Google Translate language codes. Names are shown native-first.
 */
export interface MoreLanguage {
  /** Google Translate target-language code. */
  code: string;
  nativeName: string;
  englishName: string;
}

export const MORE_LANGUAGES: ReadonlyArray<MoreLanguage> = [
  { code: "sq", nativeName: "Shqip", englishName: "Albanian" },
  { code: "am", nativeName: "አማርኛ", englishName: "Amharic" },
  { code: "hy", nativeName: "Հայերեն", englishName: "Armenian" },
  { code: "az", nativeName: "Azərbaycan dili", englishName: "Azerbaijani" },
  { code: "bn", nativeName: "বাংলা", englishName: "Bengali" },
  { code: "bs", nativeName: "Bosanski", englishName: "Bosnian" },
  { code: "bg", nativeName: "Български", englishName: "Bulgarian" },
  { code: "my", nativeName: "မြန်မာစာ", englishName: "Burmese" },
  { code: "zh-TW", nativeName: "中文（繁體）", englishName: "Chinese (Traditional)" },
  { code: "hr", nativeName: "Hrvatski", englishName: "Croatian" },
  { code: "cs", nativeName: "Čeština", englishName: "Czech" },
  { code: "da", nativeName: "Dansk", englishName: "Danish" },
  { code: "nl", nativeName: "Nederlands", englishName: "Dutch" },
  { code: "et", nativeName: "Eesti", englishName: "Estonian" },
  { code: "tl", nativeName: "Filipino / Tagalog", englishName: "Filipino (Tagalog)" },
  { code: "fi", nativeName: "Suomi", englishName: "Finnish" },
  { code: "ka", nativeName: "ქართული", englishName: "Georgian" },
  { code: "de", nativeName: "Deutsch", englishName: "German" },
  { code: "el", nativeName: "Ελληνικά", englishName: "Greek" },
  { code: "gu", nativeName: "ગુજરાતી", englishName: "Gujarati" },
  { code: "ht", nativeName: "Kreyòl ayisyen", englishName: "Haitian Creole" },
  { code: "ha", nativeName: "Hausa", englishName: "Hausa" },
  { code: "iw", nativeName: "עברית", englishName: "Hebrew" },
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi" },
  { code: "hu", nativeName: "Magyar", englishName: "Hungarian" },
  { code: "ig", nativeName: "Igbo", englishName: "Igbo" },
  { code: "id", nativeName: "Bahasa Indonesia", englishName: "Indonesian" },
  { code: "it", nativeName: "Italiano", englishName: "Italian" },
  { code: "ja", nativeName: "日本語", englishName: "Japanese" },
  { code: "kn", nativeName: "ಕನ್ನಡ", englishName: "Kannada" },
  { code: "kk", nativeName: "Қазақ тілі", englishName: "Kazakh" },
  { code: "km", nativeName: "ខ្មែរ", englishName: "Khmer" },
  { code: "rw", nativeName: "Ikinyarwanda", englishName: "Kinyarwanda" },
  { code: "ko", nativeName: "한국어", englishName: "Korean" },
  { code: "ku", nativeName: "Kurdî (Kurmancî)", englishName: "Kurdish (Kurmanji)" },
  { code: "ckb", nativeName: "کوردیی ناوەندی", englishName: "Kurdish (Sorani)" },
  { code: "ky", nativeName: "Кыргызча", englishName: "Kyrgyz" },
  { code: "lo", nativeName: "ລາວ", englishName: "Lao" },
  { code: "lv", nativeName: "Latviešu", englishName: "Latvian" },
  { code: "ln", nativeName: "Lingála", englishName: "Lingala" },
  { code: "lt", nativeName: "Lietuvių", englishName: "Lithuanian" },
  { code: "mg", nativeName: "Malagasy", englishName: "Malagasy" },
  { code: "ms", nativeName: "Bahasa Melayu", englishName: "Malay" },
  { code: "ml", nativeName: "മലയാളം", englishName: "Malayalam" },
  { code: "mr", nativeName: "मराठी", englishName: "Marathi" },
  { code: "mn", nativeName: "Монгол", englishName: "Mongolian" },
  { code: "ne", nativeName: "नेपाली", englishName: "Nepali" },
  { code: "no", nativeName: "Norsk", englishName: "Norwegian" },
  { code: "om", nativeName: "Afaan Oromoo", englishName: "Oromo" },
  { code: "ps", nativeName: "پښتو", englishName: "Pashto" },
  { code: "fa", nativeName: "فارسی / دری", englishName: "Persian / Dari" },
  { code: "pl", nativeName: "Polski", englishName: "Polish" },
  { code: "pt", nativeName: "Português", englishName: "Portuguese" },
  { code: "pa", nativeName: "ਪੰਜਾਬੀ", englishName: "Punjabi" },
  { code: "ro", nativeName: "Română", englishName: "Romanian" },
  { code: "ru", nativeName: "Русский", englishName: "Russian" },
  { code: "sr", nativeName: "Српски", englishName: "Serbian" },
  { code: "sn", nativeName: "ChiShona", englishName: "Shona" },
  { code: "sd", nativeName: "سنڌي", englishName: "Sindhi" },
  { code: "si", nativeName: "සිංහල", englishName: "Sinhala" },
  { code: "sk", nativeName: "Slovenčina", englishName: "Slovak" },
  { code: "so", nativeName: "Soomaali", englishName: "Somali" },
  { code: "sw", nativeName: "Kiswahili", englishName: "Swahili" },
  { code: "sv", nativeName: "Svenska", englishName: "Swedish" },
  { code: "tg", nativeName: "Тоҷикӣ", englishName: "Tajik" },
  { code: "ta", nativeName: "தமிழ்", englishName: "Tamil" },
  { code: "te", nativeName: "తెలుగు", englishName: "Telugu" },
  { code: "th", nativeName: "ไทย", englishName: "Thai" },
  { code: "ti", nativeName: "ትግርኛ", englishName: "Tigrinya" },
  { code: "tr", nativeName: "Türkçe", englishName: "Turkish" },
  { code: "tk", nativeName: "Türkmen dili", englishName: "Turkmen" },
  { code: "ak", nativeName: "Twi (Akan)", englishName: "Twi (Akan)" },
  { code: "uk", nativeName: "Українська", englishName: "Ukrainian" },
  { code: "ur", nativeName: "اردو", englishName: "Urdu" },
  { code: "uz", nativeName: "Oʻzbekcha", englishName: "Uzbek" },
  { code: "vi", nativeName: "Tiếng Việt", englishName: "Vietnamese" },
  { code: "wo", nativeName: "Wolof", englishName: "Wolof" },
  { code: "yo", nativeName: "Yorùbá", englishName: "Yoruba" },
  { code: "zu", nativeName: "isiZulu", englishName: "Zulu" },
] as const;

/**
 * Build a translate.goog URL for the current page in the target language.
 * Example: https://mpcg--site-vercel-app.translate.goog/faq?_x_tr_sl=en&_x_tr_tl=so
 * (hyphens in the original host are doubled, dots become hyphens).
 */
export const buildTranslateUrl = (targetLanguage: string): string => {
  const { hostname, pathname, search, hash } = window.location;
  const translateHost = `${hostname.replace(/-/g, "--").replace(/\./g, "-")}.translate.goog`;
  const params = new URLSearchParams(search);
  params.set("_x_tr_sl", "en");
  params.set("_x_tr_tl", targetLanguage);
  params.set("_x_tr_hl", targetLanguage);
  return `https://${translateHost}${pathname}?${params.toString()}${hash}`;
};
