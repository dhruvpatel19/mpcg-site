/**
 * Multilingual quick phrases for urgent situations.
 *
 * Every language is labelled by its own native name first, with the English
 * name alongside for staff who read English. Phrases are intentionally short
 * and literal so they stay safe to show to clinic or hospital staff.
 */
export interface QuickPhrase {
  /** BCP 47 language tag for the phrase text. */
  code: string;
  /** The language's name in that language. */
  nativeName: string;
  /** The language's name in English, shown as a secondary label. */
  englishName: string;
  /** "I need urgent medical help." */
  urgent: string;
  /** "I need an interpreter, please." */
  interpreter: string;
  /** Text direction of the phrase text. */
  dir: "ltr" | "rtl";
}

export const QUICK_PHRASES: ReadonlyArray<QuickPhrase> = [
  {
    code: "en",
    nativeName: "English",
    englishName: "English",
    urgent: "I need urgent medical help.",
    interpreter: "I need an interpreter, please.",
    dir: "ltr",
  },
  {
    code: "fr",
    nativeName: "Français",
    englishName: "French",
    urgent: "J'ai besoin d'aide médicale urgente.",
    interpreter: "J'ai besoin d'un interprète, s'il vous plaît.",
    dir: "ltr",
  },
  {
    code: "es",
    nativeName: "Español",
    englishName: "Spanish",
    urgent: "Necesito ayuda médica urgente.",
    interpreter: "Necesito un intérprete, por favor.",
    dir: "ltr",
  },
  {
    code: "ar",
    nativeName: "العربية",
    englishName: "Arabic",
    urgent: "أحتاج إلى مساعدة طبية عاجلة.",
    interpreter: "أحتاج إلى مترجم فوري، من فضلك.",
    dir: "rtl",
  },
  {
    code: "zh-Hans",
    nativeName: "中文（简体）",
    englishName: "Chinese (Simplified)",
    urgent: "我需要紧急医疗帮助。",
    interpreter: "我需要一位口译员，谢谢。",
    dir: "ltr",
  },
  {
    code: "uk",
    nativeName: "Українська",
    englishName: "Ukrainian",
    urgent: "Мені потрібна термінова медична допомога.",
    interpreter: "Мені потрібен перекладач, будь ласка.",
    dir: "ltr",
  },
  {
    code: "fa",
    nativeName: "فارسی / دری",
    englishName: "Persian / Dari",
    urgent: "من به کمک پزشکی فوری نیاز دارم.",
    interpreter: "لطفاً یک مترجم می‌خواهم.",
    dir: "rtl",
  },
  {
    code: "ur",
    nativeName: "اردو",
    englishName: "Urdu",
    urgent: "مجھے فوری طبی مدد کی ضرورت ہے۔",
    interpreter: "براہِ مہربانی، مجھے مترجم کی ضرورت ہے۔",
    dir: "rtl",
  },
  {
    code: "hi",
    nativeName: "हिन्दी",
    englishName: "Hindi",
    urgent: "मुझे तुरंत चिकित्सा सहायता चाहिए।",
    interpreter: "कृपया मुझे एक दुभाषिया चाहिए।",
    dir: "ltr",
  },
  {
    code: "pa",
    nativeName: "ਪੰਜਾਬੀ",
    englishName: "Punjabi",
    urgent: "ਮੈਨੂੰ ਤੁਰੰਤ ਡਾਕਟਰੀ ਮਦਦ ਦੀ ਲੋੜ ਹੈ।",
    interpreter: "ਕਿਰਪਾ ਕਰਕੇ ਮੈਨੂੰ ਦੁਭਾਸ਼ੀਏ ਦੀ ਲੋੜ ਹੈ।",
    dir: "ltr",
  },
  {
    code: "tl",
    nativeName: "Tagalog",
    englishName: "Tagalog",
    urgent: "Kailangan ko po ng agarang tulong medikal.",
    interpreter: "Kailangan ko po ng interpreter.",
    dir: "ltr",
  },
  {
    code: "yo",
    nativeName: "Yorùbá",
    englishName: "Yoruba",
    urgent: "Mo nílò ìrànlọ́wọ́ oníṣègùn kíákíá.",
    interpreter: "Jọ̀wọ́, mo nílò atúmọ̀-èdè.",
    dir: "ltr",
  },
  {
    code: "ha",
    nativeName: "Hausa",
    englishName: "Hausa",
    urgent: "Ina bukatar taimakon likita cikin gaggawa.",
    interpreter: "Don Allah, ina bukatar mai fassara.",
    dir: "ltr",
  },
  {
    code: "ig",
    nativeName: "Igbo",
    englishName: "Igbo",
    urgent: "Achọrọ m enyemaka ahụike ozugbo.",
    interpreter: "Biko, achọrọ m onye ntụgharị okwu.",
    dir: "ltr",
  },
  {
    code: "am",
    nativeName: "አማርኛ",
    englishName: "Amharic",
    urgent: "አስቸኳይ የሕክምና እርዳታ እፈልጋለሁ።",
    interpreter: "እባክዎ አስተርጓሚ እፈልጋለሁ።",
    dir: "ltr",
  },
  {
    code: "sw",
    nativeName: "Kiswahili",
    englishName: "Swahili",
    urgent: "Nahitaji msaada wa matibabu wa haraka.",
    interpreter: "Tafadhali, nahitaji mkalimani.",
    dir: "ltr",
  },
  {
    code: "so",
    nativeName: "Soomaali",
    englishName: "Somali",
    urgent: "Waxaan u baahanahay caawimaad caafimaad oo degdeg ah.",
    interpreter: "Fadlan waxaan u baahanahay turjubaan.",
    dir: "ltr",
  },
  {
    code: "ti",
    nativeName: "ትግርኛ",
    englishName: "Tigrinya",
    urgent: "ህጹጽ ሕክምናዊ ሓገዝ የድልየኒ እዩ።",
    interpreter: "በጃኹም ተርጓሚ የድልየኒ እዩ።",
    dir: "ltr",
  },
  {
    code: "ko",
    nativeName: "한국어",
    englishName: "Korean",
    urgent: "긴급한 의료 도움이 필요합니다.",
    interpreter: "통역사가 필요합니다.",
    dir: "ltr",
  },
  {
    code: "pt",
    nativeName: "Português",
    englishName: "Portuguese",
    urgent: "Preciso de ajuda médica urgente.",
    interpreter: "Preciso de um intérprete, por favor.",
    dir: "ltr",
  },
  {
    code: "vi",
    nativeName: "Tiếng Việt",
    englishName: "Vietnamese",
    urgent: "Tôi cần được giúp đỡ y tế khẩn cấp.",
    interpreter: "Tôi cần một thông dịch viên.",
    dir: "ltr",
  },
  {
    code: "ru",
    nativeName: "Русский",
    englishName: "Russian",
    urgent: "Мне срочно нужна медицинская помощь.",
    interpreter: "Мне нужен переводчик, пожалуйста.",
    dir: "ltr",
  },
] as const;
