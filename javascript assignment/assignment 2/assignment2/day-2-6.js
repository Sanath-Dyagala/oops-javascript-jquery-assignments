const factorial = (num) => {
    var fact = 1;
    for (let i = 1; i <= num; i++) {

        fact = fact * i;
    }
    return fact;

}


console.log(`the factorial of number using arrow function is:${factorial(5)}`);