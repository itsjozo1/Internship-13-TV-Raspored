import { changePage } from "./changePage.js";
import { tvChannels } from "./channels.js";
import {PARENT_PASSWORD} from "./parentPassword.js";
import { getTvProgramById, setNewUserRating } from "./programs.js";
import { addToWatchlist, isProgramInWatchlist, removeFromWatchlist } from "./watchlists.js";

const changeButtonWatchlist = (item) => {
    return isProgramInWatchlist(item) === true ? "- Ukloni iz watchliste" : "+ Dodaj na watchlistu";
}

const createProgramPage = (tvProgram, programPageContainer) => {
    const tvChannel = tvChannels.find(channel => channel.id === tvProgram.channelId);
    programPageContainer.innerHTML = `
        <img src="${tvProgram.image}" class="program-page-image">
        <img src="${tvChannel.image}" class="program-page-channel"> 
        <div class="program-page-desc">
            <p>${tvProgram.genre}</p>
            <h2>${tvProgram.title}</h2>
            <span class="rate">
                <i class="star" id="1">★</i>
                <i class="star" id="2">★</i>
                <i class="star" id="3">★</i>
                <i class="star" id="4">★</i>
                <i class="star" id="5">★</i>
            </span>
            <p>${tvProgram.startTime} - ${tvProgram.endTime}  ${tvProgram.rating}★</p>
            <p>${tvProgram.desc}</p>
            <button class="add-watchlist-button">${changeButtonWatchlist(tvProgram)}</button>
        </div>
    `;

    let index = getTvProgramById(tvProgram).userRating;
    let stars = document.querySelectorAll(".star");
    
    stars.forEach((s, i) => {
        if (index === null) {
            s.addEventListener("click", () => {
                setNewUserRating(tvProgram.id, i + 1);
                updateStarRatingDisplay(stars, i);
            });
        } else {
            s.addEventListener("click", () => {
                setNewUserRating(tvProgram.id, i + 1);
                updateStarRatingDisplay(stars, i);
            });
    
            updateStarRatingDisplay(stars, index - 1);
        }
    });
    
    function updateStarRatingDisplay(stars, selectedIndex) {
        stars.forEach((s, i) => {
            if (i <= selectedIndex) {
                s.id = "selected";
            } else {
                s.id = "";
            }
        });
    }

    let addWatchListButton = document.querySelector(".add-watchlist-button");
    addWatchListButton.onclick = () => {
        if (isProgramInWatchlist(tvProgram)) {
            removeFromWatchlist(tvProgram);
        }
        else{
            addToWatchlist(tvProgram);
        }
        addWatchListButton.textContent = changeButtonWatchlist(tvProgram);
    }
    
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
