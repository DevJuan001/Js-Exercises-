const hexColor = document.querySelector(".hexColor");
const hexColorBtn = document.querySelector(".hexColorBtn");
const bodyColor = document.querySelector("body");
const colorValues = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * colorValues.length);
        color += colorValues[randomIndex];
    }
    return color;
};

hexColorBtn.addEventListener("click", () => {
    bodyColor.style.backgroundColor = hexColor.value;
    const randomIndexColor = randomColor();
    bodyColor.style.backgroundColor = randomIndexColor;
    hexColor.textContent=`${randomIndexColor}`;
});

