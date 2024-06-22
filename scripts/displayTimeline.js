import { timeline } from "../data/data.js";

const display = document.getElementById("displaytimeline");

export default function DisplayTimeline() {
    let displayData = timeline.map((object) => {
        let year = object.year;
        let content = object.content;
        let img = object.imgSrc;

        content = content.replace(/<a\b[^>]*>(.*?)<\/a>/g, '<a href="/test" style="color: blue; text-decoration: underline;">$1</a>');

        return `
        <div class="flex text-start h-auto">
            <div class="line flex justify-end w-1/5 h-max border-r-2"> 
                <p class="timespace text-xs text-right md:text-base">${year}</p>
                <div class="timelinedot"></div>
            </div>
            <div class="w-auto px-2 pb-1">
                <img src=${img} style="max-width:80px;border-radius:10px"></img>
            </div>
            <div class="w-3/6 pb-2">
                <p class="text-sm break-all md:text-lg">${content}</p>
            </div>
               
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}
