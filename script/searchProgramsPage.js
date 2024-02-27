import { getAllGenres, tvPrograms } from "./programs.js";

const createSearchProgramsPage = () => {
    let genres = getAllGenres();
    const genresContainer = document.querySelector(".genre-container");
    
    genres.forEach(genre => {
       let genreButton = document.createElement("button");
        genreButton.classList.add("genre-filter-button");
        genreButton.innerText = genre;
        genresContainer.appendChild(genreButton);
    });
    const searchProgramsResultContainer = document.querySelector(".programs-search-result-container");
    let programs = tvPrograms.sort((a, b) => b.rating - a.rating).slice(0, 10);

    programs.forEach(program => {
        let topProgramsCard = document.createElement("div");
        topProgramsCard.classList.add("search-programs-result-card");
        topProgramsCard.innerHTML = `
            <img src="${program.image}" class="search-programs-image"/>
            <div class="search-programs-result-desc">
                <h3>${program.title} ★${program.rating}</h3>
                <p>${program.desc}</p>
            </div>
        `;
        searchProgramsResultContainer.appendChild(topProgramsCard);
    });

}

export {createSearchProgramsPage}