let step = "";

let spanWho = document.getElementById('btnNewGame')
let winner = ''

const who =()=>{
  if (step == 'circle'){
    step = 'krest' ;
    spanWho.innerText = 'Крестики'
  } else {
    step = 'circle'
    spanWho.innerText = 'Нулики'
  }
}
who()

let blockItem = document.querySelectorAll('.blockItem')
let counter = 0;

blockItem.forEach((item)=>{
  item.addEventListener('click' ,()=>{
    if(!item.classList.contains('circle') && !item.classList.contains('krest')){
      item.classList.add(step)

    }
      

  })
  
})
