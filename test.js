// problem idea: receiving an array containing strings
// each string represents a row, every letter a column
// you would color each grid square if they're surrounded by same letters
// so a new color for each letter AND repetition (if happening)
// return the final integer for each paint stroke

paintStroke = function (array) {
    let auxGrid = [];
    let finalGrid = [];
    let paint = 1
    // turning every string into an array containing letters
    for (let str of array) {
        auxGrid.push(Array.from(str))
    }
    
    //comparar = element above(row-1) and before(col-1)
    comparar = function (row, col, paint) {
        const coord = auxGrid[row][col]
        const above = auxGrid[row-1][col]
        const before = auxGrid[row][col-1]
        switch (coord) {
            case (coord==above) :
                return (finalGrid[row-1][col].stroke)
                break;
            case (coord==before):
                return (finalGrid[row][col-1].stroke)
                break;
            default:
                return (paint++)
        }
    }

    
    // initial case: comparing cols in the first row
    let auxArray = [{ letter : auxGrid[0][0], stroke : 1 }]
    for (let col = 1; col < auxGrid[0].length; col++) {
        // if letters are the same, share a stroke
        // if not, adds a stroke
        let str = auxArray[col-1].stroke
        if (auxGrid[0][col] == auxGrid[0][col-1]) {
            auxArray.push({ letter : auxGrid[0][col], stroke : str })
        } else {
            auxArray.push({ letter : auxGrid[0][col], stroke : str + 1 })}
        }
    // at the end, paint gets updated with last stroke score
    paint = auxArray[auxGrid[0].length-1].stroke
    finalGrid.push(auxArray)
    
    for (let row = 1; row < auxGrid.length; row++) {
        // initial case: first letter
        let auxArray = []
        if (auxGrid[row][0] == auxGrid[row-1][0]) {
            auxArray.push({ letter : auxGrid[row][0], stroke : finalGrid[row-1][0].stroke })
        } else {
            auxArray.push({ letter : auxGrid[row][0], stroke : paint + 1 })
        }
        for (let col = 1; col < auxGrid[row].length; col++) {
            let str = finalGrid[row-1][col].stroke
            if (auxGrid[row][col] == auxGrid[row-1][col]) {
                auxArray.push({ letter : auxGrid[row][col], stroke : finalGrid[row-1][col].stroke })
            } else {
                if (auxGrid[row][col] == auxGrid[row][col-1]) {
                    auxArray.push({ letter : auxGrid[row][col], stroke : auxArray[col-1].stroke })
                } else {
                    paint++
                    auxArray.push({letter:auxGrid[row][col], stroke : paint })}                    
                }
            }
        finalGrid.push(auxArray)
    }
    
    return console.log(finalGrid)
    
}

paintStroke(["aabba","aabbc","aaacc","bbbaa"])