/******************************************** Start loading logic **************************************** */
let loaderBox = document.querySelector(".loading");
window.addEventListener("load",() =>{
    loaderBox.style.display = "none";
});
/****************************************** End loading logic ******************************************** */
let headerManue = document.querySelector(".headerManue");
window.addEventListener("scroll", () =>{
    if(window.scrollY >= "25"){
        headerManue.style.position = "fixed";
        headerManue.style.top = "0px";
        headerManue.style.left = "0px";
    }else{
        headerManue.style.position = "static";

    }
})

// let navLinks = document.querySelectorAll(".nav-link");
// for(items of navLinks){
//     items.addEventListener("click", () =>{
//         items.classList.add = "active";
//     })
// }