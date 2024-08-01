import { publications } from "../data/data.js";

const display = document.getElementById("displaypublications");

export default function Displaypublications() {
    let displayData = publications.map((object) => {
        let title = object.title;
        let authors = object.authors;
        let publisher = object.publisher;
        let year = object.year;
        let img = object.img;
        let link = object.link;

        return `
        <div class="md:flex flex-row items-center justify-center my-4">
            <div class = "mr-2">
                <img class="rounded-sm w-40 h-24 object-cover " src="${img}"/>
            </div>
            <div class="flex flex-col items-start">
                <h1 class="text-lg" style="font-weight: bold;">${title}</h1>
                <h5 class="text-md" style="color:#bbb;;">${publisher}</h5>
                <h5 class="text-sm" style="color:#bbb; font-style: italic;">${authors} ${year}</h5>
                <h5 class="text-sm"">[<a class="bluelink" href=${link}>Paper</a>]</h5>
            </div>
            
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}



