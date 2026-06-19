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
    loading: document.getElementById('loading'),
    loadingText: document.getElementById('loading-text'),
    error: document.getElementById('error'),
    footer: document.getElementById('footer-text')
};

let currentLang = 'az';

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;
    els.title.textContent = t.title;
    els.subtitle.textContent = t.subtitle;
    els.langLabel.textContent = t.langLabel;
    els.searchInput.placeholder = t.placeholder;
    els.searchBtn.textContent = t.searchBtn;
    els.examplesLabel.textContent = t.examplesLabel;
    els.loadingText.textContent = t.loading;
    els.copyBtn.textContent = t.copyBtn;
    els.newSearchBtn.textContent = t.newSearch;
    els.footer.textContent = t.footer;
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', lang);
}

function showError(msg) {
    els.error.textContent = msg;
    els.error.classList.remove('hidden');
    els.loading.classList.add('hidden');
    els.result.classList.add('hidden');
    setTimeout(() => els.error.classList.add('hidden'), 4000);
}

function showLoading() {
    els.loading.classList.remove('hidden');
    els.result.classList.add('hidden');
    els.error.classList.add('hidden');
}

function hideLoading() {
    els.loading.classList.add('hidden');
}

function showResult(title, content) {
    els.resultTitle.textContent = title;
    els.resultContent.innerHTML = content;
    els.result.classList.remove('hidden');
    els.result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generateDemoAnswer(query, lang) {
    const notes = {
        az: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ Demo rejimi:</strong> Real AI cavabı üçün OpenAI API açarı əlavə edilməlidir.</p>',
        en: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ Demo mode:</strong> OpenAI API key needed for real AI responses.</p>',
        tr: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ Demo modu:</strong> Gerçek AI yanıtı için OpenAI API anahtarı gerekiyor.</p>',
        ru: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ Демо-режим:</strong> Нужен ключ OpenAI API.</p>',
        es: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ Modo demo:</strong> Se necesita clave API de OpenAI.</p>',
        fr: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ Mode démo:</strong> Une clé API OpenAI est nécessaire.</p>',
        de: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ Demo-Modus:</strong> OpenAI API-Schlüssel erforderlich.</p>',
        zh: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ 演示模式:</strong> 需要 OpenAI API 密钥。</p>',
        ar: '<p style="background:#fff3cd;padding:14px;border-radius:8px;border-left:4px solid #ffc107;margin-bottom:18px;"><strong>⚠️ وضع تجريبي:</strong> مطلوب مفتاح OpenAI API.</p>'
    };
    const templates = {
        az: `<h3>📚 Giriş</h3><p><strong>${query}</strong> — bu mövzu çox geniş və vacib sahədir.</p><h3>🔍 Əsas Anlayış</h3><p>Bu mövzu bir neçə mühüm hissədən ibarətdir.</p><h3>📖 Ətraflı İzah</h3><ul><li><strong>Tarix:</strong> İnkişaf mərhələləri</li><li><strong>Əsas prinsiplər:</strong> Fundamental qanunlar</li><li><strong>Tətbiqlər:</strong> Real həyatda istifadəsi</li><li><strong>Müasir tendensiyalar:</strong> Son nailiyyətlər</li></ul><h3>💡 Nümunələr</h3><p>Gündəlik həyatdan və elmdən konkret nümunələr.</p><h3>🎯 Nəticə</h3><p>Bu mövzu müasir təhsil üçün çox vacibdir.</p>`,
        en: `<h3>📚 Introduction</h3><p><strong>${query}</strong> — a wide and important field.</p><h3>🔍 Core Concept</h3><p>This topic consists of several important parts.</p><h3>📖 Detailed Explanation</h3><ul><li><strong>History:</strong> Development milestones</li><li><strong>Core principles:</strong> Fundamental laws</li><li><strong>Applications:</strong> Real-world uses</li><li><strong>Modern trends:</strong> Latest achievements</li></ul><h3>💡 Examples</h3><p>Concrete examples from everyday life.</p><h3>🎯 Conclusion</h3><p>Crucial for modern education.</p>`,
        tr: `<h3>📚 Giriş</h3><p><strong>${query}</strong> — geniş ve önemli bir alan.</p><h3>📖 Detaylı Açıklama</h3><ul><li><strong>Tarih:</strong> Gelişim aşamaları</li><li><strong>Temel ilkeler:</strong> Temel yasalar</li><li><strong>Uygulamalar:</strong> Gerçek hayatta kullanım</li></ul><h3>🎯 Sonuç</h3><p>Modern eğitim için çok önemlidir.</p>`,
        ru: `<h3>📚 Введение</h3><p><strong>${query}</strong> — обширная и важная тема.</p><h3>📖 Подробное объяснение</h3><ul><li><strong>История:</strong> Этапы развития</li><li><strong>Принципы:</strong> Основные законы</li><li><strong>Применение:</strong> Использование в жизни</li></ul><h3>🎯 Заключение</h3><p>Важна для современного образования.</p>`,
        es: `<h3>📚 Introducción</h3><p><strong>${query}</strong> — un tema amplio e importante.</p><h3>📖 Explicación detallada</h3><ul><li><strong>Historia:</strong> Hitos del desarrollo</li><li><strong>Principios:</strong> Leyes fundamentales</li><li><strong>Aplicaciones:</strong> Usos en la vida real</li></ul><h3>🎯 Conclusión</h3><p>Crucial para la educación moderna.</p>`,
        fr: `<h3>📚 Introduction</h3><p><strong>${query}</strong> — un sujet vaste et important.</p><h3>📖 Explication détaillée</h3><ul><li><strong>Histoire:</strong> Étapes de développement</li><li><strong>Principes:</strong> Lois fondamentales</li><li><strong>Applications:</strong> Utilisations concrètes</li></ul><h3>🎯 Conclusion</h3><p>Essentiel pour l'éducation moderne.</p>`,
        de: `<h3>📚 Einführung</h3><p><strong>${query}</strong> — ein weites und wichtiges Thema.</p><h3>📖 Detaillierte Erklärung</h3><ul><li><strong>Geschichte:</strong> Meilensteine</li><li><strong>Prinzipien:</strong> Grundgesetze</li><li><strong>Anwendungen:</strong> Reale Verwendungen</li></ul><h3>🎯 Fazit</h3><p>Entscheidend für die moderne Bildung.</p>`,
        zh: `<h3>📚 介绍</h3><p><strong>${query}</strong> — 一个广泛而重要的主题。</p><h3>📖 详细说明</h3><ul><li><strong>历史:</strong> 发展阶段</li><li><strong>原理:</strong> 基本法则</li><li><strong>应用:</strong> 实际用途</li></ul><h3>🎯 结论</h3><p>对现代教育至关重要。</p>`,
        ar: `<h3>📚 مقدمة</h3><p><strong>${query}</strong> — موضوع واسع ومهم.</p><h3>📖 شرح مفصل</h3><ul><li><strong>التاريخ:</strong> مراحل التطور</li><li><strong>المبادئ:</strong> القوانين الأساسية</li><li><strong>التطبيقات:</strong> الاستخدامات الحقيقية</li></ul><h3>🎯 خاتمة</h3><p>ضروري للتعليم الحديث.</p>`
    };
    return (notes[lang] || notes.az) + (templates[lang] || templates.az);
}

async function performSearch() {
    const query = els.searchInput.value.trim();
    if (!query) { showError(translations[currentLang].emptyInput); return; }
    showLoading();
    els.searchBtn.disabled = true;
    try {
        await new Promise(r => setTimeout(r, 1200));
        hideLoading();
        showResult(query, generateDemoAnswer(query, currentLang));
    } catch (err) {
        hideLoading();
        showError(translations[currentLang].errorGeneric);
    } finally {
        els.searchBtn.disabled = false;
    }
}

els.language.addEventListener('change', e => applyLanguage(e.target.value));
els.searchBtn.addEventListener('click', performSearch);
els.searchInput.addEventListener('keypress', e => { if (e.key === 'Enter') performSearch(); });
els.newSearchBtn.addEventListener('click', () => {
    els.result.classList.add('hidden');
    els.searchInput.value = '';
    els.searchInput.focus();
});
els.copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(els.resultContent.innerText).then(() => {
        const original = els.copyBtn.textContent;
        els.copyBtn.textContent = translations[currentLang].copied;
        setTimeout(() => els.copyBtn.textContent = original, 2000);
    });
});
els.tags.forEach(tag => {
    tag.addEventListener('click', () => { els.searchInput.value = tag.dataset.word; performSearch(); });
});

applyLanguage('az');
els.searchInput.focus();
