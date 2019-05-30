const arrayElements = [[1,2],[2,3,4],[5,6]];
const newArray = arrayElements.reduce((total, value) => {
    return total.concat(value);
}, []);
console.log(newArray);