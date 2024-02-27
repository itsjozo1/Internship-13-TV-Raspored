import { getAllGenres, tvPrograms } from "./programs.js";
import { isAdultProgram } from "./searchProgram.js";
import { createProgramDetailSite } from "./programSite.js";

const checkRatingRange = (minRating, maxRating) => {
    if (minRating.value >= 1 && minRating.value <= 5 && maxRating.value >= 1 && maxRating.value <= 5 && minRating.value <= maxRating.value) {
        return { min: minRating.value, max: maxRating.value };
    } else {
        minRating.value = '1';
        maxRating.value = '5';
        return { min: 1, max: 5 };
    }
}

const filterPrograms = (list, name, ratingRange, selectedGenres) => {
    const filteredPrograms = list.filter(program => {
        const nameMatch = program.title.toLowerCase().startsWith(name.toLowerCase());
        const ratingMatch = program.rating >= Number(ratingRange.min) && Number(program.rating) <= ratingRange.max;
        const genreMatch = selectedGenres.length === 0 || selectedGenres.every(genre => program.genre.includes(genre));
        return nameMatch && ratingMatch && genreMatch;
    });

    return filteredPrograms;
}

const createFilteredProgramCards = (programs, searchProgramsResultContainer) => {
    programs.forEach(program => {
        let topProgramsCard = document.createElement("div");
        topProgramsCard.classList.add("search-programs-result-card");
        topProgramsCard.innerHTML = `
            <img src="${isAdultProgram(program)}" class="search-programs-image"/>
            <div class="search-programs-result-desc">
                <h3>${program.title} ★${program.rating}</h3>
                <p>${program.desc}</p>
            </div>
        `;

        topProgramsCard.onclick = () => {
            createProgramDetailSite(program , "programSite.html");
        }

        searchProgramsResultContainer.appendChild(topProgramsCard);
    });

    if (programs.length === 0) {
        searchProgramsResultContainer.innerHTML = `<h2>Nema rezultata</h2>`;
    }
}

const createSearchProgramsPage = () => {
    let genres = getAllGenres();
    let selectedGenres = [];
    const genresContainer = document.querySelector(".genre-container");
    
    genres.forEach(genre => {
        let genreButton = document.createElement("button");
        genreButton.classList.add("genre-filter-button");
        genreButton.innerText = genre;
        genresContainer.appendChild(genreButton);
        
        genreButton.onclick = () => {
            const index = selectedGenres.indexOf(genre);
            if (index === -1) {
                genreButton.style.backgroundColor = "yellow";
                selectedGenres.push(genre);
            } else {
                genreButton.style.backgroundColor = "";
                selectedGenres.splice(index, 1);
            }
        };
    });
    
    const searchProgramsResultContainer = document.querySelector(".programs-search-result-container");
    let programs = tvPrograms.sort((a, b) => b.rating - a.rating).slice(0, 10);
    createFilteredProgramCards(programs, searchProgramsResultContainer);

    const searchButton = document.querySelector(".filtered-programs-button");
    searchButton.onclick = () => {
        const name = document.querySelector(".filter-name-input").value;
        const isWatchlist = document.querySelector(".filter-watchlist-checkbox").checked;
        const minRating = document.querySelector(".filter-rating-min");
        const maxRating = document.querySelector(".filter-rating-max");
        const ratingRange = checkRatingRange(minRating, maxRating);


        if (isWatchlist) {
            let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
            let filteredPrograms = filterPrograms(watchlist, name, ratingRange, selectedGenres);
            console.log(filteredPrograms);
            searchProgramsResultContainer.innerHTML = "";
            createFilteredProgramCards(filteredPrograms, searchProgramsResultContainer);

        }
        else{
            let filteredPrograms = filterPrograms(tvPrograms, name, ratingRange, selectedGenres);
            console.log(filteredPrograms);
            searchProgramsResultContainer.innerHTML = "";
            createFilteredProgramCards(filteredPrograms, searchProgramsResultContainer);
        }


    };
};

export { createSearchProgramsPage };
