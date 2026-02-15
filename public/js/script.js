let hoverCount = 0;
let yesScale = 1;

document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    function moveNo() {
        hoverCount++;

        noBtn.style.position = "absolute";
        noBtn.style.top = Math.random() * 80 + "%";
        noBtn.style.left = Math.random() * 80 + "%";

        if (hoverCount >= 3) {
            yesScale *= 1.4;
            yesBtn.style.transform = `scale(${yesScale})`;
        }
    }

    // Desktop (hover)
    noBtn.addEventListener("mouseover", moveNo);

    // Mobile (touch)
    noBtn.addEventListener("touchstart", function (e) {
        e.preventDefault(); // prevent accidental click
        moveNo();
    });

    // Yes click
    yesBtn.addEventListener("click", function () {
        window.location.href = "/message";
    });
});


