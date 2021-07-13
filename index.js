const myForm = document.querySelector("#my-form");
const namefirstInput = document.querySelector("#Firstname");
const namelastInput = document.querySelector("#Lastname");
const ageInput = document.querySelector("#Age");
const emailInput = document.querySelector("#Email");
const usernameInput = document.querySelector("#Username");
const passwordInput = document.querySelector("#Password");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (namefirstInput.value === "" || namelastInput.value === "" || ageInput.value === "" || emailInput.value === "" || usernameInput.value === "" || passwordInput.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Silahkan Isi Data dengan Benar";

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log("berhasil");
    }
}
