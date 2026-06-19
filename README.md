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
