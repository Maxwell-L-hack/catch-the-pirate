let score = 0;

function catchPirate() {
    // Update the score
    score++;

    // Update the score display
    document.getElementById("score").innerText = "Score: " + score;

    // Move the pirate to a random position
    let pirate = document.getElementById("pirate");
    let maxX = window.innerWidth - pirate.offsetWidth;
    let maxY = window.innerHeight - pirate.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    pirate.style.left = randomX + "px";
    pirate.style.top = randomY + "px";

    // Add an animation effect for the pirate click
    pirate.style.transform = "scale(1.2)";
    setTimeout(() => {
        pirate.style.transform = "scale(1)";
    }, 200);
}

// Position the pirate initially
catchPirate();