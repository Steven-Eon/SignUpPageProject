const button = document.querySelector(".themeToggle"); 
const root = document.querySelector(":root");
root.classList.toggle("dark");

button.addEventListener("click", (e) =>
{
    root.classList.toggle("dark");
    root.classList.toggle("light");
    e.target.classList.toggle("bx-sun");
    e.target.classList.toggle("bxs-sun");
});