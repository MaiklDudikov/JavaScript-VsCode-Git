window.addEventListener('load', () => {
    const languages = navigator.languages;
    const preferredLanguage = navigator.language;
    const languagesList = document.getElementById('languages');

    languages.forEach(lang => {
        const listItem = document.createElement('li');
        listItem.textContent = lang;
        if (lang === preferredLanguage) {
            listItem.style.fontWeight = 'bold';
        }
        languagesList.appendChild(listItem);
    });
});
