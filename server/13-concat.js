const elements = [1,1,2,2]; 
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element)
}

console.log('for: ', newArray)

const newArray2 = elements.concat(othersElements)
console.log('concat: ', newArray2)

const newArray3 = [...elements, ...othersElements];
console.log('Spread: ', newArray3)