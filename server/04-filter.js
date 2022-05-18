const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length > 6){
        newArray.push(element)
    }
}

const filt = words.filter(element => element.length >= 6 )

console.log("new with for: ", newArray)
console.log("new with filter: ", newArray)
console.log("original: ", words)

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]; 

  const done = orders.filter(element => element.delivered && element.total >= 100)
  console.log('the orders delivereds are: ', done)