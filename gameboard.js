class Gameboard{
    constructor(){
        this.layout = this.createGameboard(5,5)
    }

    createGameboard(rows, cols) {
        let layout = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
        return layout;
      }

    placeShip(ship,coordinates){
        // Take the indices from the coordinates and set the layout elements = ship 
        // Like: this.layout[coordinates] = ship
        let x = coordinates[0]
        let y = coordinates[1]

        this.layout[x][y] = ship
    }
}

module.exports = Gameboard;