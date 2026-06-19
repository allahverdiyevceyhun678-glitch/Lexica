<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lexica — Every word, 1000 layers deep</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1 id="title">📘 Lexica</h1>
            <p id="subtitle">Hər sözün 1000 dərinliyinə en</p>
        </header>

        <div class="lang-selector">
            <label for="language" id="lang-label">Dil:</label>
            <select id="language">
                <option value="az">🇦🇿 Azərbaycan</option>
                <option value="en">🇬🇧 English</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="ru">🇷🇺 Русский</option>
                <option value="es">🇪🇸 Español</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="zh">🇨🇳 中文</option>
                <option value="ar">🇸🇦 العربية</option>
            </select>
        </div>

        <div class="search-box">
            <input
                type="text"
                id="searchInput"
                placeholder="Mövzu və ya söz yazın..."
                autocomplete="off"
            />
            <button id="searchBtn">🔍 Axtar</button>
        </div>

        <div class="examples">
            <p id="examples-label">Cəhd edin:</p>
            <div class="example-tags">
                <button class="tag" data-word="Farmakologiya">Farmakologiya</button>
                <button class="tag" data-word="Kvant fizikası">Kvant fizikası</button>
                <button class="tag" data-word="Photosynthesis">Photosynthesis</button>
                <button class="tag" data-word="Molekulyar biologiya">Molekulyar biologiya</button>
                <button class="tag" data-word="İqtisadiyyat">İqtisadiyyat</button>
                <button class="tag" data-word="Relsenessizlik">Relsenessizlik</button>
            </div>
        </div>

        <div id="result" class="result hidden">
            <div class="result-header">
                <h2 id="result-title"></h2>
                <button id="copyBtn" class="copy-btn">📋 Kopyala</button>
            </div>
            <div id="result-content" class="result-content"></div>
            <div class="result-footer">
                <button id="newSearchBtn">🔄 Yeni axtarış</button>
            </div>
        </div>

        <div id="loading" class="loading hidden">
            <div class="spinner"></div>
            <p id="loading-text">Dərin axtarış aparılır...</p>
        </div>

        <div id="error" class="error hidden"></div>
    </div>

    <footer>
        <p id="footer-text">Lexica · 2026 · Made with ❤️</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
