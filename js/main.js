let header = document.querySelector(".header");
let toogle = document.querySelector(".fa-bars");
let nav = document.querySelector(".links-h");
let close = document.querySelector(".close");

toogle.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};
// End Header

