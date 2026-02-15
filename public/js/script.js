let hoverCount = 0;
let yesScale = 1;

function moveNo() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    hoverCount++;

    // Move No button randomly
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";

    // After 3 attempts, start growing YES button
    if (hoverCount >= 3) {
        yesScale += 0.2;   // Increase size gradually
        yesBtn.style.transform = `scale(${yesScale})`;
    }
}

function goToMessage() {
    window.location.href = "/message";
}

