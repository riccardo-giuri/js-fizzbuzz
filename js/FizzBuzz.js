const numberA = 3;
const numberB = 5;
const maxCounter = 100;

for(let i = 1; i <= 100; i++) {
    if(i % numberA === 0) {
        if(i % numberB === 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log("Fizz");
        }
    } 
    else if(i % numberB === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}