import {
  game,
  level,
  click,
  pages,
  MealSrcs,
  hideAllPages,
  addClickEvent,
  showMessage,
  typeOutMessage,
} from "../source/js/state.js";

// Test hideAllPages
test("Function should hide every page", () => {
    values.hideAllPages();
    const pages = values.pages;
    pages.array.forEach((page) => {
        expect(document.getElementById(page).style.display).toBe("none");
    });
});

// Test addClickEvent
test("addClickEvent should add click event to given element", () => {
    values.addClickEvent("play", () => {
        game = new gameObject();
        hideAllPages();
        document.getElementById("meal-size").style.display = "block";
    });
    document.getElementById("play").click();

    expect(document.getElementById("meal-size").style.display).toBe("block");
});
// Test showMessage