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

let sideMenu = document.querySelector("#sideMenu");

function openMenu(){
    sideMenu.style.right = "0"
}
function closeMenu(){
    sideMenu.style.right = "-200px"
}

// ==========Google sheet submission code =======================
const scriptURL = 'https://script.google.com/macros/s/AKfycbwgRzJuOIUrQa928P_5_AussaqjgDjjypgJKSi_alW_gdZ0WJ0Wo7W2EbvTYBCIWhB5_w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText = "Message sent successfully"
        setTimeout(() =>{
            msg.innerText = ""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
