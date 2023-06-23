

/* ---------- Cached Elements ----------*/
let board = document.querySelector('.board')
let squares = document.querySelectorAll('.board div')
squares.forEach((square, idx) => {
  square.classList.add(idx)
})

/* ---------- Variables ----------*/
const startPosition = 13
const currPosition = startPosition
let width = 10


/* ---------- Pieces ---------- */

const lPiece0 = [1, 1-width, 1+width, 1+width+1]
const lPiece1 = [1, 1-1, 1-1+width, 1+1]
const lPiece2 = [1, 1-width, 1-width-1, 1+width]
const lPiece3 = [1, 1-1, 1+1, 1+1-width]

const lRevPiece0 = []
const lRevPiece1 = []
const lRevPiece2 = []
const lRevPiece3 = []

const lPiece =[lPiece0, lPiece1, lPiece2, lPiece3]
const lRevPiece = []
const zPiece = []
const sPiece = []
const squPiece = []
const linePiece = []
const tPiece = []

const pieces = [lPiece, lRevPiece, zPiece, sPiece, squPiece, linePiece, tPiece]
console.log(pieces)

let currPiece = pieces[0][0]
console.log(currPiece)
/* ---------- Event Listeners ----------*/


/* ---------- Functions ---------- */
function show() {
  currPiece.forEach(position => {
    squares[currPosition+position].classList.add('piece')
  })
}
show()
console.log(board)
/* ---------- Music Testing ----------*/
const musicButton = document.getElementById("pheebs")
musicButton.addEventListener('click', play)

function play() {
  const audioElement = new Audio('../assets/themeSong/pheebs.mp3')
  audioElement.volume = 0.1
  audioElement.play()
  console.log(audioElement)
  console.log("songs")
}
