const character = "#"
const count = 20
const rows = []
let inverted = false;

function padRow(rowNumber, rowCount) {
   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber)
}


while (rows.length < count) {
  if (inverted) {
    rows.unshift(padRow(rows.length + 1, count));
  } else {
    rows.push(padRow(rows.length + 1, count));
  }
}

let result = ""

for (const row of rows) {
    result +=  row + "\n"
}

document.getElementById("tree").textContent = result;

