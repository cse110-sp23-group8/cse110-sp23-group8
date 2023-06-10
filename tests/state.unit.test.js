import { game, pages, hideAllPages, addClickEvent, showMessage } from "../source/js/state.js";

// Test hideAllPages
test("Function should hide every page", () => {
    document.addEventListener("DOMContentLoaded", function(){
        hideAllPages();
    
        pages.array.forEach((page) => {
            expect(document.getElementById(page).style.display).toBe("none");
        });
    });
});

// Test addClickEvent
test("addClickEvent should add click event to given element", () => {
    document.addEventListener("DOMContentLoaded", function(){
        addClickEvent("play", () => {
            game = new gameObject();
            hideAllPages();
            document.getElementById("meal-size").style.display = "block";
        });
        document.getElementById("play").click();
    
        expect(document.getElementById("meal-size").style.display).toBe("block");
    });
});
