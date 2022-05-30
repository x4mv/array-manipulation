const elements = ['fire', 'air', 'water'];

let rtaFinal = '';
const separator = '--';

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator
}

console.log('for: ', rtaFinal)

const rtaFinal2 = elements.join('--')
console.log('for: ', rtaFinal2)


const title = 'Curso de manipulacion de arrays'; 
const url = title.split(' ').join('-').toLocaleLowerCase();


console.log(url)

