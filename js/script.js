let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1

document.getElementById("host-name").textContent = "Anoushka";
document.getElementById("collaborator-name").textContent = "Collaborator Name";
document.getElementById("collaborator-2-name").textContent = "Collaborator 2 Name";



// Question 2
// You can also create their own CSS classes in style.css file and use that.


const toggleButton = document.getElementById("instruction_button");
const instructionBoxes = document.querySelectorAll(".question");


let instructionsVisible = true;


function toggleInstructions() {
    instructionsVisible = !instructionsVisible;


    instructionBoxes.forEach((box) => {
        box.style.display = instructionsVisible ? "block" : "none";
    });


    toggleButton.textContent = instructionsVisible ? "Hide Instructions" : "Show Instructions";
}


toggleButton.addEventListener("click", toggleInstructions);



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.

const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");


function autoPopulateLastName() {
    if (firstNameInput.value.toLowerCase() === "john") {
        lastNameInput.value = "Doe";
    } else {
        lastNameInput.value = "";
    }
}


firstNameInput.addEventListener("input", autoPopulateLastName);



// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.


const usernameInput = document.getElementById("user_name");
const usernameAlert = document.getElementById("username-alert");


function checkUsername() {
    if (pokemonList.includes(this.value)) {
        usernameAlert.textContent = "Username already exists";
    } else {
        usernameAlert.textContent = "Unique username created";
    }
}


usernameInput.addEventListener("input", checkUsername);


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.

const [passwordInput, confirmPasswordInput] = document.querySelectorAll("#password, #confirm_password");
const passwordAlert = document.getElementById("password-alert");
const hidePasswordButton = document.getElementById("hide-password");

function checkPasswordMatch() {
    if (passwordInput.value === confirmPasswordInput.value) {
        passwordAlert.textContent = "Password Matches";
    } else {
        passwordAlert.textContent = "Password does not match";
    }
}

passwordInput.addEventListener("input", checkPasswordMatch);
confirmPasswordInput.addEventListener("input", checkPasswordMatch);

function togglePasswordVisibility() {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    confirmPasswordInput.type = type;
    hidePasswordButton.textContent = type === "password" ? "Show Password" : "Hide Password";
}

hidePasswordButton.addEventListener("click", togglePasswordVisibility);

//Question 6

const resetButton = document.getElementById("radio-reset-button");
const radioButtons = document.querySelectorAll("input[name='favorite_day']");


function resetRadioSelection() {
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });
}

resetButton.addEventListener("click", resetRadioSelection);



//Question 7


const fileInput = document.getElementById("profile_pic");

function checkFileSize() {
    const file = fileInput.files[0];

    if (file) {
        const fileSizeKB = file.size / 1024;

        if (fileSizeKB > 100) {
            alert("The chosen image is larger than 100KB. Please select a smaller file.");
            fileInput.value = "";
        }
    }
}

fileInput.addEventListener("change", checkFileSize);





//Question 8


let colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("input", function(event) {
    let selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
});


//Question 9


const resetFormButton = document.querySelector(".reset-form-button");
const form = document.querySelector("form");

function resetForm() {
    form.reset();
}
resetFormButton.addEventListener("click", resetForm);
