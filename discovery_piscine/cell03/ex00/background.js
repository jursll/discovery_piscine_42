function changeBackground() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const randomBackground = document.querySelector("#randomBackground");
    randomBackground.style.background = `rgb(${red}, ${green}, ${blue})`
}