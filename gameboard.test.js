const Gameboard = require('./gameboard.js')
const Ship = require('./ship.js')

const gameboard = new Gameboard()

// test('Create gameboard 10 by 10 layout and query the dimensions should return 10x10',()=>{
//     expect(gameboard.layout).toStrictEqual(new Array(10).fill(null).map(() => new Array(10).fill(0)))
// })

test('Check if calling the receiveHit method on an empty field returns false',()=>{
    
    expect(gameboard.receiveAttack([0,1])).toBe(false)
})

test('Check if calling receiveAttack 3 times on empty fields, then querying the cnt of missed attack retuens 3',()=>{
    gameboard.receiveAttack([0,1])
    gameboard.receiveAttack([0,2])
    gameboard.receiveAttack([0,3])
    expect(gameboard.missedHits).toBe(3)
})

test('Test if checkStatus returns true on an gameboard with a ship of length 2 and one hit',()=>{
    let ship = new Ship(2)

    gameboard.layout[0][0] = ship;
    gameboard.layout[0][1] = ship;

    gameboard.receiveAttack([0,0])

    expect(gameboard.checkStatus()).toBe(true)
})
