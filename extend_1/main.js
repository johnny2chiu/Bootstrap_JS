$(function(){
    $("button").on("click",go);
});
 
const maleKeywords = ["雄","強","賢","志"];
const femaleKeywords = ["芸","芬","佩"];

//箭頭函數
// function xxx(input){ .....}
// input   => {}
//如果沒有輸入值，反而要加 ()
//如果只有一個輸入值，()可以省略
// 若函數內容只有一行，可以省略區塊與return關鍵字
let go = () => {
    var inputText = $("#userInput").val();
    const isMale = maleKeywords.some(thisElement => inputText.includes(thisElement));
    const isFemale = femaleKeywords.some(thisElement => inputText.includes(thisElement));
    if(isMale && isFemale){
        $("h1").text("😁");
    }else if(isMale){
        $("h1").text("🧑");
    }else if(isFemale){
        $("h1").text("👩");
    }else{
        $("h1").text("😎");
    }
};