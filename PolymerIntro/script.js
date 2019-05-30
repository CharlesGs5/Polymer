const arrayElements = [[1, 2, 3],[2, 3, 4],[5, 6, 6]];
/*const newArray = arrayElements.reduce((total, value) => {
    return total.concat(value);
}, []);*/

const newArray = [...new Set(arrayElements.reduce((total, value) => {
    return total.concat(value)
}, []))];

console.log(newArray);