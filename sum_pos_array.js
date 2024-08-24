function sumPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);
}
