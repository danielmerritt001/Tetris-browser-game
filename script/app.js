

/* ---------- Cached Elements ----------*/
let board = document.querySelector('.board')
let squaresNode = document.querySelectorAll('.board div')
squaresNode.forEach((square, idx) => {
  square.classList.add(idx)
})
let squares = [].slice.call(squaresNode)
console.log(squares)
const nextSquares = document.querySelectorAll('.next div')
const startBtn = document.getElementById('start')
const scoreDisplay = document.getElementById('score-display')

/* ---------- Event Listeners ---------- */
document.addEventListener('keyup', movement)
startBtn.addEventListener('click', () => {
  if (speedId) {
    clearInterval(speedId)
    speedId = null
  } else {
    speedId = setInterval(moveDown, 1000)
    showNext()
  }
})


/* ---------- Variables ----------*/
const startPosition = 14
let currPosition = startPosition
let currRotation = 0
let width = 10
let speedId= null
let score = 0
scoreDisplay.innerHTML = `Score: ${score}`

const nextWidth = 4
let nextIndex = 5
let nextRandNum = 0
const nextPiece = [
  [0, 0-nextWidth, nextWidth, nextWidth+1],
  [0, -nextWidth, nextWidth, nextWidth-1],
  [0, -1, nextWidth, nextWidth+1],
  [0, 1, nextWidth-1, nextWidth],
  [0, 1, -nextWidth, -nextWidth+1],
  [0, -nextWidth, nextWidth, nextWidth*2],
  [nextWidth, 0, nextWidth -1, nextWidth + 1]
]

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
const zPiece2 = [0, -1, width, width+1]
const zPiece3 = [0, -width, -1, width-1]

const zPiece = [zPiece0, zPiece1, zPiece2, zPiece3]

const sPiece0 = [0, 1, width-1, width]
const sPiece1 = [0, -width, 1, width+1]
const sPiece2 = [0, 1, width-1, width]
const sPiece3 = [0, -width, 1, width+1]

const sPiece = [sPiece0, sPiece1, sPiece2, sPiece3]

const squPiece = [[0, 1, -width, -width+1], [0, 1, -width, -width+1], [0, 1, -width, -width+1], [0, 1, -width, -width+1]]

const linePiece0 =[0, -width, width, width*2]
const linePiece1 =[0, -1, 1, -2]
const linePiece2 =[0, -width, width, width*2]
const linePiece3 =[0, -1, 1, -2]

const linePiece = [linePiece0, linePiece1, linePiece2, linePiece3]

const tPiece0 = [0, -width, -1, 1]
const tPiece1 = [0, -width, 1, width]
const tPiece2 = [0, -1, 1, width]
const tPiece3 = [0, -width, width, -1]

const tPiece = [tPiece0, tPiece1, tPiece2, tPiece3]

const pieces = [lPiece, lRevPiece, zPiece, sPiece, squPiece, linePiece, tPiece]
console.log(pieces)
let randNum =Math.floor(Math.random()*pieces.length)
console.log(randNum)
let currPiece = pieces[randNum][currRotation]
console.log(currPiece)

/* ---------- Functions ---------- */
function show() {
  currPiece.forEach(position => {
    squares[currPosition+position].classList.add('piece')
  })
}
show()

function unShow() {
  currPiece.forEach(position => {
    squares[currPosition + position].classList.remove('piece')
  })
}

function floor() {
  if(currPiece.some(position => squares[currPosition + position + width].classList.contains('frozen'))) {
    console.log
    currPiece.forEach(position => {
      squares[currPosition + position].classList.add('frozen')
    })
    randNum = nextRandNum
    nextRandNum = Math.floor(Math.random()*pieces.length)
    currRotation = 0
    currPosition = 14
    currPiece = pieces[randNum][currRotation]
    show()
    showNext()
    addScore()
  }
}

function addScore() {
  for(let i=0; i < 199; i+=width) {
    const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
    if(row.every(position => squares[position].classList.contains('frozen'))) {
      score +=10 
      scoreDisplay.innerHTML = `Score: ${score}`
      row.forEach(position => {
        squares[position].classList.remove('frozen')
        squares[position].classList.remove('piece')
      })
      const squaresRemoved = squares.splice(i, width)
      squares = squaresRemoved.concat(squares)
      squares.forEach(cell => board.appendChild(cell))
    }
  }
}
/* ---------- Movement Functions ----------*/

function movement(e) {
  if(e.keyCode === 37) {
    moveLeft()
  }
  if(e.keyCode === 39) {
    moveRight()
  }
  if(e.keyCode === 40) {
    
    moveDown()
  }
  if(e.keyCode ===38) {
    
    rotate()
  }
}

function moveDown() {
  floor()
  unShow()
  currPosition += width
  show()
}

function moveLeft() {
  unShow()
  if(!currPiece.some(position => (currPosition + position) % width === 0)) {
    currPosition -= 1
    if(currPiece.some(position => squares[currPosition + position].classList.contains('frozen'))){
      currPosition += 1
    }
  } 
  show()
}

function moveRight() {
  unShow()
  if(!currPiece.some(position => (currPosition + position) % width === width - 1)) {
    currPosition += 1
    if(currPiece.some(position => squares[currPosition + position].classList.contains('frozen'))){
      currPosition -= 1
    }
  } 
  show()
}

function rotate(){
  unShow()
  currRotation ++
  if (currRotation === currPiece.length){
    currRotation = 0
  }
  currPiece = pieces[randNum][currRotation]
  if (currPiece.some(position => (currPosition + position) % width === width - 1) && currPiece.some(position => (currPosition + position) % width === 0)) {
    currRotation --
    currPiece = pieces[randNum][currRotation]
  }
  show()
}



/* ---------- Next Piece Grid --------- */
function showNext() {
  nextSquares.forEach(square => {
    square.classList.remove('piece')
  })
  console.log(nextPiece[nextRandNum])
  nextPiece[nextRandNum].forEach(position => {
    nextSquares[nextIndex + position].classList.add('piece')
  })
}
showNext()

/* ---------- Buttons ---------- */


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
