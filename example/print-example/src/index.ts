import print from '@eyelly/print'

const content = document.getElementById('content')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

button1.addEventListener('click', () => {
  print({
    content
  })
})

button2.addEventListener('click', () => {
  print({
    content,
    newWindow: true,
    title: 'print example'
  })
})
