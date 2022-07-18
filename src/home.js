const loadHomeContents = () => {
    const mainContent = document.getElementById("content");
    
    const content = document.createElement('div');
    content.classList.add('main-content');

    const logo = document.createElement('img');
    logo.classList.add("logo-header");
    logo.src = "../Swensons-logo.png";
    content.appendChild(logo);

    const title = document.createElement('h2');
    title.textContent = "America's Best Cheeseburger";
    content.appendChild(title);

    mainContent.appendChild(content);
}

export { loadHomeContents };
