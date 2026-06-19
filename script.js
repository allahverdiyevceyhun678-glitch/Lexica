document.getElementById('searchBtn').addEventListener('click', function() {
    const word = document.getElementById('searchInput').value;
    // Nəticəni göstərmək üçün sadə bir alert
    if (word) {
        alert("Sən '" + word + "' sözünü axtardın. Dərinliklər yüklənir...");
    } else {
        alert("Zəhmət olmasa bir söz yaz!");
    }
});
