const names = ["Suzzy", "Robbin", "Fin"];
const statement = writeCards(names, event);
const event = "suprise";
function writeCards(names, event) {
    const statement = [];
    for (let i = 0; i < names.length; i++) {
      statement.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return statement;
  }

function countDown(number) {
    while (number >= 0) {
    console.log(number);
    number--;
    }
  }
  