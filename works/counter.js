let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = count + ' クッキー'
}
const countDown = () => {
  if (count > 0) {
    count--
  }
  const countElement = document.querySelector('#count')
  countElement.innerText = count + ' クッキー'
}
const countReset = () => {
  count=0
  const countElement = document.querySelector('#count')
  countElement.innerText = count + ' クッキー'
}