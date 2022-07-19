import { loadHomeContents } from "./home";
import { loadMenuContents } from "./menu";
import { loadContactContents } from "./contact";

const loadNav = () => {
    const contentElement = document.getElementById("content");

    const navbarElement = document.createElement('div');
    navbarElement.classList.add('navigation-bar');

    const listElement = document.createElement('ul');
    navbarElement.appendChild(listElement);

    const home = document.createElement('li');
    home.classList.add("active");
    home.textContent = "Home";
    home.addEventListener('click', toggleHomeContent);

    const menu = document.createElement('li');
    menu.textContent = "Menu";
    menu.addEventListener('click', toggleMenuContent);

    const contact = document.createElement('li');
    contact.textContent = "Contact";
    contact.addEventListener('click', toggleContactContent);

    listElement.appendChild(home);
    listElement.appendChild(menu);
    listElement.appendChild(contact);

    contentElement.appendChild(navbarElement);
}

const toggleHomeContent = (e) => {
    if (e.target.classList.contains("active")) return; 
        setActiveState("Home");
        clearContents();
        loadHomeContents();
}

const toggleMenuContent = (e) => {
    if (e.target.classList.contains("active")) return; 
        setActiveState("Menu");
        clearContents();
        loadMenuContents();
}

const toggleContactContent = (e) => {
    if (e.target.classList.contains("active")) return; 
        setActiveState("Contact");
        clearContents();
        loadContactContents();
}

const clearContents = () => {
    const main = document.getElementById("content");
    while(main.childElementCount > 1) {
        main.lastChild.remove();
    }
}

const setActiveState = (input) => {
    const navButtons = document.querySelectorAll("li");
    navButtons.forEach(button => button.classList.remove("active"));

    navButtons.forEach(button => {
        if (button.textContent === (`${input}`))
            button.classList.add("active");
    })
}
export { loadNav };