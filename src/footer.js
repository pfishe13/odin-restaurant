const loadFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.textContent = "Created by Parker Fisher";

    document.querySelector("body").appendChild(footer);
}

export { loadFooter };