
const loadNav = () => {
    const contentElement = document.getElementById("content");

    const navbarElement = document.createElement('div');
    navbarElement.classList.add('navigation-bar');

    const listElement = document.createElement('ul');
    navbarElement.appendChild(listElement);

    const home = document.createElement('li');
    home.textContent = "Home";

    const menu = document.createElement('li');
    menu.textContent = "Menu";

    const contact = document.createElement('li');
    contact.textContent = "Contact";

    listElement.appendChild(home);
    listElement.appendChild(menu);
    listElement.appendChild(contact);

    contentElement.appendChild(navbarElement);
}

export { loadNav };