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
// <div class="col-start-3 col-span-2"><div class="text-left"></div></div>
const footer_elem = document.getElementById("footer");
function displayFooter() {
    footer_elem.innerHTML = `
    
        <div class="grid grid-row-5">
        
            <div class="grid grid-cols-12 gap-4">
                <div class="col-start-3 text-right"><b>Location</b></div>
                <div class="col-start-4 col-span-4">Faculty of Information and Communication Technology</div>
                
                <div class="col-start-8"><b>Contact Person</b></div>
                <div class="col-start-9 col-span-2">Akara Supratak, Ph.D.</div>
            </div>
            
            <div class="grid grid-cols-12 gap-4">
                <div class="col-start-4 col-span-2">Mahidol University</div>
                <div class="col-start-9">akara.sup@mahidol.ac.th</div>
            </div>
            
            <div class="grid grid-cols-12 gap-4">
                <div class="col-start-4 col-span-2">999 Phuttamonthon 4 Road, Salaya</div>
            </div>
            
            <div class="grid grid-cols-12 gap-4">
                <div class="col-start-4 col-span-2">Nakhon Pathom, 73170 THAILAND</div>
            </div>
            
            <div class="grid grid-cols-12 gap-4">
            </div>
        </div>
    
    `;
}

displayNavbar();
displayFooter();
