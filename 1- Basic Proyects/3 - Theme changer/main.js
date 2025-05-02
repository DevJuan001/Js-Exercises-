const mainBtn = document.querySelector(".mainBtn")
const body = document.documentElement;

mainBtn.addEventListener("click", () =>{

    if(mainBtn.textContent === "Light"){
        mainBtn.textContent = "Dark"
        body.classList.add("dark")
    }else{
        mainBtn.textContent = "Light"
        body.classList.remove("dark")
    }
});