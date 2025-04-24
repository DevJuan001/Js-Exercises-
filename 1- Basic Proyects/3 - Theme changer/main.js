const themeBtn = Document.getElementById("theme-btn")
const body = Document.querySelectorAll("body")

themeBtn.addEventListener("click", ()=> {
  
    if (themeBtn.textContent = ""){
        themeBtn.textContent = "Light"
        body.classlist.add(".light");
    }
})
console.log()