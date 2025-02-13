import { awards } from "../data/awards.js";

const display = document.getElementById("displayawards");

export default function displayAwards() {
    let displayData = awards.map((object) => {
        return `
            <li>${object}</li>
        `;
    }).join("");
    
    display.innerHTML = `<ul class="list-disc pl-5">${displayData}</ul>`;
}
