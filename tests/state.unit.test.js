import { game, pages, hideAllPages, addClickEvent, showMessage } from "../source/js/state.js";

// Test hideAllPages
test("Function should hide every page", () => {
    hideAllPages();
    
    pages.array.forEach((page) => {
        expect(document.getElementById(page).style.display).toBe("none");
    });
});

// Test addClickEvent
test("addClickEvent should add click event to given element", () => {
    addClickEvent("play", () => {
        game = new gameObject();
        hideAllPages();
        document.getElementById("meal-size").style.display = "block";
    });
    document.getElementById("play").click();

    expect(document.getElementById("meal-size").style.display).toBe("block");
});
// Test showMessage