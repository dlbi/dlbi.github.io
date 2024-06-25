import { projects } from "../data/data.js";

const display = document.getElementById("displayproject");

export default function Displayproject() {
    let displayData = projects.map((object) => {
        let name = object.name;
        let describe = object.describe;
        let img = object.img;
        let src = object.link;

        describe = describe.replace(/<a\b[^>]*>(.*?)<\/a>/g, '<a href="/test" style="color: blue; text-decoration: underline;">$1</a>');

        return `
        <div id="projectItems"class="flex items-center justify-center bg-white rounded-xl p-4 ">
        <a href=${src}>
            <img src=${img} class="rounded-xl object-cover h-36 w-96 pb-2">
        <div>
            <h6 class="text-lg" style="font-weight: bold;">${name}<h6>
            <p style="color:#bbb;">${describe}</p>
        </div>
        </a>
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}
