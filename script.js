```javascript
let currentFrame = 1;

function nextFrame() {

    document.getElementById("frame" + currentFrame)
        .classList.remove("active");

    currentFrame++;

    document.getElementById("frame" + currentFrame)
        .classList.add("active");
}

function restart() {

    document.getElementById("frame" + currentFrame)
        .classList.remove("active");

    currentFrame = 1;

    document.getElementById("frame1")
        .classList.add("active");
}

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const symbols = ["❤️", "💕", "💗", "💖", "💘", "♥"];

    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);
```
