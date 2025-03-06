import { researchpjs } from "../data/data.js";

const display = document.getElementById("researchpj");

export default function researchpj() {
    let displayData = researchpjs.map((object) => {
        const content = object.content;
        const title = object.title;
        const img = object.imgSrc;
        const links = object.links;
        let linksInTags = links.map((link) => `<a target="_blank" href="${link.link}">[${link.desc}]</a>`).join(" ")
        if (links.length > 0){
            linksInTags = `<div><b>Links:</b> ${linksInTags}</div>`
        }

        return `
        <div class="projectItems">
            <div class="md:flex flex-row items-center justify-left my-4 py-2">
                <div class="mr-2 flex-shrink-0">
                    <img class="rounded-sm w-40 h-30 object-fill" src="${img}" />
                </div>
                <div class="text-md">
                    <span><b>${title}</b> ${content}</span>
                    ${linksInTags}
                </div>
            </div>
        </div>
        `;
    }).join("<hr>");

    display.innerHTML = displayData;
}

