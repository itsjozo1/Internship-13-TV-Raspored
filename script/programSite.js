import { changePage } from "./changePage.js";
import { tvChannels } from "./channels.js";


const createProgramDetailSite = async (tvProgram, href) => {
    await changePage(href);

    const tvChannel = tvChannels.find(channel => channel.id === tvProgram.channelId);

    let programPageContainer = document.querySelector(".program-page-container");
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
    
};

export { createProgramDetailSite };
