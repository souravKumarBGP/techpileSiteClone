/******************************************** Start loading logic **************************************** */
let loaderBox = document.querySelector(".loading");
window.addEventListener("load",() =>{
    loaderBox.style.display = "none";
});
/****************************************** End loading logic ******************************************** */


let navLinks = document.querySelectorAll(".nav-link");
for(items of navLinks){
    items.addEventListener("click", () =>{
        items.classList.add = "active";
    })
}