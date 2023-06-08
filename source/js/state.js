import gameObject from "./fortunes.js";
const nutritions = {
  "Chow Mein": {
      "calories": 500,
      "fat": 23,
      "carbohydrates": 61,
      "protein": 18,
      "sugars": 5,
      "sodium": 980
  },
  "Fried Rice": {
      "calories": 530,
      "fat": 16,
      "carbohydrates": 83,
      "protein": 11,
      "sugars": 2,
      "sodium": 780
  },
  "White Rice": {
      "calories": 380,
      "fat": 4.5,
      "carbohydrates": 82,
      "protein": 7,
      "sugars": 0,
      "sodium": 0
  },
  "Black Pepper Angus Steak": {
      "calories": 220,
      "fat": 8,
      "carbohydrates": 10,
      "protein": 29,
      "sugars": 5,
      "sodium": 810
  },
  "Broccoli Beef": {
      "calories": 150,
      "fat": 7,
      "carbohydrates": 16,
      "protein": 7,
      "sugars": 4,
      "sodium": 440
  },
  "Beijing Beef": {
      "calories": 470,
      "fat": 23,
      "carbohydrates": 39,
      "protein": 24,
      "sugars": 18,
      "sodium": 1070
  },
  "Eggplant Tofu": {
      "calories": 190,
      "fat": 10,
      "carbohydrates": 18,
      "protein": 8,
      "sugars": 6,
      "sodium": 880
  },
  "Kung Pao Chicken": {
      "calories": 290,
      "fat": 16,
      "carbohydrates": 19,
      "protein": 14,
      "sugars": 13,
      "sodium": 810
  },
  "Mushroom Chicken": {
      "calories": 260,
      "fat": 11,
      "carbohydrates": 15,
      "protein": 27,
      "sugars": 2,
      "sodium": 590
  },
  "The Original Orange Chicken": {
      "calories": 380,
      "fat": 18,
      "carbohydrates": 44,
      "protein": 18,
      "sugars": 17,
      "sodium": 620
  },
  "Sizzling Shrimp": {
      "calories": 150,
      "fat": 9,
      "carbohydrates": 8,
      "protein": 10,
      "sugars": 4,
      "sodium": 280
  },
  "Honey Walnut Shrimp": {
      "calories": 360,
      "fat": 19,
      "carbohydrates": 36,
      "protein": 13,
      "sugars": 14,
      "sodium": 240
  }
};
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



function hideAllPages() {
  pages.forEach(
    (page) => (document.getElementById(page).style.display = "none"),
  );
}

function addClickEvent(id, callback) {
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
        let element = document.querySelector(`#option-${i}-${j}`);
        let dishName = element.textContent.trim();
        game.cumulateNutritions(nutritions[dishName])
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
  });
});


function showMessage() {
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
