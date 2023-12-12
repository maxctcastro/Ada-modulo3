class Player {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }
}

class Move {
constructor(row, col, playerSymbol) {
    this.row = row
    this.col = col
    this.playerSymbol = playerSymbol
}
}

class Board {
constructor(col, playerSymbol) {
    this.grid = Array.from(Array(3), () => new Array(3).fill(null)) 
}
}