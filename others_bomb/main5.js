let thisH1 = document.getElementsByTagName("h1")[1];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];


function mouseIn(){
    thisH1.innerHTML = "This is inside";
}


function mouseOut(){
    thisH1.innerHTML = "This is outside." 
}

function mouseMove(e){
    thisP.innerHTML= "X,Y :" +e.clientX +"," +e.clientY;
}



thisDiv.addEventListener("mouseover",mouseIn);
thisDiv.addEventListener("mouseout",mouseOut);
thisDiv.addEventListener("mousemove",mouseMove);
