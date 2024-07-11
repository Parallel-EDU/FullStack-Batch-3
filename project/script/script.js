const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const toggle = document.getElementById("close");
const blog = document.getElementById('blog')
const arrowdown = document.getElementById('arrowdown')

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

blog.addEventListener('click', () =>{
    arrowdown.style.rotate = '180deg'
})