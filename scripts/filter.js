// Масив з даними
const products = [
    {
        name: 'Хамагурі',
        description: 'Хамагурі - це справжній смак Японії. Ця страва поєднує в собі ніжність та свіжість морських продуктів. Компонентами Хамагурі є великі крабові лапки, ніжний рис та відмінний соус. Кожен ковзанець Хамагурі - це справжнє задоволення для вашого піднебіння. Погрузіться в смак сходу і насолоджуйтесь цією майстерно приготованою стравою',
        category: "roll",
        image: '../images/01.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 1,
        price: 120
    },
    {
        name: 'Зелений чай',
        description: 'Збалансований смак зеленого чаю ідеально підкреслить ніжний аромат свіжої суші, створюючи гармонійний дует на вашому столі',
        category: "drinks",
        image: '../images/Зелений чай.jfif',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 2,
        price: 40
    },
    {
        name: 'Японський лікер',
        description: 'Відкрийте для себе таємниці смаку Японії з нашим вибором японських лікерів, які надаютm вашому досвіду суші неповторну нотку екзотики та смакового розмаїття',
        category: "drinks",
        image: '../images/Японський лікер.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 3,
        price: 160
    },
    {
        name: 'Саке',
        description: 'Розкрийте таємниці традиційного японського саке, вибравши з нашого різноманітного асортименту, який гармонійно поєднується зі смаком наших найсмачніших суші',
        category: "drinks",
        image: '../images/Саке.jfif',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 4,
        price: 120
    },
    {
        name: 'Рінган',
        description: 'Зануртеся у світ розкоші та ніжності з нашими рінган — десертом, що поєднує в собі теплу текстуру спеціального рисового пудингу з ароматом медового соусу або карамелі, створюючи справжню симфонію смаку на вашому небіжчику',
        category: "deserts",
        image: '../images/Рінган.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 22,
        price: 110
    },
    {
        name: 'Темпура морозиво',
        description: 'Представляємо вам вишукану гармонію смаку та текстури з нашим темпурою морозивом — крихким обгортанням, що розтане у роті, обєднане з мяким, освіжаючим морозивом, яке робить кожен ковток справжнім задоволенням',
        category: "deserts",
        image: '../images/Темпура морозиво.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 5,
        price: 100
    },
    {
        name: 'Фруктовий сорбет',
        description: 'Почувайте себе освіженими та оживленими з нашим фруктовим сорбетом — ніжним, легким і повним натурального смаку вибраних фруктів, які розкривають вам всю силу природи у кожній ложці',
        category: "deserts",
        image: '../images/Фруктовий сорбет.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 6,
        price: 95
    },
    {
        name: 'Хосомакі',
        description: 'Хосомакі - це класична страва японської кухні, яка відзначається своєю легкістю та вишуканістю',
        category: "roll",
        image: '../images/08.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 7,
        price: 140
    },
    {
        name: 'Макі',
        description: 'Ця страва представляє собою сушений рис, норі (морська водорість) та різноманітні начинки, від яких залежить смак і вид макі. Зазвичай, макі суміш рису та оцту, яка покриває норі і використовується як основа для інших інгредієнтів',
        category: "roll",
        image: '../images/02.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 8,
        price: 120
    },
    {
        name: 'Темакі',
        description: 'Ця страва складається зі спеціально приготовленого сушеного рису, свіжих морських продуктів, овочів і соусів, які завертають у норі-водорості в конусоподібну форму. Темакі відзначається своєю легкістю і неймовірним смаком',
        category: "roll",
        image: '../images/03.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 9,
        price: 220
    },
    {
        name: 'Урамакі',
        description: ' Ця страва представляє собою роли, в яких рис і інші начинки розташовані всередині норі-водоростей, обернутих смачними інгредієнтами',
        category: "roll",
        image: '../images/04.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 10,
        price: 230
    },
    {
        name: 'Футомакі',
        description: 'Ця страва відрізняється великими рулонами суші, де рис і начинка розташовані на зворотному боці норі-водоростей, а самі рулони подаються з начинкою наверху, яка часто прикрашається таємничою та смачною підливою',
        category: "roll",
        image: '../images/05.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 11,
        price: 240
    },
    {
        name: 'Інарізуші',
        description: 'Інарізуші виготовляється з солодкого сиропу та жареного тофу, які містяться внутрішньо і вкладені в кислу рисову основу, зазвичай у формі маленьких кишеньок або мішечків.',
        category: "roll",
        image: '../images/06.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 12,
        price: 200
    },
    {
        name: 'Чірашізуші',
        description: 'Ця страва представляє собою сушений рис, утворений в певну форму, зазвичай кульковидну або конусоподібну, на якому розташовані різні види морепродуктів та інших інгредієнтів',
        category: "roll",
        image: '../images/07.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 13,
        price: 210
    },
    {
        name: 'Спрінг роли',
        description: 'Основою "Спрінг ролів" є тонкі рисові папери, які використовуються для обгортання начинки. Ця начинка може бути дуже різноманітною, включаючи свіжі овочі, листя салату, морепродукти  та різні соуси',
        category: "roll",
        image: '../images/010.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 14,
        price: 330
    },
    {
        name: 'Сашимі',
        description: 'Основною складовою "Сашимі" є свіжі скумбрі, тунець, лосось або інші види морських продуктів. ',
        category: "roll",
        image: '../images/011.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 15,
        price: 215
    },
    {
        name: 'Чіраші',
        description: 'Типові інгредієнти для "Чіраші" включають тонку смужку омара, тигрові креветки, ікру, краб, мідії та інші морські делікатеси',
        category: "roll",
        image: '../images/012.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 16,
        price: 300
    },
    {
        name: 'Кольорові суші сет',
        description: 'Кольорові суші сет - це страва, яка вражає своєю красою та різноманіттям смаків. Цей сет суші відзначається багатством кольорів, а також вишуканістю у виборі інгредієнтів.',
        category: "roll",
        image: '../images/09.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 17,
        price: 450
    },
    {
        name: 'Японське пиво',
        description: 'Цей бурштиновий ель зварений з використанням насиченого солоду та гіркого хмелю. Смаковий профіль характеризується солодкою карамельною фруктовістю',
        category: "drinks",
        image: '../images/Японсььке пиво.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 18,
        price: 230
    },
    {
        name: 'Устричний сік',
        description: 'Пориньте у безмежність смакових відчуттів з нашим унікальним устричним соком, який допоможе вам очистити палату перед новим смаковим випробуванням',
        category: "drinks",
        image: '../images/Устричний сік.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 19,
        price: 130
    },
    {
        name: 'Моті',
        description: 'Зануртесь у ніжний світ японських смаків з нашими моті — рисовими пиріжками, що тануть у роті, розкриваючи аромат соєвої пастили або зеленого чаю, які поглиблюють вашу смакову подорож',
        category: "deserts",
        image: '../images/Моті.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 20,
        price: 110
    },
    {
        name: 'Матча тірамісу',
        description: 'Дозвольте собі на мить розкішного задоволення з нашим матча тірамісу — ніжним шаром зеленого чаю, що розкривається в кожному шматочку цього класичного десерту, що наповнений смаком та ароматом вишуканості',
        category: "deserts",
        image: '../images/Матча тірамісу.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`,
        id: 21,
        price: 230
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо кнопки фільтрації
    const filterButtons = document.querySelectorAll('.filter-button');

    // Додаємо обробник подій для кожної кнопки
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category; // Отримуємо категорію з атрибута dataset
            loadProducts(category); // Викликаємо функцію loadProducts з категорією
        });
    });
});

