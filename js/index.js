const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimaton() 

function runAnimaton() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1

    num.addEventListener('animationend', (e) => {
      if(e.runAnimaton === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      }
    })
  })
}


