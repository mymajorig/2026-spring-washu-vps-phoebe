
const fonts = [
    "Arial",
    "Courier New",
    "Georgia",
    "Times New Roman",
    "Verdana",
    "Comic Sans MS"
];

let index = 0;

setInterval(() => {
    const title = document.getElementById("main-header");
    title.style.fontFamily = fonts[index];

    index = (index + 1) % fonts.length;
}, 2000);