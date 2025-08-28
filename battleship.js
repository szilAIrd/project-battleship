const Ship = require('./ship.js')
let ship = new Ship(1)

const Gameboard = require('./gameboard.js')
const gameboard = new Gameboard()

let coordinates = [3,4]

gameboard.placeShip(ship,coordinates)

console.log(gameboard.layout)




