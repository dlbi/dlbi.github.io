import { template1 } from "../data/data.js";

const display = document.getElementById("displaytemplate1");

export default function displaytemplate1() {
    let displayData = template1.map((object) => {
        let content = object.content;
        let img = object.imgSrc;

        content = content.replace(/<a\b[^>]*>(.*?)<\/a>/g, '<a href="/test" style="color: blue; text-decoration: underline;">$1</a>');

        return `
        <div class="">
            <div class="flex my-2">
            <div class="w-auto px-2 pb-1">
                <img src=${img} class="w-10 md:w-16" style="border-radius:5px"></img>
            </div>
            <div>
                <p class="text-lg">${content}</p>
            </div>
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}




