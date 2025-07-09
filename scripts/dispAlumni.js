import { alumni } from "../data/data.js";

const display = document.getElementById("displayalumni");
const displayNum = document.getElementById("numAlumniMembers");

export default function displayalumni() {
    let displayData = alumni.map((object) => {
        let name = object.name;
        let graduation = object.graduation;
        let image = object.image;

        if (image === undefined){
            image = "img/pfp/placeholder.jpg"
        }
        
        let homepage = object.website.homepage;
        let github = object.website.github;
        let linkedin = object.website.linkedin;
        let googleScholar = object.website.googleScholar;
        
        if (homepage !== undefined){
            homepage = `<a href="${homepage}" class="font-medium ml-1" target="_blank"><i class="fa fa-globe"></i></a>`
        }
        else {
            homepage = ``
        }
        if (github !== undefined){
            github = `<a href="${github}" class="font-medium ml-1" target="_blank"><i class="fab fa-github"></i></a>`
        }
        else {
            github = ''
        }
        if (linkedin !== undefined){ 
            linkedin = `<a href="${linkedin}" class="font-medium ml-1" target="_blank"><i class="fab fa-linkedin"></i></a>`   
        }
        else{
            linkedin = ''
        }
        if (googleScholar !== undefined){
            googleScholar = `<a href="${googleScholar}" class="font-medium ml-1" target="_blank"><i class="fas fa-graduation-cap"></i></a>`   
        }
        else{
            googleScholar = ''
        }
        

        return `
        <div class="p-4 items-center justify-center">
            <div class="pb-4">
                <img class="rounded h-auto w-full" src="${image}"/>
            </div> 
            <div>${name}</div>
            <div>${graduation}</div>
            <div class="pt-2">
                ${homepage} ${googleScholar} ${github} ${linkedin}    
            </div>
        </div>
        `;
    }).join("");

    display.innerHTML = displayData;
    displayNum.innerHTML = `(${alumni.length})`
}
