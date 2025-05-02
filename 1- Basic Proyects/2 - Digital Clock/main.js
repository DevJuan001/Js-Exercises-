const clock = document.querySelector(".clock");
const date = new Date();

function showTime(){

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hour + ":" + minutes + ":" + seconds + "";

    clock.textContent = time

    setTimeout(showTime, 1000)
}

showTime();