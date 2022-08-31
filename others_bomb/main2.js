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


let promtAnswer = prompt("Question: 1+1=?");
let thisH1 = document.getElementById("Response");

switch(promtAnswer){
    case "2":
        thisH1.innerHTML = "You are right!!!";
        break;
    case "0":
        thisH1.innerHTML = "You are wrong.";
    default:
        thisH1.innerHTML = "***Wrong Answer***";
}