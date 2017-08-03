var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickAnswerColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

function generateRandomColor(num) {
    // make an array
    var arr = [];
    // add num random color to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    var randomRGB = "rgb(" + r + ", " + g + ", " + b + ")";
    return randomRGB;
}

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickAnswerColor() {
    // pick a radom number from 0 to 5
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    // add initial colors to square
    squares[i].style.backgroundColor = colors[i];
    // add click listener to square
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            resetButton.textContent = "Play again?";
        } else {
            // fade the square out
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
}

resetButton.addEventListener("click", function() {
    // genenrate new colors
    colors = generateRandomColor(numSquares);
    // pick a new answer color
    pickedColor = pickAnswerColor();
    // change colorDisplay to match answer color
    colorDisplay.textContent = pickedColor;
    // change color for squares
    for (var i = 0; i < squares.length; i++) {
        // add initial colors to square
        squares[i].style.backgroundColor = colors[i];
    }
    // reset color for h1
    h1.style.backgroundColor = "steelblue";
});

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    // reset color for h1
    h1.style.backgroundColor = "steelblue";
    // generate new color
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    // pick answer color
    pickedColor = pickAnswerColor();
    // change colorDisplay to match answer color
    colorDisplay.textContent = pickedColor;
    // change color for squares and hide bottom three
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    // reset color for h1
    h1.style.backgroundColor = "steelblue";
    // generate new color
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    // pick answer color
    pickedColor = pickAnswerColor();
    // change colorDisplay to match answer color
    colorDisplay.textContent = pickedColor;
    // change color for squares and hide bottom three
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

});