const values = require("../source/js/state.js");

// Test hideAllPages
test("Function should hide every page", () => {
    values.hideAllPages();
    pages.array.forEach((page) => {
        expect(document.getElementById(page).style.display).toBe("none");
    });
});
// Test addClickEvent

// Test showMessage