function moveNo() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";

    yesBtn.style.transform = "scale(1.3)";
}

function goToMessage() {
    window.location.href = "/message";
}
