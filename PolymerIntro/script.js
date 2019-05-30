const arrayElements = [[1,2],[2,3,4],[5,6]];
const newArray = [...new Set(arrayElements.reduce((total, value) => total.concat(value), []))];
console.log(newArray);

