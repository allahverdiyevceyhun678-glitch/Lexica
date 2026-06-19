// Lexica — Ağıllı axtarış + çoxdilli

const translations = {
    az: { title: "📘 Lexica", subtitle: "Hər sözün 1000 dərinliyinə en", langLabel: "Dil:", placeholder: "Mövzu və ya söz yazın...", searchBtn: "🔍 Axtar", examplesLabel: "Cəhd edin:", loading: "Dərin axtarış aparılır...", copyBtn: "📋 Kopyala", newSearch: "🔄 Yeni axtarış", copied: "Kopyalandı! ✅", emptyInput: "Zəhmət olmasa bir söz yazın", errorGeneric: "Xəta baş verdi. Yenidən cəhd edin.", footer: "Lexica · 2026 · Made with ❤️", dir: "ltr" },
    en: { title: "📘 Lexica", subtitle: "Every word, 1000 layers deep", langLabel: "Language:", placeholder: "Type a topic or word...", searchBtn: "🔍 Search", examplesLabel: "Try:", loading: "Deep search in progress...", copyBtn: "📋 Copy", newSearch: "🔄 New search", copied: "Copied! ✅", emptyInput: "Please type a word", errorGeneric: "Something went wrong. Try again.", footer: "Lexica · 2026 · Made with ❤️", dir: "ltr" },
    tr: { title: "📘 Lexica", subtitle: "Her kelimenin 1000 derinliğine in", langLabel: "Dil:", placeholder: "Konu veya kelime yazın...", searchBtn: "🔍 Ara", examplesLabel: "Deneyin:", loading: "Derin arama sürüyor...", copyBtn: "📋 Kopyala", newSearch: "🔄 Yeni arama", copied: "Kopyalandı! ✅", emptyInput: "Lütfen bir kelime yazın", errorGeneric: "Bir hata oluştu. Tekrar deneyin.", footer: "Lexica · 2026 · Made with ❤️", dir: "ltr" },
    ru: { title: "📘 Lexica", subtitle: "Погрузись на 1000 уровней вглубь любого слова", langLabel: "Язык:", placeholder: "Введите тему или слово...", searchBtn: "🔍 Искать", examplesLabel: "Попробуйте:", loading: "Идёт глубокий поиск...", copyBtn: "📋 Копировать", newSearch: "🔄 Новый поиск", copied: "Скопировано! ✅", emptyInput: "Пожалуйста, введите слово", errorGeneric: "Ошибка. Попробуйте снова.", footer: "Lexica · 2026 · Made with ❤️", dir: "ltr" },
    es: { title: "📘 Lexica", subtitle: "Sumérgete 1000 capas en cada palabra", langLabel: "Idioma:", placeholder: "Escribe un tema o palabra...", searchBtn: "🔍 Buscar", examplesLabel: "Prueba:", loading: "Búsqueda profunda en curso...", copyBtn: "📋 Copiar", newSearch: "🔄 Nueva búsqueda", copied: "¡Copiado! ✅", emptyInput: "Por favor escribe una palabra", errorGeneric: "Algo salió mal. Inténtalo de nuevo.", footer: "Lexica · 2026 · Made with ❤️", dir: "ltr" },
    fr: { title: "📘 Lexica", subtitle: "Plongez 1000 niveaux dans chaque mot", langLabel: "Langue:", placeholder: "Tapez un sujet ou un mot...", searchBtn: "🔍 Chercher", examplesLabel: "Essayez:", loading: "Recherche profonde en cours...", copyBtn: "📋 Copier", newSearch: "🔄 Nouvelle recherche", copied: "Copié! ✅", emptyInput: "Veuillez taper un mot", errorGeneric: "Une erreur est survenue. Réessayez.", footer: "Lexica · 2026 · Made with ❤️", dir: "ltr" },
    de: { title: "📘 Lexica", subtitle: "Tauche 1000 Ebenen tief in jedes Wort", langLabel: "Sprache:", placeholder: "Gib ein Thema oder Wort ein...", searchBtn: "🔍 Suchen", examplesLabel: "Versuche:", loading: "Tiefensuche läuft...", copyBtn: "📋 Kopieren", newSearch: "🔄 Neue Suche", copied: "Kopiert! ✅", emptyInput: "Bitte gib ein Wort ein", errorGeneric: "Etwas ging schief. Versuche es erneut.", footer: "Lexica · 2026 · Made with ❤️", dir: "ltr" },
    zh: { title: "📘 Lexica", subtitle: "深入每个词的一千层", langLabel: "语言:", placeholder: "输入主题或词语...", searchBtn: "🔍 搜索", examplesLabel: "试试:", loading: "正在进行深度搜索...", copyBtn: "📋 复制", newSearch: "🔄 重新搜索", copied: "已复制！✅", emptyInput: "请输入一个词", errorGeneric: "出错了，请重试。", footer: "Lexica · 2026 · Made with ❤️", dir: "ltr" },
    ar: { title: "📘 Lexica", subtitle: "اغوص 1000 طبقة في كل كلمة", langLabel: "اللغة:", placeholder: "اكتب موضوعًا أو كلمة...", searchBtn: "🔍 بحث", examplesLabel: "جرب:", loading: "البحث العميق جارٍ...", copyBtn: "📋 نسخ", newSearch: "🔄 بحث جديد", copied: "تم النسخ! ✅", emptyInput: "الرجاء كتابة كلمة", errorGeneric: "حدث خطأ. حاول مجددًا.", footer: "Lexica · 2026 · Made with ❤️", dir: "rtl" }
};

const els = {
    title: document.getElementById('title'),
    subtitle: document.getElementById('subtitle'),
    langLabel: document.getElementById('lang-label'),
    language: document.getElementById('language'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    examplesLabel: document.getElementById('examples-label'),
    tags: document.querySelectorAll('.tag'),
    result: document.getElementById('result'),
    resultTitle: document.getElementById('result-title'),
    resultContent: document.getElementById('result-content'),
    copyBtn: document.getElementById('copyBtn'),
    newSearchBtn: document.getElementById('newSearchBtn'),
    loading: document.getElement    els.result.classList.remove('hidden');
    els.result
