

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
const lPiece1 = [currPosition, currPosition-width, currPosition+width, currPosition+width+1]
const lPiece2 = [currPosition, currPosition-1, currPosition-1+width, currPosition+1]
const lPiece3 = [currPosition, currPosition-width, currPosition-width-1, currPosition+width]
const lPiece4 = [currPosition, currPosition-1, currPosition+1, currPosition+1-width]



const lPiece =[lPiece1, lPiece2, lPiece3, lPiece4]
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
}
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
