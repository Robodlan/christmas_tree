const character = "⭐️"
const count = 30
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
  for (const char of row) {
    const delay = Math.random() * 3
     result += `<span class="blink" style="animation-delay: ${delay}s;" >${char}</span>`;
      }
    result += "<br>"
}

document.getElementById("tree").innerHTML = result;

