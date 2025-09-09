const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");

// Default state
closeIcon.style.display = "none";

menuIcon.addEventListener("click", () => {
  sidebar.classList.remove("sidebargo"); // show sidebar
  menuIcon.style.display = "none";
  closeIcon.style.display = "inline";
});

closeIcon.addEventListener("click", () => {
  sidebar.classList.add("sidebargo"); // hide sidebar
  closeIcon.style.display = "none";
  menuIcon.style.display = "inline";
});


         
