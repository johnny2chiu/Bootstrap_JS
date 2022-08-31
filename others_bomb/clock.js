let time = document.getElementsByTagName("h1")[0];
let button = document.getElementsByTagName("button")[0];

button.addEventListener("click",showDate)

function showDate(){
    var d = new Date();
    time.innerHTML=d.toLocaleTimeString();
}

let foreverTimer = setInterval(clock,1000);

function clock(){
    var c = new Date()
    time.innerHTML = c.toLocaleTimeString();
}




////Teacher's
////ToDO:按按鈕顯示日期時間
// let thisH1 = document.getElementsByTagName("h1")[0];
// let thisButton = document.getElementsByTagName("button")[0];

// var foreverTimer = setInterval(timer, 1000);

// function timer(){
//     var d = new Date();
//     thisH1.innerHTML = d.toLocaleTimeString();
// }