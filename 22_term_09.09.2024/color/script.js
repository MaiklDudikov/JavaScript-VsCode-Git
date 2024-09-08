document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("colorForm");
    const colorNameInput = document.getElementById("colorName");
    const colorTypeSelect = document.getElementById("colorType");
    const colorCodeInput = document.getElementById("colorCode");
    const errorMessages = document.getElementById("errorMessages");
    const colorPalette = document.getElementById("colorPalette");

    const existingColors = JSON.parse(getCookie("colors") || "[]");

    existingColors.forEach(color => addColorBox(color));

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const colorName = colorNameInput.value.trim();
        const colorType = colorTypeSelect.value;
        const colorCode = colorCodeInput.value.trim();

        const errors = validateInputs(colorName, colorType, colorCode, existingColors);

        if (errors.length > 0) {
            errorMessages.innerHTML = errors.join("<br>");
        } else {
            errorMessages.innerHTML = "";
            const newColor = { name: colorName, type: colorType, code: colorCode };
            existingColors.push(newColor);
            setCookie("colors", JSON.stringify(existingColors), 3);
            addColorBox(newColor);
            form.reset();
        }
    });

    function validateInputs(name, type, code, existingColors) {
        const errors = [];
        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(name)) {
            errors.push("Название должно содержать только буквенные символы (A-Z, a-z).");
        }
        if (existingColors.some(color => color.name.toLowerCase() === name.toLowerCase())) {
            errors.push("Цвет с таким названием уже существует.");
        }
        if (type === "RGB") {
            if (!/^(\d{1,3}),(\d{1,3}),(\d{1,3})$/.test(code) || !code.split(',').every(num => parseInt(num) >= 0 && parseInt(num) <= 255)) {
                errors.push("Неверный формат RGB. Ожидается: 0-255,0-255,0-255.");
            }
        } else if (type === "RGBA") {
            const rgbaParts = code.split(',');
            if (rgbaParts.length !== 4 || !rgbaParts.slice(0, 3).every(num => parseInt(num) >= 0 && parseInt(num) <= 255) || !(parseFloat(rgbaParts[3]) >= 0 && parseFloat(rgbaParts[3]) <= 1)) {
                errors.push("Неверный формат RGBA. Ожидается: 0-255,0-255,0-255,0-1.");
            }
        } else if (type === "HEX") {
            if (!/^#[0-9A-Fa-f]{6}$/.test(code)) {
                errors.push("Неверный формат HEX. Ожидается: #FFFFFF.");
            }
        }
        return errors;
    }

    function addColorBox(color) {
        const colorBox = document.createElement("div");
        colorBox.className = "colorBox";
        colorBox.style.backgroundColor = color.type === "HEX" ? color.code : `rgba(${color.code})`;
        colorBox.innerHTML = `<div>${color.name.toUpperCase()}</div><div>${color.type}</div><div>${color.code}</div>`;
        colorPalette.appendChild(colorBox);
    }

    function setCookie(name, value, hours) {
        const date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
});
