function sameFrequency(num1, num2) {
    const num1Str = num1.toString();
    const num2Str = num2.toString();

    if (num1Str.length !== num2Str.length) return false;

    let frequency = {};
    for (let key of num1Str) {
        frequency[key] ? frequency[key] += 1 : frequency[key] = 1;
    }

    for (let key of num2Str) {
        if(!frequency[key]) {
            return false;
        } else {
            frequency[key] -= 1
        }
    }
    return true;
}

console.log(sameFrequency(22,222))