"use strict"
// Define the breakpoints
const breakpoints = [
    { name: "xs, extra-small", width: 0 },
    { name: "sm, small", width: 600 },
    { name: "md, medium", width: 900 },
    { name: "lg, large", width: 1200 },
    { name: "xl, extra-large", width: 1536 },
]
// Function to get the screen size title based on the current width
function getScreenSizeTitle(width) {
    for (let i = breakpoints.length - 1; i >= 0; i--) {
        if (width >= breakpoints[i].width) {
            return breakpoints[i].name
        }
    }
    return "xs, extra-small"
}
// Create a div and add it to the body
const div = document.createElement("div")
div.style.position = "absolute"
div.style.zIndex = "10000"
div.style.padding = "10px"
div.style.top = "1px"
div.style.background = "white"
div.textContent = getScreenSizeTitle(window.innerWidth)
document.body.appendChild(div)
// Update the div text whenever the window is resized
window.addEventListener("resize", () => {
    div.textContent = getScreenSizeTitle(window.innerWidth)
})
