var interval;
function mudarTexto(id, texto) {
    teste = document.getElementById(id);
    teste.value = texto;
}

function stopp() {
    clearInterval(interval);
    document.getElementById("start").removeAttribute("disabled", true);
    mudarTexto("second", "00");
    mudarTexto("minute", "00");
    mudarTexto("hour", "00");
}

function start() {
    const seconds = document.getElementById("second");
    const minutes = document.getElementById("minute");
    const hours = document.getElementById("hour");

    let duration =
        parseInt(hours.value) * 60 * 60 +
        parseInt(minutes.value) * 60 +
        parseInt(seconds.value);
    document.getElementById("start").setAttribute("disabled", true);
    document.getElementById("stop").removeAttribute("disabled", true);
    timer(duration);
}

const timer = (duration) => {
    let timer = duration;
    let hours, minutes, seconds;
    interval = setInterval(() => {
        hours = Math.floor(timer / 60 / 60);
        minutes = Math.floor(timer / 60 - hours * 60);
        seconds = Math.floor(timer % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        mudarTexto("hour", hours);
        mudarTexto("minute", minutes);
        mudarTexto("second", seconds);
        timer -= 1;
        console.log(timer);
        console.log(seconds, minutes, hours);
        if (timer === -1) {
            alert("ACABOU!!!");
            stopp();
        }
    }, 1000);
};
