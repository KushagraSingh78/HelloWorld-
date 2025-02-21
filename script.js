// script.js

const spongebobImage = document.getElementById("spongebob-image");
const moneyCounter = document.getElementById("money-counter");
const particleContainer = document.getElementById("particle-container");

let count = 0;

spongebobImage.addEventListener("click", function(event) {
    count++;
    moneyCounter.textContent = count;

	//Creating multiple particles.
	for (let i = 0; i < 5; i++){
		createMoneyParticle(event);
	}
});

function createMoneyParticle(event){
	const particle = document.createElement("div");
    particle.classList.add("money-particle");

    // Create the image element *inside* the particle div
    const img = document.createElement("img");
    img.src = "https://www.svgrepo.com/show/28153/dollar-bill.svg"; // Use direct URL
    particle.appendChild(img); // Add image to the particle


    // Get click coordinates relative to the viewport
    const x = event.clientX;
    const y = event.clientY;

     // Get the offset of the particle container
     const containerRect = particleContainer.getBoundingClientRect();

    // Calculate the position of the particle relative to container
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;

    particle.style.left = offsetX + "px";
    particle.style.top = offsetY + "px";

    particleContainer.appendChild(particle);

    // Remove the particle after the animation completes
    particle.addEventListener("animationend", () => {
        particle.remove();
    });
}