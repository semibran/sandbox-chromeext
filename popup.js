const secs = 3
const context = new AudioContext()
const bufferSize = context.sampleRate * secs
const buffer = context.createBuffer(1, 22050, context.sampleRate)

let data = buffer.getChannelData(0)
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1
}

let noise = context.createBufferSource()
noise.buffer = buffer
noise.connect(context.destination)

let playing = false
const button = document.getElementById('toggle')
if (button) {
  button.onclick = toggle
}

function toggle () {
  playing = !playing
  if (playing) {
    noise.start()
  } else {
    noise.stop()
  }
}
