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
            let auxArray = []
            for (let col=0; col<auxGrid[row].length; col++) {
                if (col==0) {auxArray.push({letter:auxGrid[row][col],stroke:1})}
                if (auxGrid[row][col]==auxGrid[row][col-1]) {
                    auxArray.push({letter:auxGrid[row][col],stroke:auxArray[row][col-1].stroke})
                } else {
                    auxArray.push({letter:auxGrid[row][col],stroke:auxArray[row][col-1].stroke +1 })}
            }
            finalGrid.push(auxArray)
        } else {
            let auxArray = []
            for (let col=0; col<auxGrid[row].length; col++) {
                if (col==0) {
                    if (auxGrid[row][col]==auxGrid[row-1][col]) {
                        auxArray.push({letter:auxGrid[row][col],stroke:auxGrid[row-1][col]})
                    } else {
                        auxArray.push({letter:auxGrid[row][col],stroke:auxGrid[row-1][col]})
                    }
                }
                
            if (col==0) {auxArray.push({letter:auxGrid[row][col],stroke:1})}
            if (auxGrid[row][col]==auxGrid[row][col+1]) {
                auxArray.push({letter:auxGrid[row][col],stroke:auxArray[row][col].stroke})
            } else {
                auxArray.push({letter:auxGrid[row][col],stroke:auxArray[row][col].stroke +1 })}

        }
        
        }


    }
    
    
    return console.log(finalGrid)
}

paintStroke(["aaabc", "bbaac"])