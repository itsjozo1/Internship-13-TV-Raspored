import { tvChannels } from "./channels.js";
import { tvPrograms } from "./programs.js";
import { createProgramDetails } from "./createProgramDetails.js";
import { changePage} from "./changePage.js";
import { createWatchlistPage } from "./watchlistPage.js";
import { createSearchProgramsPage } from "./searchProgramsPage.js";

const watchlistLink = document.querySelector(".watchlist-link");
watchlistLink.onclick = async () => {
    await changePage(watchlistLink.getAttribute("data-href"));
    createWatchlistPage();
};

const headline = document.querySelector(".headline");
headline.onclick = async () => {
    await changePage(headline.getAttribute("data-href"));
    createProgramSchedule();
}

const searchProgramsPage = document.querySelector(".programs-link");
searchProgramsPage.onclick = async () => {
    await changePage(searchProgramsPage.getAttribute("data-href"));
    createSearchProgramsPage();
}

const getProgramsByChannel = (channelId) => {
    return tvPrograms
        .filter(item => item.channelId === channelId)
        .sort((a, b) => {
            const [hoursA, minutesA] = a.startTime.split(':').map(Number);
            const [hoursB, minutesB] = b.startTime.split(':').map(Number);
            return hoursA !== hoursB ? hoursA - hoursB : minutesA - minutesB;
        });
};

const createProgramCard = (tvProgram, container, currentTimeInMinutes) => {
    const programCard = document.createElement("div");
    programCard.classList.add("program-container");

    const [hoursStart, minutesStart] = tvProgram.startTime.split(':').map(Number);
    const [hoursEnd, minutesEnd] = tvProgram.endTime.split(':').map(Number);

    let startTime = hoursStart * 60 + minutesStart;
    let endTime = hoursEnd * 60 + minutesEnd;

    if (endTime === 0) {
        endTime = 1440;
    }

    const programCardWidth = ((endTime - startTime) / 1440 * 100).toFixed(2); 

    programCard.style.width = `${programCardWidth}%`;

    programCard.innerHTML = `
        <p class="program-start-time">${tvProgram.startTime}</p>
        <p class="program-headline"><b>${tvProgram.title}</b></p>
    `;

    if (currentTimeInMinutes >= startTime && currentTimeInMinutes < endTime) {
        programCard.style.backgroundColor = "rgb(243 243 243)"; 
    }

    container.appendChild(programCard);

    programCard.onclick = () => {
        createProgramDetails(tvProgram);
    };
};


const createProgramSchedule = () => {
    const channelsContainer = document.querySelector(".channels-container");
    const realTimeLine = document.querySelector(".real-time-line")
    
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    tvChannels.forEach(element => {
        const channel = document.createElement("div");
        channel.classList.add("channel-container");
        channel.innerHTML = `
            <img src="${element.image}" alt="" class="channel-image">
        `;
        channelsContainer.appendChild(channel);
        let programsByChannel = getProgramsByChannel(element.id);
        programsByChannel.forEach(element => {
            createProgramCard(element, channel, currentTimeInMinutes)
        });
    });

    let currentPosition = currentTimeInMinutes/1440*100;

    const currentHourPosition = currentHour * 60; 
    const scrollOffset = currentHourPosition / 1440 * channelsContainer.scrollWidth;
    console.log(currentPosition);

    channelsContainer.scrollLeft = scrollOffset;
    realTimeLine.style.left = `calc(${currentPosition*1.85}% + 12rem)`;
}

createProgramSchedule();