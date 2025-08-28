class Gameboard{
    constructor(){
        this.layout = this.createGameboard(10,10)
    }

    createGameboard(rows, cols) {
        let layout = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
        return layout;
      }
}

module.exports = Gameboard;