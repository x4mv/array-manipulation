/*
const letters = ['a' ,'b', 'c'];


const newArray= [];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];    
    newArray.push(element + '++');
}


const newArray = letters.map(element => element+ '++')


console.log('original: ',letters);
console.log('new: ',newArray);

*/

const products = [
    {title: 'Burger ', price: 121 },
    {title: 'Pizza ', price: 20 }
]

const app = document.getElementById('app');
const listProducts = products.map( Element => {
    return `<li>${Element.title} - ${Element.price}</li>`
})

app.innerHTML = listProducts.join('')


var removeElement = function(nums, val) {
    let solve = []
    const filter = nums.filter(element => element !== 3)
    solve = [...filter]
    const diff = solve.lenght - nums.length
    if(solve.lenght < nums.length){
        for(let i = 0; i < diff ; i++){
            solve.push("_")
        }
    }
    
    return solve
};

console.log(removeElement([3,2,2,3], 3))