function loadProducts(category) {
    let list = document.getElementById('filter-button');
    let productElements = '';
    let productsFiltered;

    if (category !== null) {
        productsFiltered = products.filter(elem => elem.category === category);
    } else {
        productsFiltered = products;
    }

    productsFiltered.forEach(elem => {
        let li = `<li><div><h2>${elem.name}</h2>${elem.description}<image src="${elem.image}"/><p>ЦІНА ${elem.price}</p><button class="order-button" onclick="addToCart(${elem.id})">Замовити</button></div></li>`;
        productElements += li;
    });

    list.innerHTML = productElements;
}

// Завантаження продуктів при старті
loadProducts(null);
sessionStorage.setItem('cartItems', "[]");
// Додавання в кошик
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        // Перевіряємо, чи продукт ще не додано до кошика
        if (!cartItems.some(item => item.id === productId)) {
            cartItems.push({ id: productId, quantity: 1 });
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
            // Оновлення сторінки кошика
            updateCartDisplay();
        } else {
            console.log('Product is already in cart:', product);
        }
    }
}

// Відображення кошику
function showCart() {
    let cartModal = document.getElementById('cart');
    cartModal.style.display = "block";
    openCart();
}

// Відкриття кошика з його вмістом
function openCart() {
    let cartItems = document.getElementById('cart-items');
    let containerHtml = '';

    // Отримуємо дані кошика з sessionStorage
    let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    // Вивід елемента кошику (меню)
    cartItemsData.forEach(cartItem => {
        const product = products.find(product => product.id === cartItem.id);
        if (product) {
            containerHtml += `
        <div class="cart-item">
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}" style="max-width: 100px; max-height: 100px;">
            <p>${product.description}</p>
            <p>Ціна: ${product.price * cartItem.quantity}</p>
            <div class="quantity-controls">
                <button class="decrease-quantity" onclick="decreaseQuantity(${product.id})">-</button>
                <span class="quantity">${cartItem.quantity}</span>
                <button class="increase-quantity" onclick="increaseQuantity(${product.id})">+</button>
            <button class="remove-item" onclick="removeItem(${product.id})">Видалити</button>
            </div>
        </div>`;
        }
    });

    // Вивід кнопок для маніпуляцій
    containerHtml += `<button class ="close-button" onclick="closeCart()">Закрити</button>`;
    containerHtml += `
    <button class="sort-button" onclick="sortByName()">Сортувати за назвою</button>
    <button class="sort-button" onclick="sortByPriceAscending()">Сортувати за зростанням ціни</button>
    <button class="sort-button" onclick="sortByPriceDescending()">Сортувати за спаданням ціни</button>`;
    containerHtml += `<button class="order-button" onclick="placeOrder()">Замовити</button>`;

    //лічильник загальної суми
    containerHtml += `<div id="total-price"></div>`;
    cartItems.innerHTML = containerHtml;
    // Оновити загальну суму
    updateTotalPrice();
}

