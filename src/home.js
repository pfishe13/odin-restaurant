const loadHomeContents = () => {
    const mainContent = document.getElementById("content");
    
    const logo = document.createElement('img');
    logo.classList.add("logo-header");
    logo.src = "../Swensons-logo.png";
    mainContent.appendChild(logo);

    const title = document.createElement('h2');
    title.textContent = "America's Best Cheeseburger";
    mainContent.appendChild(title);
}

export { loadHomeContents };
