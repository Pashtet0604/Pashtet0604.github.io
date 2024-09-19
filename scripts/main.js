var myImage = document.querySelector ("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute ("src");
    if (mySrc === "images/uefamain.jpg.webp") {
        myImage.setAttribute ("src", "images/uefa.webp");
    } else {
        myImage.setAttribute ("src", "images/uefamain.jpg.webp");
    }
}

var myButton = document.querySelector ("button");
var myHeading = document.querySelector ("h1");

function setUserName () {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = ("Champions League is cool, " + myName);
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Champions league is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}