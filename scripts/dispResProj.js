import { researchpjs } from "../data/data.js";

const display = document.getElementById("researchpj");

export default function researchpj() {
    let displayData = researchpjs.map((object) => {
        let content = object.content;
        let img = object.imgSrc;

        return `
        <div>
            <div class="flex my-2">
                <div class="px-2 pb-1">
                    <img src=${img} class="custom-img"></img>
                </div>
                <div>
                    <p class="text-md">${content}</p>
                </div>
            </div>
            <hr>
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}

