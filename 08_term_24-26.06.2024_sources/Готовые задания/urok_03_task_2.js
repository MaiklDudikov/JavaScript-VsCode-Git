const movableBlock = document.getElementById('movableBlock');

document.addEventListener('click', (event) => {
    movableBlock.style.left = `${event.clientX - 50}px`;
    movableBlock.style.top = `${event.clientY - 50}px`;
});
