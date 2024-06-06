//<<----------Variable Hoisting----------->>
// use test variable before declaring and initializing
console.log(test);   //undefined
var test = 5;

//Ex 2

var a = 10;
console.log(a + " " + b);
var b = 20;
console.log(a + " " + b);

//<<-------------Function Hoisting------------>>
//In JavaScript, Function hoisting allow us to call the function before its declaration
show();
 function show(){
    console.log("function declaration is called..")
 }
 
 //Function expressions are not hoisted in the same way as function declarations.
 my_fun();     //TypeError: my_fun is not a function
 var my_fun = function (){
    console.log("function expression is called..")
 }
 
 



