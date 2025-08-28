const Gameboard = require('./gameboard.js')

const gameboard = new Gameboard()

test('Create gameboard 10 by 10 layout and query the dimensions should return 10x10',()=>{
    expect(gameboard.layout).toStrictEqual(new Array(10).fill(null).map(() => new Array(10).fill(0)))
})

