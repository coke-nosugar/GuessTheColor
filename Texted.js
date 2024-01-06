// Function to generate a random string of a specified length
function randomString(length) {
    const chars = "0123456789ABCDEF";
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const rnum = Math.floor(Math.random() * chars.length);
        randomString += chars[rnum];
    }
    return randomString;
}

// Function to generate a random color in hexadecimal format
function randomColor() {
    let randomColor = "";
    for (let i = 0; i < 6; i++) {
        randomColor += randomString(1); // Using the randomString function
    }
    return "#" + randomColor;
}

// Function to convert RGB to Hex format
function convertRGBToHex(rgb) {
    const hex = rgb.split(",")
        .map(x => parseInt(x).toString(16).padStart(2, '0'))
        .join("");
    return "#" + hex;
}

// Function to set background color for a given element
function setBackgroundColor(element, color) {
    document.getElementById(element).style.backgroundColor = color;
}

// Function to get a random item from an array
function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to initialize the game
function init() {
    const colors = [
        randomColor(),
        randomColor(),
        randomColor(),
        randomColor()
    ];

    colors.forEach((color, index) => {
        setBackgroundColor(`color${index + 1}`, color);
    });

    const answerIndex = Math.floor(Math.random() * colors.length);
    const correctColor = colors[answerIndex];

    const buttons = document.getElementsByClassName('colorButton');
    for (const button of buttons) {
        button.addEventListener('click', function () {
            const clickedColor = convertRGBToHex(this.style.backgroundColor);
            const answerMessage = document.getElementById("result");

            if (clickedColor.toUpperCase() === correctColor) {
                answerMessage.innerHTML = "Correct!";
            } else {
                answerMessage.innerHTML = "Incorrect. Try again!";
            }
        });
    }
}

window.onload = init;
