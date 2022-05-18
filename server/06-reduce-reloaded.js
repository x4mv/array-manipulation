const numbers = [1,3,2,3];

const list = numbers.reduce((obj,element) => {
    if(!obj[element]){
        obj[element] = 1;
    }else{
        obj[element] = obj[element] + 1;
    }
    return obj
}, {})

console.log(list)

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const answ = data
  .map(element => element.level)
  .reduce((acc , element) =>{
      if(!acc[element]){
          acc[element] = 1;
      }else{
          acc[element] = acc[element] + 1;
      }
      return acc;
  }, {})

  console.log(answ)