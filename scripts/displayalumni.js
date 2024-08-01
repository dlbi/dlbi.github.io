import { alumni } from "../data/data.js";

const display = document.getElementById("displayalumni");

export default function displayalumni() {
    let displayData = alumni.map((object) => {
        let name = object.name;
        let graduation = object.graduation;
        let link = object.website;

        return `
        <div class="alumni-item">
            <h2><a class="bluelink" href="${link}">${name}</a> (${graduation}),</h2>
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
}
