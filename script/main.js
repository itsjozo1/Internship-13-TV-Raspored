import { tvChannels } from "./channels.js";
import { tvPrograms } from "./programs.js";
import { changePage } from "./changePage.js";
import { createProgramDetailSite } from "./programSite.js";

const PARENT_PASSWORD = 123456;

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
        removeExistingProgramDetails();
        createProgramDetails(tvProgram);
    };
};

const checkIsAdultProgram = (tvProgram) => tvProgram.genre.includes("Program za odrasle") ? true : false;


const removeExistingProgramDetails = () => {
    const existingDetailsCards = document.querySelectorAll(".program-details-container");
    existingDetailsCards.forEach(card => card.parentNode.removeChild(card));
};

const createAdultProgramDetails = (programContainer) => {
    const htmlAdultProgram = `
    <span class="program-details-close-button">&#10005;</span>
    <h2 class="adult-program-headline">Roditeljska zaštita</h2>
    <p>Za informacije o programu unesite pin</p>
    <div class="adult-program-input-holder">
        <input type="password" class="parent-password-input"></input>
        <button class="parent-password-button">Potvrda</button>
    </div>
    `;
    programContainer.classList.add("adult-program-container");
    programContainer.innerHTML = htmlAdultProgram;

}

const createProgramDetails = (tvProgram) => {
    const programDetails = document.createElement("div");
    programDetails.classList.add("program-details-container");

    const htmlNormalProgram = `
    <span class="program-details-close-button close-button">&#10005;</span>
    <img src="${tvProgram.image}" alt="" class="program-details-image">
    <div class="program-details-text-container">
        <p>${tvProgram.genre}</p>
        <h3 class="program-details-headline">${tvProgram.title}</h3>
        <p>${tvProgram.startTime} - ${tvProgram.endTime}</p>
        <p class="program-details-desc">${tvProgram.desc}</p>
        <button class="more-details-button" href="programSite.html">Detalji</button>
    </div>
    `;

    checkIsAdultProgram(tvProgram) == true ? createAdultProgramDetails(programDetails) : programDetails.innerHTML = htmlNormalProgram;
    document.querySelector("body").appendChild(programDetails);

    const closeButton = programDetails.querySelector(".program-details-close-button"); 
    closeButton.onclick = () => {
        programDetails.parentNode.removeChild(programDetails); 
    };

    const detailsButton = document.querySelector(".more-details-button");
    detailsButton.onclick = () => {
        programDetails.parentNode.removeChild(programDetails); 
        createProgramDetailSite(tvProgram, detailsButton.getAttribute('href'))
    };
    

    const parentPasswordButton = document.querySelector(".parent-password-button");
    parentPasswordButton.onclick = () => {
        let inputParentPassword = document.querySelector(".parent-password-input");

        if (inputParentPassword.value == PARENT_PASSWORD) {

            programDetails.innerHTML = htmlNormalProgram;
            programDetails.classList.remove("adult-program-container")

            const closeButton = programDetails.querySelector(".program-details-close-button"); 
            closeButton.onclick = () => {
                programDetails.parentNode.removeChild(programDetails); 
            };
        } else {
            inputParentPassword.style = "border: 1px solid red; border-radius: 5px";
            inputParentPassword.value = "";
            inputParentPassword.placeholder = "Pogrešan pin";
        }
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
realTimeLine.style.left = `calc(${currentPosition*2}% + 3%)`;

