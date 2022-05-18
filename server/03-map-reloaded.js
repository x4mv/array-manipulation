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

  const prices = orders.map(element => element.total)
  const added = orders.map(element =>{
      return {
        ...element,
        tax: .19
      };
  })

  console.log('Map: ', prices)
  console.log('Adding an property: ', added)
  console.log('original: ', orders)
  

 