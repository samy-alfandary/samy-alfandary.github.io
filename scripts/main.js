const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/gym.jpeg") {
        myImage.setAttribute("src", "images/soccer_ball.png");
    } else {
        myImage.setAttribute("src", "images/gym.jpeg");
    }
};

function checkFlavor() {
    let iceCream = document.getElementById('iceCreamInput').value.toLowerCase();
    if (iceCream === "vanilla") {
        alert("Vanilla is my favorite too!");
    } else {
        alert("Awwww, vanilla is my favorite…");
    }
}



