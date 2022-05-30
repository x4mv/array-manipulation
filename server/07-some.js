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

// ---------------> DATES <--------------

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
    
  const newAppointment = {
      startDate: new Date(2021, 1, 1, 8),
      endDate: new Date(2021, 1, 1, 9, 30),
    };
    
    const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

    const isOverlap = (newDate) =>{
        return dates.some(date => {
            return areIntervalsOverlapping(
                {start: date.startDate, end: date.endDate},
                {start: newDate.startDate, end: newDate.endDate}
            )
        })
    }

console.log('la hora se sobre pone ?: ',isOverlap(newAppointment))