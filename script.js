var john = {
    name: "John",
    greet: function() {
        console.log("Hello! My name is " + this.name);
    }
};

var CN = {
    name: "Coding Ninjas",
    printName: function() {
        console.log(this);
    }
};

function firstPart(objectToUpdate) {
    // objectToUpdate is the object whose method/function we need to update
    // Update this function to solve the first part of the question
    objectToUpdate.greet = function() {
        console.log("Updated Greeting! My name is " + this.name);
    };
}

function secondPart(objectToUpdate) {
    // objectToUpdate is the object whose method/function we need to update
    // Update this function to solve the second part of the question
    objectToUpdate.printName = function() {
        console.log("Updated Print Name!");
        console.log(this);
    };
}

firstPart(john);
secondPart(CN);

john.greet(); // Should now display the updated greeting message
CN.printName(); // Should now display the updated printName message


// Do not update the rest of the code

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Method 1

// var countInterval;

// function startCounter() {
//     var number = parseInt(document.getElementById("number").value);
//     var currentNo = document.querySelector(".counter .current");
//     var nextNo = document.querySelector(".counter .next");
//     var count = 0;
//     // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
//     resetNumbers(currentNo, nextNo);
//     if (number < 1 || number > 9) {
//         clearInterval(countInterval);
//         return;
//     }
//     // Clears the previous interval that was running
//     clearInterval(countInterval);
//     countInterval = setInterval(function() {
//         if (count === number) {
//             clearInterval(countInterval);
//             return;
//         }
//         increaseCount(currentNo, nextNo);
//         count++;
//     }, 1000);
// }

// function resetNumbers(currentNo, nextNo, end) {
//     currentNo.innerHTML = 0;
//     nextNo.innerHTML = 1;
// }

// function increaseCount(currentNo, nextNo) {
//     nextNo.classList.add("animate");
//     currentNo.innerHTML = nextNo.innerHTML;
//     nextNo.classList.remove("animate");
//     nextNo.innerHTML = parseInt(nextNo.innerHTML) + 1;
// }


// Method 2

let counterValue = 0;
let targetValue = 0;
let intervalId;

function startCounter() {
    // Reset counter and target value
    counterValue = 0;
    targetValue = parseInt(document.getElementById("number").value);

    // Validate input
    if (isNaN(targetValue) || targetValue < 1 || targetValue > 9) {
        alert("Please enter a valid number between 1 and 9.");
        return;
    }

    // Update counter on the UI
    document.querySelector(".current").innerHTML = counterValue;

    // Start the counter
    intervalId = setInterval(increaseCounter, 1000);
}

function increaseCounter() {
    counterValue++;

    if (counterValue <= targetValue) {
        // Update counter on the UI
        document.querySelector(".current").innerHTML = counterValue;
    } else {
        // Stop the counter when it reaches the target value
        clearInterval(intervalId);
    }
}