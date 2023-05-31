import gameObject from "./fortunes.js";

let game;
let level;

const pages = [
  "front-page",
  "meal-size",
  "option-1",
  "option-2",
  "option-3",
  "fortune-cookie-reveal",
  "fortune",
];

function hideAllPages() {
  pages.forEach(
    (page) => (document.getElementById(page).style.display = "none")
  );
}

function addClickEvent(id, callback) {
  document.getElementById(id).addEventListener("click", callback);
}

window.addEventListener("DOMContentLoaded", (event) => {
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
  });

  ["bowl", "plate", "large-plate"].forEach((id, index) => {
    addClickEvent(id, () => {
      level = index + 1;
      hideAllPages();
      document.getElementById("option-1").style.display = "block";
    });
  });

  for (let i = 1; i <= 3; i++) {
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
          document.getElementById(`option-${i + 1}`).style.display = "block";
        }
      });
    }
  }

  addClickEvent("open", () => {
    hideAllPages();
    document.getElementById("fortune").style.display = "block";
    showMessage();
  });
});

function showMessage(num) {
  const message = game.getFortune();
  typeOutMessage(message);
}

// type out the message
function typeOutMessage(message) {
  const messageElement = document.getElementById("fortune-text");

  let index = 0;
  const typingSpeed = 30; // The delay (in milliseconds) between typing each character

  function typeNextCharacter() {
    if (index < message.length) {
      messageElement.textContent += message.charAt(index);
      index++;
      setTimeout(typeNextCharacter, typingSpeed);
    }
  }

  typeNextCharacter();
}
