function askName () {
    let isimal= prompt("İsmini gir:");
    let isim = document.querySelector("#myName");
    isim.innerHTML = isimal;
}

function days() {
    let day;
    switch (new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case  6:
        day = "Cumartesi";
        break;
    }
    document.querySelector("#MyDays").innerHTML = "Bugün " + day

}

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let clock = document.querySelector("#MyClock");

    let time = h + ":" + m + ":" + s 

    clock.innerHTML = time;
    setTimeout(showTime, 1000);
}


showTime();
askName();
days();
  