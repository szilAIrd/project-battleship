class Gameboard{
    constructor(){
        this.layout = this.createGameboard(5,5)
        this.missedHits = 0;
    }

    createGameboard(rows, cols) {
        let gameboard = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
        return gameboard;
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
        if (this.layout[x][y]!=[0] && this.layout[x][y]!=[1]){
            this.layout[x][y].hit()
            console.log(`The ship on [${x},${y}] has been hit`)
            return true
        }
        else if(this.layout[x][y]==[0]){
            this.missedHits++
            this.layout[x][y] = 1;
            console.log(`Missed! No hit!`)
            return false
        }

        // if yes trigger layout[x][y].hit()
    }

    checkStatus(){
        // Return TRUE on any floating ships, FALSE if all ships are sunk
        let cntFloatingShips = 0;
        // let i = 0;
        // let j = 0;
        for (let i=0; i<this.layout.length;i++){
            for(let j=0;j<this.layout[i].length;j++){
                console.log(`The current element is ${this.layout[i][j]}`)
                if(this.layout[i][j] instanceof Object ){

                    if(this.layout[i][j].isSunk = false){
                        
                    }
                    else {
                        cntFloatingShips++
                    }
                    
                }
            }
        }

        //  Count ship objects that have sunk false
        if(cntFloatingShips>0){
            console.log('Not all ships are sunk yet!')
            return true
        }
        else{
            return false
        }
    }
}

module.exports = Gameboard;