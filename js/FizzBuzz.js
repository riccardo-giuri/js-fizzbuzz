//variables
const numberA = 3;
const numberB = 5;
const maxCounter = 100;
const container_square = document.getElementById("squares_container");

//loop that creates and populate every cell
for(let i = 1; i <= 100; i++) {
    //cell element creation
    let cell = document.createElement("div");
    //populating the cell element with classes
    cell.classList.add("col-1", "squared", "d-flex", "justify-content-center", "align-items-center");

    //logic that populate the bg and the value based on being multiple of numberA and numberB
    if(i % numberA === 0) {
        if(i % numberB === 0) {
            cell.classList.add("bg-danger");
            cell.innerHTML = "FizzBuzz";
            console.log("FizzBuzz");
        }
        else {
            cell.classList.add("bg-warning");
            cell.innerHTML = "Fizz";
            console.log("Fizz");
        }
    } 
    else if(i % numberB === 0) {
        cell.classList.add("bg-info");
        cell.innerHTML = "Buzz";
        console.log("Buzz");
    } 
    else {
        cell.classList.add("bg-success");
        cell.innerHTML = i.toString();
        console.log(i);
    }

    //append to the page the cell you have created before
    container_square.append(cell);
}

