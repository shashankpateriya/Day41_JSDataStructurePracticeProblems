let elementsArray = [];

for (var i = 0; i < 10; i++) {
    elementsArray.push(Math.floor(Math.random() * 900 + 100));
}
console.log(elementsArray);

var i;
var firstMax = 0, secondMax = 0, firstMin = Number.MAX_VALUE, secondMin = Number.MAX_VALUE;


for (i = 0; i < elementsArray.length; i++) {
    if (elementsArray[i] > firstMax) {
        firstMax = elementsArray[i];
    }
}

for (i = 0; i < elementsArray.length; i++) {
    if (elementsArray[i] > secondMax && elementsArray[i] < firstMax) {
        secondMax = elementsArray[i];
    }
}

console.log("The second largest element is " + secondMax);


for (i = 0; i < elementsArray.length; i++) {
    if (elementsArray[i] < firstMin) {
        secondMin = firstMin;
        firstMin = elementsArray[i];
    }
    else if (elementsArray[i] < secondMin && elementsArray[i] != firstMin)
        secondMin = elementsArray[i];
}

console.log("The second Smallest element is " + secondMin);