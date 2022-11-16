const linkContainer = document.querySelector(".links");

const barContainer = document.querySelector(".ham-burg");

const markContainer = document.querySelector(".mark")

barContainer.addEventListener("click",()=>{
    linkContainer.classList.add("active");
    barContainer.style.display = "none";

})
markContainer.addEventListener("click",()=>{
    linkContainer.classList.remove("active");
    barContainer.style.display = "block";

})
