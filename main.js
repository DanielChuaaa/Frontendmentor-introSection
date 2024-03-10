document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

  $navbarBurgers.forEach((burger) => {
    burger.addEventListener("click", () => {
      const target = burger.dataset.target;
      const backdropNav = document.querySelector(".backdrop");
      const navLink = document.querySelector(".navLink");
      const navLinkMobile = document.querySelector(".navLinkMobile");
      const navButton = document.querySelector(".navButton");
      const body = document.querySelector(".body");
      burger.classList.toggle("is-active");
      backdropNav.classList.toggle("backdrop-active");
      navLink.classList.toggle("navLink-active");
      navLinkMobile.classList.toggle("navLinkMobile-active");
      navButton.classList.toggle("navButton-active");
      body.classList.toggle("body-active");
    });
  });
});

const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownContentSecondary = document.querySelector(".dropdown-content-secondary");
const navButton = document.querySelector(".navButton");

let dropdownIsClicked = false;

dropdown1.addEventListener("click", () => {
  if (dropdownIsClicked) {
    closeDropdown();
  } else {
    openDropdown(dropdown1, dropdownContent);
  }
});

dropdown2.addEventListener("click", () => {
  if (dropdownIsClicked) {
    closeDropdown();
  } else {
    openDropdown(dropdown2, dropdownContentSecondary);
  }
});

function openDropdown(dropdown, content) {
  dropdown.classList.add(`${dropdown.id}-active`);
  navButton.classList.add("margin-top");
  content.style.display = "block";
  dropdownIsClicked = true;
}

function closeDropdown() {
  dropdown1.classList.remove("dropdown1-active");
  dropdown2.classList.remove("dropdown2-active");
  navButton.classList.remove("margin-top");
  dropdownContent.style.display = "none";
  dropdownContentSecondary.style.display = "none";
  dropdownIsClicked = false;
}
