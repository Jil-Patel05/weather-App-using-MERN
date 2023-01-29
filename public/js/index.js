const hambuger = document.querySelector(".hambuger");
const navbar = document.querySelector(".navbar");

const add =()=>{
    console.log("clicked");
    navbar.classList.toggle("active")
}
hambuger.addEventListener('click',add )
