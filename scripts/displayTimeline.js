import { timeline } from "../data/data.js";

const display = document.getElementById("displaytimeline");

export default function DisplayTimeline() {
    let displayData = timeline.map((object) => {
        const year = object.year;
        let content = object.content;

        content = content.replace(/<a\b[^>]*>(.*?)<\/a>/g, '<a href="/test" style="color: blue; text-decoration: underline;">$1</a>');

        return `
        <div class="">
            <h5>year: ${year}</h5>
            <p>${content}</p>
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}
