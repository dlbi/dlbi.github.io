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
        <div class="md:flex flex-row items-center justify-left my-4 py-2 pubItems">
            <div class = "mr-2 flex-shrink-0">
                <img class="rounded-sm w-40 h-30 object-fill" src="${img}"/>
            </div>
            <a href=${link} target="_blank">
                <div class="flex flex-col items-start">
                    <h1 class="text-lg" style="font-weight: bold;">${title}</h1>
                    <h5 class="text-md">${publisher}, ${year}</h5>
                    <h5 class="text-sm" font-style: italic;">${authors}</h5>
                </div>
            </a>
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}



