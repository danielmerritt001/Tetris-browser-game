

/* ---------- Cached Elements ----------*/
let board = document.querySelector('.board')
let squares = document.querySelectorAll('.board div')
squares.forEach((square, idx) => {
  square.classList.add(idx)
})

/* ---------- Variables ----------*/
const startPosition = 14
const currPosition = startPosition
let width = 10


/* ---------- Pieces ---------- */

const lPiece0 = [0, 0-width, width, width+1]
const lPiece1 = [0, -1, width-1, 1]
const lPiece2 = [0, -width, -width-1, width]
const lPiece3 = [0, -1, 1, 1-width]

const lPiece =[lPiece0, lPiece1, lPiece2, lPiece3]

const lRevPiece0 = [0, -width, width, width-1]
const lRevPiece1 = [0, 0-1, -1-width, 1]
const lRevPiece2 = [0, -width, 0, 1-width, width]
const lRevPiece3 = [0, -1, 1, 1+width]

const lRevPiece = [lRevPiece0, lRevPiece1, lRevPiece2, lRevPiece3]

const zPiece0 = [0, -1, width, width+1]
const zPiece1 = [0, -width, -1, width-1]

const zPiece = [zPiece0, zPiece1]

const sPiece0 = [0, 1, width-1, width]
const sPiece1 = [0, -width, 1, width+1]

const sPiece = [sPiece0, sPiece1]

const squPiece = [[0, 1, -width, -width+1]]

const linePiece0 =[0, -width, width, width*2]
const linePiece1 =[0, -1, 1, -2]

const linePiece = [linePiece0, linePiece1]

const tPiece0 = [0, -width, -1, 1]
const tPiece1 = [0, -width, 1, width]
const tPiece2 = [0, -1, 1, width]
const tPiece3 = [0, -width, width, -1]

const tPiece = [tPiece0, tPiece1, tPiece2, tPiece3]

const pieces = [lPiece, lRevPiece, zPiece, sPiece, squPiece, linePiece, tPiece]
console.log(pieces)

let currPiece = pieces[6][0]
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
