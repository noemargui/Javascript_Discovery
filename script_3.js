var RowsNumber = prompt("How many rows for our Pyramid?")

function Pyramid_builder() {
  let Pyramid = ""
  for(let RowNum = 1; RowNum <= RowsNumber; RowNum++) { 
    let Row = ""; let Space = ""
    for(let blocNum = RowNum; blocNum <= RowsNumber; blocNum++) {
      Space = Space + " " }
    for(let blocNum = 1; blocNum <= RowNum; blocNum++) {
     Row = Row + "#" }
    Pyramid = Pyramid + Space + Row + "\n"
  }
  console.log(Pyramid)
}

console.log(Pyramid_builder());