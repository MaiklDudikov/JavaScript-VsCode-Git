document.addEventListener('DOMContentLoaded', function() {
    const bottomBlock = document.getElementById('bottom-block');
    const blocks = document.querySelectorAll('.block:not(#bottom-block)');

    blocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            const color = block.getAttribute('data-color');
            bottomBlock.style.backgroundColor = color;
        });

        block.addEventListener('mouseleave', function() {
            bottomBlock.style.backgroundColor = '#ccc';
        });
    });
});
