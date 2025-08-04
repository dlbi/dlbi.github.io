import {collaborations} from "../data/data.js"

const displayCollabs = document.getElementById("displaycollabs")

function DisplayCollabs(){
    let contentHtml = collaborations.map((object) => {
        const img = object.imgSrc
        const name = object.name
        const link = object.link

        return `
            <div class="grid grid-rows-2 px-4 py-4 my-2">
                <div class="mr-2 md:flex flex-row items-center justify-center pb-2">
                    <img class="rounded-sm collab-img" src="${img}"/>
                </div>
                <div class="text-center">
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