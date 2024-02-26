import { tvPrograms } from "./programs.js";
import { createProgramDetailSite } from "./programSite.js";

const searchButton = document.querySelector(".search-button");

const isAdultProgram = (tvProgram) => {
    if ( tvProgram.genre.includes("Program za odrasle")){
        return "Assets/adult-program-cover.jpeg";
    }
    else{
        return tvProgram.image;
    }
}

searchButton.onclick = () => {
    const searchContainer = document.querySelector(".search-container");
    searchContainer.style.display = "block";

    const searchCloseButton = document.querySelector(".search-programs-close-button");
    searchCloseButton.onclick = () => {
        searchContainer.style.display = "none";
        searchResultContainer.innerHTML = "";
    };

    const searchInput = document.querySelector(".search-programs-input");
    const searchResultContainer = document.querySelector(".search-programs-result-container");

    searchInput.addEventListener("input", () => {
        const inputValue = searchInput.value.trim().toLowerCase();
        
        const searchResults = tvPrograms.filter(tvProgram => {
            if (inputValue !== "") {
                return tvProgram.title.toLowerCase().startsWith(inputValue);
            }
            return false;
        });

        searchResultContainer.innerHTML = "";
        
        searchResults.forEach(result => {
            const resultCard = document.createElement("div");
            resultCard.classList.add("search-result-card");
            resultCard.setAttribute("data-href", "programSite.html"); 
            resultCard.innerHTML = `
                <h3 class="search-result-headline">${result.title}</h3>
                <img src="${isAdultProgram(result)}" alt="" class="search-result-image">
            `;
        
            searchResultContainer.appendChild(resultCard);
        
            resultCard.onclick = () => {
                createProgramDetailSite(result, resultCard.getAttribute('data-href'));
                searchContainer.style.display = "none";
            };
        });
        

        if (searchResults.length === 0 && inputValue !== "") {
            const noResultMessage = document.createElement("div");
            noResultMessage.textContent = "No results found";
            searchResultContainer.appendChild(noResultMessage);
        }
    });
};