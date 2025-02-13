import { currentMembers } from "../data/data.js";

const display = document.getElementById("displaycurrentmembers");
const displayNum = document.getElementById("numCurrentMembers");

export default function displaycurrentmembers() {
    let displayData = currentMembers.map((object) => {
        let name = object.name;
        let role = object.role;
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
                <img class="rounded" src="${image}"/>
            </div> 
            <div>${name}</div>
            <div>${role}</div>
            <div class="pt-2">
                ${homepage} ${googleScholar} ${github} ${linkedin}    
            </div>
        </div>
        `;
    });

    displayData = displayData.join("");

    display.innerHTML = displayData;
    displayNum.innerHTML = `(${currentMembers.length})`
}
