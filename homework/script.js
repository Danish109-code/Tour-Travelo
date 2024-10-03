// 1. program to check if the number is even or odd

// const num = (prompt("Enter a number: ");

// if(num % 2 == 0) {
//    console.log(num,"number is even.");
//}

//else {
//    console.log(num,"number is odd.");
//}


// 2. program that checks if the number is positive, negative or zero

//const num = prompt("Enter a number: ");

//if (num > 0) {
//    console.log(num,"is positive number");
//}

//else if (num == 0) {
//  console.log(num,"is zero number");
//}

//else {
//     console.log(num,"is negative number");
//}



// 3. Program to find the largest among three numbers

const num1 = prompt("Enter first number: ");
const num2 = prompt("Enter second number: ");
const num3 = prompt("Enter third number: ");

if(num1 >= num2 && num1 >= num3) {
    console.log(num1,"is greater");
}
else if (num2 >= num1 && num2 >= num3) {
    console.log(num2,"is greater");
}
else {
     console.log(num3," is greater");
}
