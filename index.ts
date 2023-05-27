// Define the breakpoints
const breakpoints = [
    { name: "xs", width: 0 },
    { name: "sm", width: 600 },
    { name: "md", width: 900 },
    { name: "lg", width: 1200 },
    { name: "xl", width: 1536 },
]

// Function to get the screen size title based on the current width
function getScreenSizeTitle(width: number) {
    for (let i of [...breakpoints].reverse()) {
        if (width >= i.width) {
            return i.name
        }
    }
    return "xs"
}

// Create a div and add it to the body
const div = document.createElement("div")
div.style.position = "absolute"
div.style.zIndex = "10000"
div.style.padding = "10px"
div.style.background = "white"
div.textContent = getScreenSizeTitle(window.innerWidth)
document.body.appendChild(div)

// Update the div text whenever the window is resized
window.addEventListener("resize", () => {
    div.textContent = getScreenSizeTitle(window.innerWidth)
})
