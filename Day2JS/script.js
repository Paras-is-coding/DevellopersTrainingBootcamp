//1 about let
{
    let a = 10;
    var b= 20;
    console.log(a);
}
// console.log(a); does not work as let is block scoped
console.log(b); // works var is function scoped (not block)

//2 const keyword
{
    const d = 5;
    console.log(d);
    // d = 30; cannot reassign value to const 
}
// console.log(d); doesnot work const is also block scoped

//3 default parameters

function mul(a,b=4){
    return a*b;
}
mul(5,6);//both args are given so ans will be 30
mul(5); // only one arg is given so function will take second arguments default value
// ans will be 20 in this case

//4 object literals
//used when we want to store values in key value form
let person = {
    name : "paras",
    age : 21,
    gender: "male",
    phno : 3455345
}
console.log(person);
console.log(person.age);
for(key in person){
    console.log(person[key])
}




//for..of loop
//it is used to access values of iteratable(not object)
let marks = [34,45,56,78];
for(values of marks){
    console.log(values)
}

//IIFE (Immediately Invoked Function Expression) and arrow functions
// they are self invoking functions also known as anonymous functions
//basically they exist to prevent possible name collision

//syntax and example

(
    function(){
        var val = 40;
        console.log(val);
    }
)();
// console.log(val);  it'll say val is not defined



//last topic today is arrow functions
// they are short syntax for functions 

//normal sum function
function sum(a,b){
    return a+b;
}

//using arrow function
let sum = (a,b) =>{
    return a+b;
}
// we can remove curly braces and return keyword if there is one statement only and that is return
// and can remove parenthesis around parameter if it's only one
let square = a =>  a*a;

//how easy JS have made life isn't it ?? :)