// Закриття кошика
function closeCart() {
    let cartDiv = document.getElementById('cart');
    cartDiv.style.display = 'none';
}

// Сортування за назвою
function sortByName() {
    let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItemsData.sort((a, b) => {
        const productA = products.find(product => product.id === a.id);
        const productB = products.find(product => product.id === b.id);
        const totalPriceA = productA.price * a.quantity;
        const totalPriceB = productB.price * b.quantity;
        return productA.name.localeCompare(productB.name);
    });
    sessionStorage.setItem('cartItems', JSON.stringify(cartItemsData));
    openCart();
}

//Сортування за зростаннням цін
function sortByPriceAscending() {
    let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItemsData.sort((a, b) => {
        const productA = products.find(product => product.id === a.id);
        const productB = products.find(product => product.id === b.id);
        const totalPriceA = productA.price * a.quantity;
        const totalPriceB = productB.price * b.quantity;
        return totalPriceA - totalPriceB;
    });
    sessionStorage.setItem('cartItems', JSON.stringify(cartItemsData));
    openCart();
}

// Сортування за спаданням цін
function sortByPriceDescending() {
    let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItemsData.sort((a, b) => {
        const productA = products.find(product => product.id === a.id);
        const productB = products.find(product => product.id === b.id);
        const totalPriceA = productA.price * a.quantity;
        const totalPriceB = productB.price * b.quantity;
        return totalPriceB - totalPriceA;
    });
    sessionStorage.setItem('cartItems', JSON.stringify(cartItemsData));
    openCart();
}

// Оновлення загальної суми 
function updateTotalPrice() {
    let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let totalPrice = cartItemsData.reduce((total, cartItem) => {
        const product = products.find(product => product.id === cartItem.id);
        if (product) {
            return total + (product.price * cartItem.quantity);
        }
        return total;
    }, 0);
    document.getElementById('total-price').textContent = `Загальна сума: ${totalPrice} грн`;
}

