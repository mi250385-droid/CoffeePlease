const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "you are the brightest star in someone's darkest nights.",
  "You are allowed to be a work in progress, and a masterpeice simultaneously.",
  "Honey, you'll move mountains. So keep at it.",
  "You are not a drop in the ocean. You are the entire ocean in a drop.",
  "What we give doesn't always return. But what we give is what we are.",
  "Hey little soldier, you are smashing it.",
];
 

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    
  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});