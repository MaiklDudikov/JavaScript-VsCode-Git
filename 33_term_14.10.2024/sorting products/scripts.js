// Данные о продуктах
const products = [
    { id: 1, name: "APPLE", price: 1.02 },
    { id: 2, name: "PEAR", price: 1.52 },
    { id: 3, name: "BANANA", price: 2.00 },
    { id: 4, name: "MANGO", price: 5.60 },
    { id: 5, name: "ORANGE", price: 2.35 },
    { id: 6, name: "LIME", price: 3.90 },
    { id: 7, name: "APRICOT", price: 4.10 },
    { id: 8, name: "AVOCADO", price: 5.90 },
    { id: 9, name: "PAPAYA", price: 7.00 },
    { id: 10, name: "RASPBERRY", price: 4.60 },
    { id: 11, name: "LEMON", price: 3.45 }
];

// Функция сортировки
function mySort(arr, cmp) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (cmp(arr[i], arr[j])) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

// Компараторы для сортировки
const compareById = (a, b) => a.id > b.id;
const compareByPrice = (a, b) => a.price > b.price;
const compareByName = (a, b) => a.name > b.name;

// Отображение списка продуктов
function displayProducts(products) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <span>#${product.id}</span>
            <h3>${product.name}</h3>
            <p>${product.price.toFixed(2)}$</p>
        `;

        productsContainer.appendChild(productCard);
    });
}

// Обработчик нажатия на кнопку "Sort"
document.getElementById("sortBtn").addEventListener("click", () => {
    const sortType = document.getElementById("sortType").value;

    let comparator;
    switch (sortType) {
        case "price":
            comparator = compareByPrice;
            break;
        case "name":
            comparator = compareByName;
            break;
        default:
            comparator = compareById;
    }

    // Сортируем и обновляем список продуктов
    mySort(products, comparator);
    displayProducts(products);
});

// Отображаем список продуктов при загрузке страницы
displayProducts(products);