// Загальне замовлення
function placeOrder() {
    let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let totalPrice = cartItemsData.reduce((total, cartItem) => {
        const product = products.find(product => product.id === cartItem.id);
        if (product) {
            return total + (product.price * cartItem.quantity);
        }
        return total;
    }, 0);
    alert(`Ваше замовлення прийнято. Загальна сума: ${totalPrice} грн. Дякуємо за покупку!`);
    sessionStorage.removeItem('cartItems'); // Очистити кошик після замовлення
    openCart(); // Оновити відображення кошика
}


// Видалити продукт 
function removeItem(productId) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let updatedCartItems = cartItems.filter(item => item.id !== productId);
    sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    openCart(); // Оновлення відображення кошика
}

// Збільшення на n одиниць товару
function increaseQuantity(productId) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let productIndex = cartItems.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cartItems[productIndex].quantity++;
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        openCart(); // Оновлення відображення кошика
    }
}

// Зменшення на n одиниць товару
function decreaseQuantity(productId) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let productIndex = cartItems.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        if (cartItems[productIndex].quantity > 1) {
            cartItems[productIndex].quantity--;
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
            openCart(); // Оновлення відображення кошика
        }
    }
}

// ГРАФІКИ 
document.addEventListener('DOMContentLoaded', function () {
    // ІД для конпок
    const pieChartButton = document.getElementById('pieChartButton');
    const histogramButton = document.getElementById('histogramButton');
    const lineChartButton = document.getElementById('lineChartButton');

    let currentChart = null; // посилання на поточний графік

    pieChartButton.addEventListener('click', function () {
        if (currentChart) {
            currentChart.destroy(); // Видаляємо попередній графік перед оновленням
        }
        updateCharts('pie');
    });

    histogramButton.addEventListener('click', function () {
        if (currentChart) {
            currentChart.destroy();
        }
        updateCharts('histogram');
    });

    lineChartButton.addEventListener('click', function () {
        if (currentChart) {
            currentChart.destroy(); 
        }
        updateCharts('line');
    });

    // Функція оновлення всіх діаграм в залежності від типу
    function updateCharts(type) {
        // Дані з кошика (тіпа ми дивимось на статисктику всіх клієнтів)
        const cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        const productQuantities = countProductQuantities(cartItemsData);
        const productNames = getProductNames(cartItemsData);

        let chartConfig;

        if (type === 'pie') {
            chartConfig = {
                type: 'pie',
                data: {
                    labels: productNames,
                    datasets: [{
                        data: productQuantities,
                        backgroundColor: generateRandomColors(productNames.length),
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false, // автоматичне масштабування в мінус, інакше то на весь екран буде
                    width: 300, 
                    height: 200 
                }
            };
            const pieCanvas = document.getElementById('pieChartCanvas').getContext('2d');
            currentChart = new Chart(pieCanvas, chartConfig);

        } else if (type === 'histogram') {
            chartConfig = {
                type: 'bar',
                data: {
                    labels: productNames,
                    datasets: [{
                        data: productQuantities,
                        backgroundColor: generateRandomColors(productNames.length),
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false, 
                    width: 300, 
                    height: 200
                }
            };
            const histogramCanvas = document.getElementById('histogramCanvas').getContext('2d');
            currentChart = new Chart(histogramCanvas, chartConfig);

        } else if (type === 'line') {
            chartConfig = {
                type: 'line',
                data: {
                    labels: productNames,
                    datasets: [{
                        data: productQuantities,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false,
                    width: 300, 
                    height: 200
                }
            };
            const lineChartCanvas = document.getElementById('lineChartCanvas').getContext('2d');
            currentChart = new Chart(lineChartCanvas, chartConfig);
        }
    }
});

// К-сть товарів одного типу
function countProductQuantities(cartItemsData) {
    const quantitiesMap = {};
    cartItemsData.forEach(item => {
        quantitiesMap[item.id] = (quantitiesMap[item.id] || 0) + item.quantity;
    });
    return Object.values(quantitiesMap);
}

// ПОшук товарів
function getProductNames(cartItemsData) {
    const productNames = [];
    cartItemsData.forEach(item => {
        const product = products.find(product => product.id === item.id);
        if (product) {
            productNames.push(product.name);
        }
    });
    return productNames;
}

// Рандомний колір
function generateRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`);
    }
    return colors;
}
