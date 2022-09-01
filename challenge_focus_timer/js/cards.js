export default function Cards({
  forestSong,
  rainSong,
  coffeeSong,
  fireplaceSong,
  forestAudio,
  rainAudio,
  coffeeAudio,
  fireplaceAudio}) {

function clearColors() {
  forestSong.classList.remove('color')
  rainSong.classList.remove('color')  
  coffeeSong.classList.remove('color')  
  fireplaceSong.classList.remove('color')  
}

function audioStop() {
  forestAudio.pause()
  rainAudio.pause()
  coffeeAudio.pause()
  fireplaceAudio.pause()
}

return {
  clearColors,
  audioStop
}}