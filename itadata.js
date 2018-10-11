const board = document.getElementById('board').getContext('2d')
board.fillStyle = "#000"
//board.font = '96px Satisfy'
board.font = 'italic 96px Serif'
board.textBaseline = 'middle'
board.textAlign = 'center'

// need wait font load
const fonts = document.fonts.ready
const ita = fonts.then(() => board.fillText('Itacir', 150, 50))
const itadata = ita.then(() => board.getImageData(0,0,300,100))
