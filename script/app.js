console.log("hello")
const musicButton = document.getElementById("pheebs")
musicButton.addEventListener('click', play)

function play() {
 const audioElement = new Audio('../assets/themeSong/pheebs.mp3')
 audioElement.volume = 0.1
 audioElement.play()
 console.log(audioElement)
 console.log("songs")
}
const arrayTest = [3]
arrayTest.push(arrayTest[0]+1)
console.log(arrayTest)
arrayTest[0] = 2
console.log(arrayTest)