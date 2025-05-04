let tabContents = document.querySelectorAll(".tabContents")
let tabLinks = document.querySelectorAll(".tabLinks")

function openTab(tabName) {
    for (let tablink of tabLinks) {
    tablink.classList.remove("activeLink");
    }
    for (let tabContent of tabContents) {
    tabContent.classList.remove("activeTab");
    }
    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add("activeLink");
    document.getElementById(tabName).classList.add("activeTab");
}