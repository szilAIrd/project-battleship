const Ship = require('./ship.js')
let ship = new Ship(1)

const Gameboard = require('./gameboard.js')
const gameboard = new Gameboard()

let coordinates = [3,4]

gameboard.placeShip(ship,coordinates)
gameboard.receiveAttack([3,4])

console.log(ship.hits, ship.sunk)

console.log(gameboard.layout)




