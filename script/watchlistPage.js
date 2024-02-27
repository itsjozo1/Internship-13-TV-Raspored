import { addToWatchlist, removeFromWatchlist, isProgramInWatchlist } from "./watchlists.js";
import { createProgramDetailSite } from "./programSite.js";


const createWatchlistPage = () =>{    
    const watchlistContainer = document.querySelector(".watchlist-container");
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    
    watchlist.forEach(program => {
        let watchlistProgramCard = document.createElement("div");
        watchlistProgramCard.classList.add("watchlist-program-card");

        watchlistProgramCard.innerHTML = `
            <img src="${program.image}" class="watchlist-program-image">
            <h2 class="watchlist-program-headline">${program.title}</h2>

        `;

        watchlistContainer.appendChild(watchlistProgramCard);

        watchlistProgramCard.onclick = () => {
            createProgramDetailSite(program , "programSite.html");
        }
    });

    console.log(watchlist);
}

export {createWatchlistPage};