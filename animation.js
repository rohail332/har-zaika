gsap.to(".moving-bar-track", {
  x: "-50%",
  duration: 16,
  ease: "linear",
  repeat: -1,
});

let barDiv = document.querySelector(".moving-bar-track");
for (let i = 0; i < 10; i++) {
  ["Delicious Recipes For Every Mood", "✦"].forEach((text) => {
    let span = document.createElement("span");
    span.textContent = text;
    barDiv.appendChild(span);
  });
}

