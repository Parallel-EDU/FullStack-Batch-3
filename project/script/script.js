const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const toggle = document.getElementById("close");
const blog = document.getElementById("blog");
const arrowdown = document.getElementById("arrowdown");
const dropdown = document.getElementById("dropdown");
const cat = document.getElementById("cat-image");
const orangecat = document.getElementById("cat2-image");
const section = document.getElementById("content");
const blogHeader = document.getElementById("blog-header");
const blogPara = document.getElementById("para");
const smallText = document.getElementById("text-small");
const mediumText = document.getElementById("text-medium");
const largeText = document.getElementById("text-large");
const increaseWidth = document.getElementById("increase-width");
const decreaseWidth = document.getElementById("decrease-width");

hamburger.addEventListener("click", function () {
  nav.style.right = "0px";
  toggle.style.display = "block";
  hamburger.style.display = "none";
});

toggle.addEventListener("click", function () {
  nav.style.right = "-100vw";
  toggle.style.display = "none";
  hamburger.style.display = "block";
});

let dropdownopen = false;
blog.addEventListener("click", () => {
  if (dropdownopen === false) {
    dropdownopen = true;
    arrowdown.style.rotate = "180deg";
    dropdown.style.display = "flex";
  } else if (dropdownopen === true) {
    dropdownopen = false;
    arrowdown.style.rotate = "0deg";
    dropdown.style.display = "none";
  }
  console.log(dropdownopen);
});

// setTimeout(() => {
//   cat.setAttribute("src", "../assets/cat2.jpg");
// }, 1000);



setTimeout(() => {
  cat.style.display = "none";
}, 5000);
setTimeout(() => {
  orangecat.style.display = "block";
}, 5000);

smallText.addEventListener("click", function () {
  blogHeader.style.fontSize = "20px";
  blogPara.style.fontSize = "14px";
});

mediumText.addEventListener("click", function () {
  blogHeader.style.fontSize = "30px";
  blogPara.style.fontSize = "16px";
});

largeText.addEventListener("click", function () {
  blogHeader.style.fontSize = "50px";
  blogPara.style.fontSize = "20px";
});

increaseWidth.addEventListener("click", function () {
  section.style.padding = "100px 300px 100px 80px";
});

decreaseWidth.addEventListener("click", function () {
  section.style.padding = "100px 400px";
});
