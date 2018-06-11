const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// console.log(integers.sort((a, b) => b - a));
// console.log(integers.sort((a, b) => b - a).filter(number => number <= 19));
console.log(integers.sort((a, b) => b - a).filter(number => number <= 19).map(x => (x * 1.5)-1));

