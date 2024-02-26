import { changePage } from "./changePage.js";
import { tvChannels } from "./channels.js";
import { PARENT_PASSWORD } from "./createProgramDetails.js";


const createProgramPage = (tvProgram, programPageContainer) => {
    const tvChannel = tvChannels.find(channel => channel.id === tvProgram.channelId);
    programPageContainer.innerHTML = `
        <img src="${tvProgram.image}" class="program-page-image">
        <img src="${tvChannel.image}" class="program-page-channel"> 
        <div class="program-page-desc">
            <p>${tvProgram.genre}</p>
            <h2>${tvProgram.title}</h2>
            <span class="rate"><i>★</i><i>★</i><i>★</i><i>★</i><i>★</i></span>
            <p>${tvProgram.startTime} - ${tvProgram.endTime}</p>
            <p>${tvProgram.desc}</p>
            <button class="add-watchlist-button">+ Dodaj na watchlistu</button>
        </div>
    `;
}

const createProgramDetailSite = async (tvProgram, href) => {
    await changePage(href);
    let programPageContainer = document.querySelector(".program-page-container");
    if(tvProgram.genre.includes("Program za odrasle")){
        programPageContainer.classList.add("adult-program-page")
        programPageContainer.innerHTML = `
            <img src="Assets/adult-program-cover.jpeg">
            <div class="program-page-desc">
                <h2>Program za odrasle</h2>
                <p>Unesite roditeljski pin</p>
                <input type="password" class="parent-password-input">
                <button class="parent-password-button">Potvrda</button>
            </div>
        `;

        const parentPasswordButton = document.querySelector(".parent-password-button");
        parentPasswordButton.onclick = () => {
            let inputParentPassword = document.querySelector(".parent-password-input");
    
            if (inputParentPassword.value == PARENT_PASSWORD) {
                programPageContainer.classList.remove("adult-program-page")
                createProgramPage(tvProgram, programPageContainer);
            } else {
                inputParentPassword.style.border = "1px solid red";
                inputParentPassword.value = "";
                inputParentPassword.placeholder = "Pogrešan pin";
            }
        };
    }
    else{
        createProgramPage(tvProgram, programPageContainer);
    }
    
};

export { createProgramDetailSite };
