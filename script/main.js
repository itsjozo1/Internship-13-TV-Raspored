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

const channelsContainer = document.querySelector(".channels-container"); // Corrected class name

tvChannels.forEach(element => {
    const channel = document.createElement("div");
    channel.classList.add("channel-container");
    channel.innerHTML = `
        <img src="${element.image}" alt="" class="channel-image">
    `;
    channelsContainer.appendChild(channel);
    console.log(getProgramsByChannel(element.id));
});
