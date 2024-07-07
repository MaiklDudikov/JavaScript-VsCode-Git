document.getElementById('showHistory').addEventListener('click', () => {
    const historyCount = history.length;
    document.getElementById('historyCount').textContent = `Записей в истории: ${historyCount}`;
});
