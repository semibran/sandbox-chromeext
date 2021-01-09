const duration = 3
const amplitude = 0.125

const context = new AudioContext()
const bufferSize = context.sampleRate * duration
const buffer = context.createBuffer(1, 22050, context.sampleRate)

let data = buffer.getChannelData(0)
for (let i = 0; i < bufferSize; i++) {
  data[i] = (Math.random() * 2 - 1) * amplitude
}

let noise = null
function toggle () {
  if (!noise) {
    noise = context.createBufferSource()
    noise.buffer = buffer
    noise.loop = true
    noise.connect(context.destination)
    noise.start()
  } else {
    noise.stop()
    noise = null
  }
}

const button = document.getElementById('toggle')
if (button) {
  button.onclick = _ => {
    toggle()
    button.innerText = noise ? 'Pause' : 'Play'
  }
}
