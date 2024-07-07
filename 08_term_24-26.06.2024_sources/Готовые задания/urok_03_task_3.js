const leftBlock = document.getElementById('leftBlock');
const middleBlock = document.getElementById('middleBlock');
const rightBlock = document.getElementById('rightBlock');

document.addEventListener('mousedown', (event) => {
    switch (event.button) {
        case 0:
            moveBlock(leftBlock, event);
            break;
        case 1:
            moveBlock(middleBlock, event);
            break;
        case 2:
            moveBlock(rightBlock, event);
            event.preventDefault();
            break;
    }
});

function moveBlock(block, event) {
    block.style.left = `${event.clientX - 50}px`;
    block.style.top = `${event.clientY - 50}px`;
}
