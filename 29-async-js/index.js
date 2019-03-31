function sleep() {
  let i = 0
  while(i < (12 ** 9)) {
    i++
  }
}
const button = document.getElementById('click-button')


sleep()


button.addEventListener('click', console.log)
