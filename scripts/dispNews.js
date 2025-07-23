import {news} from "../data/data.js"

const newsLength = news.length
const displayNews = document.getElementById("displaynews")
const moreNewsButton = document.getElementById("moreNewsButton")

let displayNewsAmount = 0;

function DisplayNews(num){
    let contentHtml = news.slice(0, num).map((object) => {
        const img = object.imgSrc
        const content = object.content
        const link = object.link
        const title = object.title
        const date = object.date

        return `
        <a href=${link} target="_blank" style="color: inherit;">
            <div class="md:flex flex-row items-center justify-left my-4 py-2 newsItems">
                <div class = "mr-2 flex-shrink-0">
                    <img class="rounded-sm image-object-fit" src="${img}"/>
                </div>
                <div class="flex flex-col items-start">
                    <h1 class="text-lg" style="font-weight: bold;">${title}</h1>
                    <h5 class="text-md" font-style: italic;">${date}</h5>
                    <h5 class="text-sm">${content}</h5>
                </div>
            </div>
        </a>
        `
    }).join("");

    displayNews.innerHTML = contentHtml
}

function moreNewsOnClick(){
    displayNewsAmount += 5
    DisplayNews(displayNewsAmount)
    if (displayNewsAmount >= newsLength){
        moreNewsButton.hidden = true;
    }
}
moreNewsButton.onclick = moreNewsOnClick

export function InitNews(){
    moreNewsOnClick()
}