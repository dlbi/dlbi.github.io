import {currentMembers} from "../data/data.js";

const display = document.getElementById("displaycurrentmembers");

export default function displaycurrentmembers() {
    let displayData = currentMembers.map((object) => {
        let name = object.name;
        let role = object.role;
        let link = object.website

        return `
        <h2><a href="${link}" target="_blank">${name}</a> ${role}</h2>
        `;
    }).join("");

    display.innerHTML = displayData;
}
