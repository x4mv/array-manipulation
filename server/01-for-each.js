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
