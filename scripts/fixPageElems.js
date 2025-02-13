const nav_elem = document.getElementById("nav")
function navbar(){
    nav_elem.innerHTML = `
    <div class="navbar">
        <div class="logo"><a href="/">DLBI</div>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/about.html">About</a>
            <a href="/ongoing-research.html">Ongoing Research Projects</a>
            <a href="/members.html">Members</a>
        </div>
    </div>
    `;
}

const footer = "Akara Supratak | akara.sup@mahidol.ac.th | Faculty of Information and Communication Technology, Mahidol University, 999 Phuttamonthon 4 Road, Salaya , Nakhon Pathom, 73170 THAILAND";
const display = document.getElementById("footer");

function displayFooter() {
    display.innerHTML = `<div class="text-center">${footer}</div>`;
}

navbar();
displayFooter();
