const Ship = require('./ship.js')

const ship = new Ship(4)

test('If the ship with length 4 has been hit 4 times its isSunk method should return true',()=>{
    ship.hit()
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
})