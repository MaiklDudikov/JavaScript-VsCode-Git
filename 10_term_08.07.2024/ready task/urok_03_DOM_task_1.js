const blocks = document.querySelectorAll('.draggable');

blocks.forEach(block => {
    block.addEventListener('mousedown', (e) => {
        const shiftX = e.clientX - block.getBoundingClientRect().left;
        const shiftY = e.clientY - block.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            block.style.left = pageX - shiftX + 'px';
            block.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        block.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            block.onmouseup = null;
        };

        block.ondragstart = () => {
            return false;
        };
    });
});
