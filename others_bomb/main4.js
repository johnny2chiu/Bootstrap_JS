// window.onload = function() {
//     document.write("Hello JS!");
// };


// window.onload = function() {
//     document.onclick = function(e){
//         // console.log(e);
//         debugger;
//          alert(e.target.innerHTML+ "有" + e.target.innerHTML.length+ "個字元");
//     };
// };


// let confirmAnser = confirm("Exit this page?"+"Are you sure?")

// let thisH1 = document.getElementsByTagName("h1")[0];
// if(confirmAnser){
//     thisH1.innerHTML = "cancaled";
// }else{
//     thisH1.innerHTML = "Continued";
// }


// let promtAnswer = prompt("Question: 1+1=?");
// let thisH1 = document.getElementById("Response");

// switch(promtAnswer){
//     case "2":
//         thisH1.innerHTML = "You are right!!!";
//         break;
//     case "0":
//         thisH1.innerHTML = "You are wrong.";
//     default:
//         thisH1.innerHTML = "***Wrong Answer***";
// }

function showAlert(){
    thisH1.innerHTML = "HELLO!!!";

    // for(let i=0;i<10;i++){
    //     // if(i==3){
    //     //     continue
    //     // }

    //     console.log(i);
    // }


    // for(x in window){
    //     console.log(x + " : " + window[x]);
    // }



}

let thisButton = document.getElementsByTagName("button")[0];
let thisH1 = document.getElementById("Response");

// thisButton.onclick = function(){
//     showAlert();
// }


thisButton.addEventListener("click",showAlert)
// thisButton.addEventListener("dblclick",showAlert);