const secs = 3
const context = new AudioContext()
const bufferSize = context.sampleRate * secs
const buffer = context.createBuffer(2, 22050, context.sampleRate)

let playing = false
const toggle = document.getElementById('toggle')
if (toggle) {
  toggle.onclick = _ => {
    playing = !playing
  }
}
