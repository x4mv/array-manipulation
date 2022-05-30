/*const letter = ['a','b','c'];

for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    console.log('for: ' , element);
}

letter.forEach( element => console.log('foreach: ' ,element));

*/

const products = [
    {title: 'burger', price: 121},
    {title: 'pizza', price: 20},
    {title: 'tuna', price: 10}
];

const app = document.getElementById('app');
products.forEach(element => {
    app.innerHTML += `<li>${element.title} - ${element.price}</li>`
});


/*
function solve(nums,target){
    const result = []
    if(nums.length === 2){
        for (let index = 0; index < nums.length; index++) {
            if(nums[index] + nums[index+1] === target){
                result.push(0,1)
            }
        }
    }else{
        for(let i = 0; i < nums.length ; i++){
            for(let j = i+1; j < nums.length; j++){
                if(nums[i]+nums[j] === target){
                    result.push(nums.indexOf(nums[i]))
                    result.push(nums.indexOf(nums[j], i+1))
                }
            }
        }
    }
    return result
}
console.log(solve([3,2,3], 6))
*/