document.getElementById('field').addEventListener('click', function(event) {
    const field = this;
    const ball = document.getElementById('ball');
    const fieldRect = field.getBoundingClientRect();
    const ballDiameter = ball.offsetWidth;

    let newLeft = event.clientX - fieldRect.left - ballDiameter / 2;
    let newTop = event.clientY - fieldRect.top - ballDiameter / 2;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft > fieldRect.width - ballDiameter) newLeft = fieldRect.width - ballDiameter;
    if (newTop > fieldRect.height - ballDiameter) newTop = fieldRect.height - ballDiameter;

    ball.style.left = newLeft + 'px';
    ball.style.top = newTop + 'px';
});
