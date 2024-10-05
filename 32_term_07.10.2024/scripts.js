$(document).ready(function () {
    $('#menu-toggle').click(function () {
        // Переключение показа/скрытия меню с анимацией
        $('#menu').slideToggle(300);

        // Переключение между гамбургером и крестиком
        $('#hamburger').toggleClass('hidden');
        $('#close').toggleClass('hidden');
    });
});
