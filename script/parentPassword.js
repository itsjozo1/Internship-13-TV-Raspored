const initialParentPass = "123456";

let PARENT_PASSWORD = localStorage.getItem("parentPassword");

if (PARENT_PASSWORD === null || PARENT_PASSWORD === undefined) {
    localStorage.setItem("parentPassword", initialParentPass);
    PARENT_PASSWORD = initialParentPass;
}

const changePassword = (oldPassInput, newPassInput) => {
    const storedPassword = localStorage.getItem("parentPassword");

    if (oldPassInput.value === storedPassword) {
        const newPassword = newPassInput.value.trim();

        if (newPassword.length >= 4 && newPassword.length <= 8) {
            localStorage.setItem("parentPassword", newPassword);
            PARENT_PASSWORD = newPassword;
            alert("Uspiješno promijenjena lozinka");
            oldPassInput.value = "";
            newPassInput.value = "";
            oldPassInput.placeholder = "";
            oldPassInput.style.borderColor = "";
            newPassInput.style.borderColor = "";
        } else {
            oldPassInput.value = "";
            newPassInput.value = "";
            alert("Nova lozinka mora biti između 4 i 8 znamenki")
            oldPassInput.placeholder = "";
            oldPassInput.style.borderColor = "red";
            newPassInput.style.borderColor = "red";
        }
    } else {
        oldPassInput.value = "";
        newPassInput.value = "";
        oldPassInput.placeholder = "Netočna lozinka";
        oldPassInput.style.borderColor = "red";
        newPassInput.style.borderColor = "red";
    }

};

export { PARENT_PASSWORD, changePassword };
