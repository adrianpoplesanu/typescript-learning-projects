console.log("running...");

let search : (allElements: Array<any>, searchedElement: any) => number = function (elements, element) {
    let i, counter = 0;
    for (i = 0; i < elements.length; i++) {
        if (elements[i] == element) counter++;
    }
    return counter;
}

let numbers = [1, 2, 3, 1, 2, 4, 1];
let searchedNumber = 1;
console.log(search(numbers, searchedNumber));
