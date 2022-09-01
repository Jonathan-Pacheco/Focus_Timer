export default function Timer({
 minutesDisplay, 
 secondsDisplay
}) {
  
function minusFive() {
  let minutes = Number(minutesDisplay.textContent)
 if (minutes <= 4) {
 return
} else {
minutes - 5 
}
minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
}

function plusFive() {
  let minutes = Number(minutesDisplay.textContent)
 if (minutes || '0') {
  minutes +5
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
 } 
}

return {
  minusFive,
  plusFive
}

}