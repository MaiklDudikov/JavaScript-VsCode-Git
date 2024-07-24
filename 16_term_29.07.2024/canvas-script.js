document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
    const shapeSelect = document.getElementById("shapeSelect");
    const colorSelect = document.getElementById("colorSelect");

    let isDrawing = false;
    let startX, startY;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvas.addEventListener("mousedown", function(event) {
        startX = event.offsetX;
        startY = event.offsetY;
        isDrawing = true;
    });

    canvas.addEventListener("mouseup", function(event) {
        if (!isDrawing) return;

        const endX = event.offsetX;
        const endY = event.offsetY;
        const shape = shapeSelect.value;
        const color = colorSelect.value;

        ctx.fillStyle = color;

        if (shape === "rectangle") {
            const width = endX - startX;
            const height = endY - startY;
            ctx.fillRect(startX, startY, width, height);
        } else if (shape === "circle") {
            const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
            ctx.beginPath();
            ctx.arc(startX, startY, radius, 0, Math.PI * 2);
            ctx.fill();
        }

        isDrawing = false;
    });
});
