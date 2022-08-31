let thisH1 = document.getElementsByTagName("h1")[0];
let thisButton = document.getElementsByTagName("button")[0];

let thisH3 = document.getElementsByTagName("h3")[0];
let thisH4 = document.getElementsByTagName("h4")[0];

document.onclick = function(){
    var d = new Date();
    thisH1.innerHTML = d;
};

thisButton.onclick = function(){
    // alert("HIHI")

    var d = new Date();
    // thisH1.innerHTML = d;
    thisButton.innerHTML = d;
    thisH3.innerHTML = d.getDay();
    thisH4.innerHTML = d.toLocaleDateString();

}