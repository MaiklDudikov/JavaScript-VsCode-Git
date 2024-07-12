// Функция для отображения подсказки сверху или снизу в зависимости от места на экране
document.querySelectorAll('.tooltip').forEach(tooltip => {
    tooltip.addEventListener('mouseover', function() {
        const tooltipText = this.querySelector('.tooltip-text');
        const tooltipRect = tooltipText.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Проверка, помещается ли подсказка сверху
        if (tooltipRect.top < 0) {
            tooltipText.style.bottom = 'auto';
            tooltipText.style.top = '125%';
            tooltipText.style.marginTop = '5px';
            tooltipText::after {
                top: 'auto';
                bottom: '100%';
                border-color: transparent transparent #6a0dad transparent;
            }
        } else {
            tooltipText.style.bottom = '125%';
            tooltipText.style.top = 'auto';
            tooltipText.style.marginTop = '0';
            tooltipText::after {
                top: '100%';
                bottom: 'auto';
                border-color: #6a0dad transparent transparent transparent;
            }
        }
    });
});
