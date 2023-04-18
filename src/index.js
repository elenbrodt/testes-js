//AnticipateGame
const default_cadance = 1;
const columns = 6;
const rows = 6;
const end_anticipation = 2;
const cadance_game = 2;
let cadance = 0;
let new_cadance = 0;
let cadance_array = [];
let sumSpecialSymbols = 0;
let anticipateMode = false;
let coordinates = [
  [1, 0],
  [3, 3]
];
//The first column will always stop at time 0, and the second
//one will always stops at the default cadance, that's why in the exemple even
//with a special symbol on column 1, the anticipate mode will only implicate at
//the third column. When column stops spining, it "look back" to see if
//the AnticipateMode is active. The anticipateMode ends when the max of special
//symbols equals the "end_game" variable, only after the column stops spining. That's
//why besides the column 4 have a special number, the AnticipateMode cadance only came
//back to default  at column 5;
for (let j = 0; j < columns; j++) {
  cadance_array.push(new_cadance);
  for (let i = 0; i < rows; i++) {
    coordinates.forEach((coordinate) => {
      if (coordinate.toString() === [i, j].toString()) {
        anticipateMode = true;
        sumSpecialSymbols += 1;
      }
    });
    if (anticipateMode) {
      cadance = cadance_game;
    }
    if (!anticipateMode || j === 0) {
      cadance = default_cadance;
    }
  }
  if (sumSpecialSymbols === end_anticipation) {
    anticipateMode = false;
  }
  new_cadance += cadance;
}
console.log(cadance_array);
