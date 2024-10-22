// Vores elementer/objketer
const bag3 = document.querySelector("#bag3");
const mel2 = document.querySelector("#mel2");
const tekst4 = document.querySelector("#tekst4");
const daymaiden = document.querySelector(".day-maiden");
const beerContainer = document.querySelector(".beer-container");

// Event til at lytte efter Scroll på siden.
window.addEventListener("scroll", () => {
  let { scrollY } = window;

  mel2.style.transform = `translateX(0px) translateY(${Math.round(
    scrollY / 1.95
  )}px)`;

  bag3.style.transform = `translateX(0px) translateY(${Math.round(
    scrollY / 1.3
  )}px)`;

  tekst4.style.transform = `translateX(0px) translateY(${Math.round(
    scrollY / 0.85
  )}px)`;
});
