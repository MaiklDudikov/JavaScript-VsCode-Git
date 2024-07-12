const lights = document.querySelectorAll('.light');
let currentIndex = 0;

document.getElementById('changeColor').addEventListener('click', function() {
    lights[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % lights.length;
    lights[currentIndex].classList.add('active');
});
