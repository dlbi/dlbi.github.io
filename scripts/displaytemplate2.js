import { template2 } from "../data/data.js";

const display = document.getElementById("displaytemplate2");

export default function displaytemplate2() {
    let displayData = template2.map((object) => {
        let content = object.content;
        let head = object.head;
        let src = object.src;
        let tail = object.tail;

        content = content.replace(/<a\b[^>]*>(.*?)<\/a>/g, '<a href="/test" style="color: blue; text-decoration: underline;">$1</a>');

        return `
        <div class = "border-l-2 my-2 line pl-2">
            <div class="flex items-end">
                <a class="head text-xl" href=${src}>${head}</a>
                <p class = "tail text-base">${tail}</p>
            </div>
            <div>
                <p class = "text-lg">${content}</p>
            </div>
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}




