let rightside = document.querySelector('.rightside')
let toggle = document.querySelector('.toggle')
let likeList = document.querySelectorAll('.like')

toggle.addEventListener('click',(e)=> {
 rightside.classList.toggle('show')
})

likeList.forEach((e)=>{
  e.addEventListener('click', ()=>{
    e.classList.toggle('liked')
    console.log('cli')
  })
})