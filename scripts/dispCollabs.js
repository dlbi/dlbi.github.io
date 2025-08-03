import {collaborations} from "../data/data.js"

const displayCollabs = document.getElementById("displaycollabs")

function DisplayCollabs(num){
    let contentHtml = collaborations.map((object) => {
        const img = object.imgSrc
        const name = object.name
        const link = object.link

        return `
            <div class="grid grid-rows-2 my-4 py-2 px-4">
                <div class = "mr-2 md:flex flex-row items-center justify-left">
                    <img class="rounded-sm collab-img" src="${img}"/>
                </div>
                <div>
                    <a href="${link}">${name}</a>
                </div>
            </div>
        `
    }).join("");
    console.log(contentHtml)
    displayCollabs.innerHTML = contentHtml
}

export function InitCollabs(){
    DisplayCollabs()
}