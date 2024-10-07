// function countOfDigits(num) {
//     let numStr = num.toString();

//     return numStr.length;
// }

function countOfDigits(num) {
    if (num === 0) {
        return 1;
    }
    let count = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(countOfDigits(123));

