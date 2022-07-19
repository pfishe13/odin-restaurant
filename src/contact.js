const loadContactContents = () => {
    const mainContent = document.getElementById("content");

    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact Us";

    mainContent.appendChild(contactHeader);

    const addressElement = document.createElement("div");
    addressElement.innerHTML = `
        <h3> Swensons Drive-In </h3>
        <h4>40 South Hawkins St.</h4>
        <h4>Akron, OH 44313</h4>
        <h4>United States</h4>
    `;
    mainContent.appendChild(addressElement);

    const phoneElement = document.createElement('div');
    phoneElement.innerHTML = `
        <h3>(330)864-8416</h3>
    `;
    mainContent.appendChild(phoneElement);

}

export { loadContactContents };