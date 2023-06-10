import gameObject from "./fortunes.js";

let game;
let level;
let click = false;

const pages = [
  "front-page",
  "meal-size",
  "side",
  "entree-1",
  "entree-2",
  "entree-3",
  "fortune-cookie-reveal",
  "fortune",
];
const MealSrcs = [
  "source/imgs/bowl.png",
  "source/imgs/plate.png",
  "source/imgs/large plate.png",
];

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    addClickEvent("play", () => {
      game = new gameObject();
      hideAllPages();
      document.getElementById("meal-size").style.display = "block";
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
        //bowl = 0 + 2 (side + entree), plate = 1 + 2 (side + 2 entrees), large = 2 + 2 (side + 3 entrees)
        level = index + 2;
        hideAllPages();
        document.getElementById("side").style.display = "block";
        let mealImages = document.getElementsByClassName("current-item");
        console.log(mealImages);
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
      hideAllPages();
      document.getElementById("fortune").style.display = "block";
      showMessage();
    });
  });
}

export function hideAllPages() {
  pages.forEach(
    (page) => (document.getElementById(page).style.display = "none"),
  );
}

export function addClickEvent(id, callback) {
  document.getElementById(id).addEventListener("click", callback);
}

export function showMessage() {
  const message = game.getFortune();
  typeOutMessage(message);
}

// type out the message
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

// export default {
//   game,
//   level,
//   click,
//   pages,
//   MealSrcs,
//   function: hideAllPages, addClickEvent, showMessage, typeOutMessage};
