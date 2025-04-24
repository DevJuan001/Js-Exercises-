const themeBtn = document.getElementById("theme-btn")
const body = document.querySelectorAll("body")

themeBtn.addEventListener("click", ()=> {
  
    if (themeBtn.textContent = ""){
        themeBtn.textContent = "Light"
        body.classlist.add(".light");
    }
})