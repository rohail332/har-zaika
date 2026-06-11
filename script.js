const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});
// image var
let asian = document.getElementsByClassName("desi")[0];
let chinese = document.getElementsByClassName("chin")[0];
let Vegetarian = document.getElementsByClassName("veg")[0];
let Dessert = document.getElementsByClassName("des")[0];
let fastfood = document.getElementsByClassName("fff")[0];
let drinks = document.getElementsByClassName("dri")[0];

// items var
let desi = document.querySelectorAll(".de");
let chinfood = document.querySelectorAll(".ch");
let Vege = document.querySelectorAll(".vv");
let Dess = document.querySelectorAll(".dd");
let fast = document.querySelectorAll(".ff");
let drink = document.querySelectorAll(".ww");

// Hide all categories
function hideAll() {
  desi.forEach((item) => (item.style.display = "none"));
  chinfood.forEach((item) => (item.style.display = "none"));
  Vege.forEach((item) => (item.style.display = "none"));
  Dess.forEach((item) => (item.style.display = "none"));
  fast.forEach((item) => (item.style.display = "none"));
  drink.forEach((item) => (item.style.display = "none"));
}

// Show selected category
function showItems(items) {
  items.forEach((item) => (item.style.display = "block"));
}

asian.addEventListener("click", () => {
  hideAll();
  showItems(desi);
});

chinese.addEventListener("click", () => {
  hideAll();
  showItems(chinfood);
});

Vegetarian.addEventListener("click", () => {
  hideAll();
  showItems(Vege);
});

Dessert.addEventListener("click", () => {
  hideAll();
  showItems(Dess);
});

fastfood.addEventListener("click", () => {
  hideAll();
  showItems(fast);
});

drinks.addEventListener("click", () => {
  hideAll();
  showItems(drink);
});

let homed = document.querySelectorAll(".home");

homed.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "recipes.html";
  });
});

const newsletterForm = document.getElementById("newsletter-form");
const toast = document.getElementById("toast");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    toast.classList.add("show");
    newsletterForm.reset();
    setTimeout(() => {
      toast.classList.remove("show");
    }, 1000);
  });
}