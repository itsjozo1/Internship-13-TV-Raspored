import { changePage } from "./changePage.js";
import { tvChannels } from "./channels.js";

const createProgramDetailSite = async (tvProgram, href) => {
    await changePage(href);

    const tvChannel = tvChannels.find(channel => channel.id === tvProgram.channelId);

    let programPageContainer = document.querySelector(".program-page-container");
    programPageContainer.innerHTML = `
        <img src="${tvProgram.image}">
        <div class="program-page-desc">
            <p>${tvProgram.genre}</p>
            <h2>${tvProgram.title}</h2>
            <p>${tvProgram.startTime} - ${tvProgram.endTime}</p>
            <p>${tvProgram.desc}</p>
            <p>${tvChannel.name}</p>
        </div>
    `;
};

export { createProgramDetailSite };
