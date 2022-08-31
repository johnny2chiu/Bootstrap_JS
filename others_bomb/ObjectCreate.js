// console.log(x)


// //方法三
// function Person(firstName, lastName, age, eyeColor){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.smile = function(){
//         //Window + .
//         document.write("^_^");
//     };
// }

// var newBorn = new Person("Ryan","Chung",888, "Red");



//方法一
let personObj = new Object();
personObj.firstName = "John";
personObj.lastName = "Doe";
personObj.age = 50;
personObj.eyeColor = "blue";
personObj.smile = function(){
    document.write("^_____^");
};

window.onload = function(){
    personObj.smile();
    console.log(personObj.firstName);
};

// //方法二
// let personObj2 = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue",
//     smile: function(){
//         document.write("-_-|||")
//     }
// };