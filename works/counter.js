let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = 'マウス左部摩耗度: ' + count
}