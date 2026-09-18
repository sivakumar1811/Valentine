let currentFrame = 0;

const frames = document.querySelectorAll(".frame");

frames[0].classList.add("active");

function showFrame(index) {

    frames.forEach(frame => {
        frame.classList.remove("active");
    });

    frames[index].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createLoveBurst();
}

function nextFrame() {

    currentFrame++;

    if (currentFrame >= frames.length) {
        currentFrame = 0;
    }

    showFrame(currentFrame);
}


function createLoveBurst() {

    const symbols = ["♡", "♥", "💙", "✨", "🐼"];

    for (let i = 0; i < 18; i++) {

        const item = document.createElement("div");

        item.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.position = "fixed";
        item.style.left = "50%";
        item.style.top = "50%";
        item.style.zIndex = "9999";
        item.style.pointerEvents = "none";
        item.style.fontSize =
            Math.floor(Math.random() * 20 + 15) + "px";

        item.style.transition =
            "transform 1.8s ease, opacity 1.8s ease";

        document.body.appendChild(item);

        const x =
            (Math.random() - 0.5) * window.innerWidth;

        const y =
            (Math.random() - 0.5) * window.innerHeight;

        setTimeout(() => {

            item.style.transform =
                `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;

            item.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            item.remove();

        }, 1900);
    }
}
