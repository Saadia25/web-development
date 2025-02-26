// function printText(){
//     console.log('hello world');    
// }
// printText()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);   
// }
// addTwoNumbers(5,7)
// addTwoNumbers(66,88)
// addTwoNumbers(11,154)

// function addTwoNumbers(num1,num2){
//     console.log(num1-num2);   
// }
// addTwoNumbers(5,7)

// function addTwoNumbers(num1,num2){
// return num1+num2
// console.log("hello");

// }
// console.log(addTwoNumbers(99,99));


// function areaofcircle(pi,r){
//     return pi*r**2
// }
// console.log(areaofcircle(3,44));
// console.log(areaofcircle(3,4));


// function areaofcircle(radius){
//     return 3.142*(radius**2)
// }
// console.log(areaofcircle(5));

// function convert(C){
//     return ((9/5)*C)+32
// }
// console.log(convert(2));

// function celcius_fahrenheit(F){
//     let celcius =1.8*F+32
//     return celcius
// }
// console.log(celcius_fahrenheit(6));

// function loginUserMessage(username){
//     if(username===undefined){
//         console.log('PLEASE ENTER A USERNAME');
//         return
//     }
//     console.log(`${username} just logged in`)
   
// }
// loginUserMessage('Leo');

// let username;
// username="anything"
// console.log(username);

// function even(num){
//     return num % 2===0;
// }
// function odd(num){
//     return num % 2 !==0;
// }
//  console.log(even(10));
//  console.log(odd(4));
 
 function evenOdd(num){
    if( num % 2===0 && num !=0){
        return"it the Even number"
    }
    else if (num ==0){
        return"zero"
    }
        else{
        return"it the Odd number"
    }
    
 }
 console.log(evenOdd(6));
 
