var a = 10;
a="paras";
//JS is [dynamically typed] language 
//type of variables is checked at runtime 
//not at compile time like statically typed ones (where variable type is checked at compile time)


//Datatype inference -> is term used for variable type not refered rather it is allocated according to the type of value in it


//when declared outside let and var both are globally scoped

function hello(){
    var b =0;//var is function scoped if declared inside function
    console.log(a);
}
{
    var b = 0;
}
{
    let c =1;//let is block scoped if declared inside any block{}
}
// console.log(c);

console.log(b);



//no need to declare variable
//or you can declare later on 
//all the declarations are pulled to top it's called [JS hoisting]
a = "paras";
console.log(a);
