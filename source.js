 let name = prompt('Please enter your name');


dispName = document.querySelector("#myName")
dispName.innerHTML = name;


setInterval(updateTime, 1000);

function updateTime(){

    var saat = new Date();
var dayNumber = saat.getDay();
var day = "";

if(dayNumber == 1){
    day = "Pazartesi";
}
else if(dayNumber == 2){
    day = "Salı";
}
else if(dayNumber == 3){
    day = "Çarşamba";
}
else if(dayNumber == 4){
    day = "Perşembe";
}
else if(dayNumber == 5){
    day = "Cuma";
}
else if(dayNumber == 6){
    day = "Cumartesi";
}
else if(dayNumber == 7){
    day = "Pazar";
}

dispClock = document.querySelector("#myClock");
dispClock.innerHTML = `${saat.getHours()}:${saat.getMinutes()}:${saat.getSeconds()}  ${day}`;

}