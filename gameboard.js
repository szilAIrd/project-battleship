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

    receiveAttack(coordinates){
        let x = coordinates[0]
        let y = coordinates[1]

        // Check in the layout if a ship is on the coordinates
        if (this.layout[x][y]!=[0]){
            this.layout[x][y].hit()
            console.log(`The ship on [${x},${y}] has been hit`)
        }
        else {
            console.log(`No hit`)
        }
        // if yes trigger layout[x][y].hit()

    }
}

module.exports = Gameboard;