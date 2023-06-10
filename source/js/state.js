/**
 * The main game logic script, using the fortunes.js and nutrition.js modules
 * @module state
 */

/**
 * Imports the GameObject class from fortunes.js module
 * @type {gameObject}
 */
import gameObject from "./fortunes.js";

/**
 * Imports the Nutritional imformation of each item from the nutrition.js module
 * @type {Object}
 */
import nutritions from "../data/nutrition.js";

/**
 * Defines the units of measurement for the different nutrition properties
 * @type {Object}
 */
const nutritionUnits = {
  calories: "",
  fat: "g",
  carbohydrates: "g",
  protein: "g",
  sugars: "g",
  sodium: "mg",
};

/**
 * Defines the recommended daily intake for the different nutrition properties
 * @type {Object}
 */
const nutritionDaily = {
  calories: 2000,
  fat: 78,
  carbohydrates: 325,
  protein: 75,
  sugars: 30,
  sodium: 2300,
};

/**
 * The main game instance
 * @type {gameObject}
 */
let game;

/**
 * The current game level
 * @type {number}
 */
let level;

/**
 * A flag used to interrupt the fortune message typing
 * @type {boolean}
 */
let click = false;

/**
 * The pages of the game UI
 * @type {Array}
 */
const pages = [
  "front-page",
  "meal-size",
  "side",
  "entree-1",
  "entree-2",
  "entree-3",
  "fortune-cookie-reveal",
  "fortune",
  "nutrition-facts",
];
const MealSrcs = [
  "source/imgs/bowl.png",
  "source/imgs/plate.png",
  "source/imgs/large plate.png",
];
const AudioSrcs = [
  "source/music/ChoiceSelect1bV1.1.wav",
  "source/music/ChoiceSelect2bV1.1.wav",
  "source/music/ChoiceSelect3bV1.1.wav",
];

export function hideAllPages() {
  pages.forEach(
    (page) => (document.getElementById(page).style.display = "none"),
  );
}

export function addClickEvent(id, callback) {
  document.getElementById(id).addEventListener("click", callback);
}

function choiceAudio() {
  let soundEffect = new Audio(AudioSrcs[Math.floor(Math.random() * 3)]);
  soundEffect.play();
}

window.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio();
  audio.src = "source/music/FortuneV1.1.wav";
  audio.autoplay = true;

  audio.addEventListener("ended", function () {
    this.play();
  });

  addClickEvent("play", () => {
    game = new gameObject();
    hideAllPages();
    document.getElementById("meal-size").style.display = "block";
    audio.src = "source/music/ChoicesV1.2.wav";
  });

  addClickEvent("play-again", () => {
    game = new gameObject();
    hideAllPages();
    document.getElementById("meal-size").style.display = "block";
    const messageElement = document.getElementById("fortune-text");
    messageElement.textContent = "";
    click = true;
  });

  ["bowl", "plate", "large-plate"].forEach((id, index) => {
    addClickEvent(id, () => {
      choiceAudio();
      //bowl = 0 + 2 (side + entree), plate = 1 + 2 (side + 2 entrees), large = 2 + 2 (side + 3 entrees)
      level = index + 2;
      hideAllPages();
      document.getElementById("side").style.display = "block";
      let mealImages = document.getElementsByClassName("current-item");
      for (let i = 0; i < mealImages.length; i++) {
        mealImages[i].src = MealSrcs[index];
      }
    });
  });

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      addClickEvent(`option-${i}-${j}`, () => {
        switch (j) {
          case 1:
            game.incrementScore();
            break;
          case 3:
            game.decrementScore();
            break;
          case 4:
            game.incrementWeird();
            break;
        }
        let j_fixed = j;
        if (j == 4) {
          j_fixed = Math.floor(Math.random() * 3) + 1;
        }
        let element = document.querySelector(`#option-${i}-${j_fixed}`);
        let dishName = element.textContent.trim();
        game.cumulateNutritions(nutritions[dishName]);
        choiceAudio();
        hideAllPages();
        if (i === level) {
          document.getElementById("fortune-cookie-reveal").style.display =
            "block";
        } else {
          document.getElementById(`entree-${i}`).style.display = "block";
        }
      });
    }
  }
  addClickEvent("open", () => {
    click = false;
    choiceAudio();
    hideAllPages();
    document.getElementById("fortune").style.display = "block";
    showMessage();
  });

  addClickEvent("show-nutrition", () => {
    click = false;
    choiceAudio();
    hideAllPages();
    document.getElementById("nutrition-facts").style.display = "block";
    for (let key in game.nutrition) {
      // console.log(key);
      document.getElementById(key).textContent =
        game.nutrition[key] + nutritionUnits[key];
      document.getElementById(key + "-prc").textContent =
        Math.floor((game.nutrition[key] / nutritionDaily[key]) * 100) + "%";
    }
  });
});

export function showMessage() {
  const message = game.getFortune();
  typeOutMessage(message);
}

/**
 * Types out the given message one character at a time with a delay in between
 * @param {string} message The message to type out
 */
function typeOutMessage(message) {
  const messageElement = document.getElementById("fortune-text");

  let index = 0;
  const typingSpeed = 30; // The delay (in milliseconds) between typing each character

  function typeNextCharacter() {
    if (click) {
      return;
    }
    if (index < message.length) {
      messageElement.textContent += message.charAt(index);
      index++;
      setTimeout(typeNextCharacter, typingSpeed);
    }
  }

  typeNextCharacter();
}
