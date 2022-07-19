const loadMenuContents = () => {
    const mainContent = document.getElementById("content");
    
    const content = document.createElement('div');
    content.classList.add('menu-content');

    const logo = document.createElement('img');
    logo.classList.add("logo-header-small");
    logo.src = "../Swensons-logo.png";
    content.appendChild(logo);

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');
    content.appendChild(menuGrid);

    mainContent.appendChild(content);

    addMenuItems();
}

const addMenuItems = () => {
    const menuGrid = document.querySelector(".menu-grid");

    // Burger Section
    const burgerHeader = document.createElement("h1");
    burgerHeader.textContent = "Burgers";
    burgerHeader.classList.add("menu-header");
    menuGrid.appendChild(burgerHeader);

    const burgers = [
        {
            "item": "Galley Boy",
            "price": 3.99
        },
        {
            "item": "Cheeseburger",
            "price": 2.99
        },
        {
            "item": "Double Cheeseburger",
            "price": 3.99
        },
        {
            "item": "Veggie Burger",
            "price": 4.99
        },
    ]

    for (let i = 0; i < burgers.length; i++) {
        const newBurgerItem = document.createElement('div');
        newBurgerItem.classList.add("menu-item");

        const itemName = document.createElement('h2');
        itemName.textContent = `${burgers[i]["item"]}`;
        newBurgerItem.appendChild(itemName);

        const itemPrice = document.createElement('h3');
        itemPrice.textContent = `${burgers[i]["price"]}`;
        newBurgerItem.appendChild(itemPrice);

        menuGrid.appendChild(newBurgerItem);
    }

    // Side Section
    const sideHeader = document.createElement("h1");
    sideHeader.textContent = "Sides";
    sideHeader.classList.add("menu-header");
    menuGrid.appendChild(sideHeader);

    const sides = [
        {
            "item": "French Fries",
            "price": 1.99
        },
        {
            "item": "Waffle Fries",
            "price": 1.99
        },
        {
            "item": "Potato Teasers",
            "price": 2.49
        },
        {
            "item": "Onion Rings",
            "price": 2.99
        },
        {
            "item": "Fried Pickles",
            "price": 2.99
        },
        {
            "item": "Fried Mushrooms",
            "price": 2.99
        },
    ]

    for (let i = 0; i < sides.length; i++) {
        const newSideItem = document.createElement('div');
        newSideItem.classList.add("menu-item");

        const itemName = document.createElement('h2');
        itemName.textContent = `${sides[i]["item"]}`;
        newSideItem.appendChild(itemName);

        const itemPrice = document.createElement('h3');
        itemPrice.textContent = `${sides[i]["price"]}`;
        newSideItem.appendChild(itemPrice);

        menuGrid.appendChild(newSideItem);
    }

    // Milkshake Section
    const milkshakeHeader = document.createElement("h1");
    milkshakeHeader.textContent = "Milkshakes";
    milkshakeHeader.classList.add("menu-header");
    menuGrid.appendChild(milkshakeHeader);

    const milkshakes = [
        {
            "item": "Chocolate",
            "price": 2.99
        },
        {
            "item": "Vanilla",
            "price": 2.99
        },
        {
            "item": "Oreo",
            "price": 3.49
        },
        {
            "item": "Peanut Butter",
            "price": 3.49
        },
        {
            "item": "Banana",
            "price": 2.99
        },
        {
            "item": "Hot Fudge",
            "price": 3.99
        },
        {
            "item": "Peanut Butter Hot Fudge",
            "price": 4.99
        },
    ]

    for (let i = 0; i < milkshakes.length; i++) {
        const newSideItem = document.createElement('div');
        newSideItem.classList.add("menu-item");

        const itemName = document.createElement('h2');
        itemName.textContent = `${milkshakes[i]["item"]}`;
        newSideItem.appendChild(itemName);

        const itemPrice = document.createElement('h3');
        itemPrice.textContent = `${milkshakes[i]["price"]}`;
        newSideItem.appendChild(itemPrice);

        menuGrid.appendChild(newSideItem);
    }
}

export { loadMenuContents };