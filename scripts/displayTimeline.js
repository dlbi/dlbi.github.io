import { timeline } from "../data/data.js";

const display = document.getElementById("displaytimeline");

export default function DisplayTimeline(){
    let displayData = timeline.map((object) =>{
        const year = object.year;
        const data = object.data;
        console.log(year,data)
        
        return `
        <div class="color-red-500">
            <p>year: ${year}</p>
            <p>data: ${data}</p>
        </div>
        `
    }).join("");

    display.innerHTML = displayData;

}
