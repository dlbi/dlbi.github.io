const nav_elem = document.getElementById("nav")
function displayNavbar(){
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

const footer_elem = document.getElementById("footer");
function displayFooter() {
    footer_elem.innerHTML = `
    
        <div class="grid grid-row-5"></div>
            <div class="grid grid-cols-7 gap-4">
                <div class="col-start-1"><div class="text-right"><b>Location</b></div></div>
                <div class="col-start-2 col-span-2"><div class="text-left">Faculty of Information and Communication Technology</div></div>

                <div class="col-start-5"><div class="text-right"><b>Contact Person</b></div></div>
                <div class="col-start-6 col-span-2"><div class="text-left">Akara Supratak, Ph.D.</div></div>
            </div>
            <div class="grid grid-cols-7 gap-4">
                <div class="col-start-2 col-span-2"><div class="text-left">Mahidol University</div></div>
                <div class="col-start-6 col-span-2"><div class="text-left">akara.sup@mahidol.ac.th</div></div>
            </div>
            <div class="grid grid-cols-7 gap-4">
                <div class="col-start-2 col-span-3"><div class="text-left">999 Phuttamonthon 4 Road, Salaya</div></div>
            </div>
            <div class="grid grid-cols-7 gap-4">
                <div class="col-start-2 col-span-3"><div class="text-left">Nakhon Pathom, 73170 THAILAND</div></div>
            </div>
            <div class="grid grid-cols-7 gap-4">
            </div>
        </div>
    
    `;
}

displayNavbar();
displayFooter();
