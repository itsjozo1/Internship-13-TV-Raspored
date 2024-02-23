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

const createProgramCard = (tvProgram, container) => {
    const programCard = document.createElement("div");
    programCard.classList.add("program-container");

    const [hoursStart, minutesStart] = tvProgram.startTime.split(':').map(Number);
    const [hoursEnd, minutesEnd] = tvProgram.endTime.split(':').map(Number);

    let startTime = hoursStart * 60 + minutesStart;
    let endTime = hoursEnd * 60 + minutesEnd;

    if (endTime === 0) {
        endTime = 1440;
    }

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const programCardWidth = ((endTime - startTime) / 1440 * 100).toFixed(2); // FLoor to 2 decimal places
    console.log(programCardWidth);

    programCard.style.width = `${programCardWidth}%`;

    programCard.innerHTML = `
        <p class="program-start-time">${tvProgram.startTime}</p>
        <p class="program-headline"><b>${tvProgram.title}</b></p>
    `;

    if (currentTimeInMinutes >= startTime && currentTimeInMinutes <= endTime) {
        programCard.style.backgroundColor = "rgb(243 243 243)"; // Change background color if program is live
    }

    container.appendChild(programCard);
};

const channelsContainer = document.querySelector(".channels-container");

tvChannels.forEach(element => {
    const channel = document.createElement("div");
    channel.classList.add("channel-container");
    channel.innerHTML = `
        <img src="${element.image}" alt="" class="channel-image">
    `;
    channelsContainer.appendChild(channel);
    let programsByChannel = getProgramsByChannel(element.id);
    programsByChannel.forEach(element => {
        createProgramCard(element, channel)
    });
});
