import "core-js/stable";
import "regenerator-runtime/runtime";
// GETTING ELEMENTS

const mobileMenu = document.querySelector(".mobile-nav");
const header = document.querySelector("header");
const mainNav = document.querySelector(".main-nav");
const icon = document.querySelector("i");
const navs = mainNav.querySelectorAll("a");
const sticNav = document.querySelector("nav");
const fertilizerSection = document.querySelector(".fertilizer");
const pesticideSection = document.querySelector(".pesticide");
const branchesSection = document.querySelector(".branches");
const customerSection = document.querySelector(".customer");
const howItWorksSection = document.querySelector(".how-it-works");
const orderBtn = document.getElementById("order");
const moreBtn = document.getElementById("more");
const offer = document.querySelector(".offers");

//MOBILE NAVIGATION MENU

mobileMenu.addEventListener("click", function () {
  console.log("CLICKED NAV");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    mainNav.style.display = "block";
    navs.forEach((el) => {
      el.style.display = "block";
      el.style.marginBottom = "10px";
    });
    mainNav.style.marginTop = "20px";
  } else {
    mainNav.style.display = "none";
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// SCROLLING TO SECTIONS ON CLICK

mainNav.addEventListener("click", function (e) {
  const tabClicked = e.target.closest(".tabs");
  if (!tabClicked) return;
  if (tabClicked.id === "fertilizer") {
    const secCord = fertilizerSection.getBoundingClientRect();
    console.log(secCord);
    window.scrollTo({
      left: secCord.left + window.pageXOffset,
      top: secCord.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
  if (tabClicked.id === "pesticide") {
    const secCord = pesticideSection.getBoundingClientRect();
    console.log(secCord, window.scrollY);
    window.scrollTo({
      left: secCord.left + window.pageXOffset,
      top: secCord.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
  if (tabClicked.id === "branches") {
    const secCord = branchesSection.getBoundingClientRect();

    window.scrollTo({
      left: secCord.left + window.pageXOffset,
      top: secCord.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
  if (tabClicked.id === "customer") {
    const secCord = customerSection.getBoundingClientRect();

    window.scrollTo({
      left: secCord.left + window.pageXOffset,
      top: secCord.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
});

//ORDER BUTTON FUNCTIONALITY

orderBtn.addEventListener("click", function () {
  const coord = offer.getBoundingClientRect();
  window.scrollTo({
    left: coord.left + window.pageXOffset,
    top: coord.top + window.pageYOffset,
    behavior: "smooth",
  });
});

//MORE BUTTON FUNCTIONALITY

moreBtn.addEventListener("click", function () {
  const coord = howItWorksSection.getBoundingClientRect();
  window.scrollTo({
    left: coord.left + window.pageXOffset,
    top: coord.top + window.pageYOffset,
    behavior: "smooth",
  });
});

//STICKY NAVIGATION

const obsCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) sticNav.classList.add("sticky");
  else sticNav.classList.remove("sticky");
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px",
};

const observe = new IntersectionObserver(obsCallback, options);

observe.observe(header);
