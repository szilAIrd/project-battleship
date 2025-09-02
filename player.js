class Player{
    static players = [];
    constructor(type,gameboard){
        // There can be real (0) and computer (1) players in the game
        this.type = type;
        this.gameboard = gameboard;
    }

    createPlayer(type, gameboard){
        // Init gameboard for player
        let player = new Player(type,gameboard)
        Player.players.push(player)
        return player
    }

    

}

module.exports = Player;