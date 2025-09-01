const Ship = require('./ship.js')
const Gameboard = require('./gameboard.js')
const Player = require('./player.js')

let ship = new Ship(2)
const gameboard = new Gameboard()
const player1 = new Player(0)

let coordinates = [3,4]

gameboard.placeShip(ship,coordinates)
gameboard.placeShip(ship,[4,4])

gameboard.receiveAttack([3,4])


console.log(ship.hits, ship.sunk)

console.log(gameboard.layout)
 console.log(gameboard.checkStatus())



