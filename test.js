// problem idea: receiving an array containing strings
// each string represents a row, every letter a column
// you would color each grid square if they're surrounded by same letters
// so a new color for each letter AND repetition (if happening)
// return the final integer for each paint stroke

paintStroke = function (array) {
    let auxGrid = [];
    let finalGrid= [];
    for (let str of array) {
        auxGrid.push(Array.from(str))
    }
    for (let row=0; row<auxGrid.length; row++) {
        if (row == 0) {
            let auxArray = [{letter:auxGrid[row][0],stroke:1}]
            for (let col=1; col<auxGrid[row].length; col++) {
                if (auxGrid[0][col]==auxGrid[0][col-1]) {
                    auxArray.push({letter:auxGrid[0][col],stroke:auxArray[col-1].stroke})
                } else {
                    auxArray.push({letter:auxGrid[row][col],stroke:auxArray[col-1].stroke + 1 })}
            }
            finalGrid.push(auxArray)
        } else {
            let auxArray = [
                (auxGrid[row][0]==auxGrid[row-1][0])? 
                {letter:auxGrid[row][0],stroke:finalGrid[row-1][0].stroke} 
                : {letter:auxGrid[row][0],stroke:finalGrid[row-1][0].stroke + 1} 
            ]
            for (let col=1; col<auxGrid[row].length; col++) {
                if (auxGrid[row][col]==auxGrid[row][col-1]) {
                    auxArray.push({letter:auxGrid[row][col],stroke:auxArray[col-1].stroke})
                } else {
                    auxArray.push({letter:auxGrid[row][col],stroke:auxArray[col-1].stroke + 1 })}
            }
            finalGrid.push(auxArray)
        }
    }
    return console.log(finalGrid)
}

paintStroke(["aaabc", "bbaac"])