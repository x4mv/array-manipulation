const totals = [ 1,2,3,4,];

let add = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    add = add + element;
}

const red = totals.reduce((add, element) => add + element, 0)

console.log('with for: ', add);
console.log('with reduce: ', add);

