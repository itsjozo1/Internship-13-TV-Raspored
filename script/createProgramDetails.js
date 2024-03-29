import { createProgramDetailSite } from "./programSite.js";
import {PARENT_PASSWORD, changePassword} from "./parentPassword.js";

const createNormalProgramDetails = (tvProgram) => {
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
            <button class="more-details-button" data-href="programSite.html">Detalji</button>
        </div>
    `;
    programDetails.innerHTML = htmlNormalProgram;
    document.body.appendChild(programDetails);

    const closeButton = programDetails.querySelector(".program-details-close-button");
    closeButton.onclick = () => {
        programDetails.remove();
    };

    const detailsButton = programDetails.querySelector(".more-details-button");
    detailsButton.onclick = () => {
        programDetails.remove();
        createProgramDetailSite(tvProgram, detailsButton.getAttribute('data-href'));
    };
};

const createAdultProgramDetails = (tvProgram) => {
    const programDetails = document.createElement("div");
    programDetails.classList.add("program-details-container");
    const htmlAdultProgram = `
        <span class="program-details-close-button close-button">&#10005;</span>
        <h2 class="adult-program-headline">Roditeljska zaštita</h2>
        <p>Za informacije o programu unesite pin</p>
        <div class="adult-program-input-holder">
            <input type="password" class="parent-password-input">
            <button class="parent-password-button">Potvrda</button>
            <p class="change-parent-password">promijeni loznku</p>
        </div>
    `;

    programDetails.classList.add("adult-program-container");
    programDetails.innerHTML = htmlAdultProgram;
    document.body.appendChild(programDetails);

    const changeParentPassLink = document.querySelector(".change-parent-password");
    changeParentPassLink.onclick = () => {
        programDetails.innerHTML = `
            <span class="change-password-close-button close-button">&#10005;</span>
            <h2>Promjena lozinke</h2>
            <div class="change-pass-input-container">
                <p>Stara lozinka</p>
                <input type="password" class="old-password-input"/>
            </div>
            <div class="change-pass-input-container">
                <p>Nova lozinka</p>
                <input type="password" class="new-password-input"/>
            </div>
            <button class="change-password-button">Potvrda</button>
        `;

        const changePassButton = document.querySelector(".change-password-button");
        changePassButton.onclick = () => {
            let oldPassInput = document.querySelector(".old-password-input");
            let newPassInput = document.querySelector(".new-password-input");

            changePassword(oldPassInput, newPassInput);
        }

        const changePassCloseButton = document.querySelector(".change-password-close-button");
        changePassCloseButton.onclick = () => {
            programDetails.innerHTML = htmlAdultProgram;
            //osta bug kad se zatvori changePassContainer da nisu u funkciji svi onclick elementi u adultContaineru
        }
    }


    const closeButton = programDetails.querySelector(".program-details-close-button");
    closeButton.onclick = () => {
        programDetails.remove();
    };

    const parentPasswordButton = programDetails.querySelector(".parent-password-button");
    parentPasswordButton.onclick = () => {
        let inputParentPassword = programDetails.querySelector(".parent-password-input");

        if (inputParentPassword.value == PARENT_PASSWORD) {
            programDetails.remove();
            createNormalProgramDetails(tvProgram)
        } else {
            inputParentPassword.style.border = "1px solid red";
            inputParentPassword.value = "";
            inputParentPassword.placeholder = "Pogrešan pin";
        }
    };
};


const removeExistingProgramDetails = () => {
    const existingDetailsCards = document.querySelectorAll(".program-details-container");
    existingDetailsCards.forEach(card => card.parentNode.removeChild(card));
};

const createProgramDetails = (tvProgram) => {
    removeExistingProgramDetails();
    tvProgram.genre.includes("Program za odrasle") ? createAdultProgramDetails(tvProgram) : createNormalProgramDetails(tvProgram)

}

export {createProgramDetails};