var topic =[
    "尚未開學",
    "國定假日",
    "環境準備",
    "聖誕節",
    "123",
    "456",
    "789",

];

var startDate= new Date();


// debugger;

function setMonthAndDate(startMonth,startDay){

    startDate.setMonth(startMonth-1,startDay);

    // startDate.setHours(0);
    // startDate.setMinutes(0);
    // startDate.setSeconds(0);
}
// 第一次活動日期,2月21日
setMonthAndDate(2,21);
