class Ship{
    constructor(length=1){
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        this.hits++
    }

    isSunk(){
        if(this.hits>=this.length){
            // If equal or more hits than length the ship is sunk
            return true
        }
        else {
            // Otherwise the ship is still in Game
            return false
        }
    }
}

let ship = new Ship(4)



module.exports = Ship;

