const numbers = [ 1,2,3,4];

let  condition = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0){
        condition = true;
        break;
    }
}

const answ = numbers.some(element => element%2 === 0)
console.log(answ) 
console.log(condition) 
/*
hola mundo
definitivamente funciono
*/ 