// Functions to read elements by class or name
const $ = (elementOrClass) => document.querySelector(elementOrClass);
const menu = $(".mobile-nav");
const wrap = $(".wrap");
const menuButton = $(".menu-button");

// Used to show or hide navigation modal
function toggleNavigationModal() {
  $(".toolbar").classList.toggle("open");
  wrap.classList.toggle("mobile-menu-open");
}

// Used to hide navigation modal on clicking x or menu links
function hideNavigationModal() {
  menu.classList.toggle("open");
  toggleNavigationModal();
  wrap.removeEventListener("click", () => null);
}

// show or hide the navigation menu on clicking .mobile-nav
menu.addEventListener("click", function () {
  this.classList.toggle("open");
  toggleNavigationModal();
});

// show or hide the navigation menu on clicking .mobile-nav
menuButton.addEventListener("click", function () {
  hideNavigationModal();
});

// Get all links, click addevent listeners, 
const allLinks = document.querySelectorAll(".menu-item");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    hideNavigationModal();
  });
});
