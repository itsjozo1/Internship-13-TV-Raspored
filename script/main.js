import { tvChannels } from "./channels.js";
import { tvPrograms } from "./programs.js";

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

    if (currentTimeInMinutes >= startTime && currentTimeInMinutes <= endTime) {
        programCard.style.backgroundColor = "rgb(243 243 243)"; 
    }

    container.appendChild(programCard);

    programCard.onclick = () => {
        removeExistingProgramDetails();
        createProgramDetails(tvProgram);
    };
};

const removeExistingProgramDetails = () => {
    const existingDetailsCards = document.querySelectorAll(".program-details-container");
    existingDetailsCards.forEach(card => card.parentNode.removeChild(card));
};

const createProgramDetails = (tvProgram) => {
    const programDetails = document.createElement("div");
    programDetails.classList.add("program-details-container");
    programDetails.innerHTML = `
        <span class="program-details-close-button">&#10005;</span>
        <img src="${tvProgram.image}" alt="" class="program-details-image">
        <div class="program-details-text-container">
            <p>${tvProgram.genre}</p>
            <h3 class="program-details-headline">${tvProgram.title}</h3>
            <p>${tvProgram.startTime} - ${tvProgram.endTime}</p>
            <p>${tvProgram.desc}</p>
        </div>
    `;
    document.querySelector("body").appendChild(programDetails);

    const closeButton = programDetails.querySelector(".program-details-close-button"); 
    closeButton.onclick = () => {
        programDetails.parentNode.removeChild(programDetails); 
    };
};

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
realTimeLine.style.left = `calc(${currentPosition*2}% + 1.5rem)`;
