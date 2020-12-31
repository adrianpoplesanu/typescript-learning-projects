console.log("running...");
var search = function (elements, element) {
    var i, counter = 0;
    for (i = 0; i < elements.length; i++) {
        if (elements[i] == element)
            counter++;
    }
    return counter;
};
var numbers = [1, 2, 3, 1, 2, 4, 1];
var searchedNumber = 1;
console.log(search(numbers, searchedNumber));
