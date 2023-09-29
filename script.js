const mainCard = document.getElementById('maincd')
// const bigBox = document.querySelector('.box')


const cardOne = document.getElementById('card1')
const cardTwo = document.getElementById('card2')
const cardThree = document.getElementById('card3')
const cardFour = document.getElementById('card4')


// Hover no MAIN CARD

mainCard.addEventListener('mouseenter', (hover)=> {
  cardOne.classList.add('cards1')
  cardTwo.classList.add('cards2')
  cardThree.classList.add('cards3')
  cardFour.classList.add('cards4')

mainCard.addEventListener('onclick', (click)=> {
  cardOne.classList.add('cards1')
  cardTwo.classList.add('cards2')
  cardThree.classList.add('cards3')
  cardFour.classList.add('cards4')

  
  })
  mainCard.addEventListener('mouseleave', (outhover)=> {
    cardOne.classList.remove('cards1')
    cardTwo.classList.remove('cards2')
    cardThree.classList.remove('cards3')
    cardFour.classList.remove('cards4')
    
    })
})

// Hover nos GAME CARD

cardOne.addEventListener('mouseenter', (cd1Info)=> {
  cardOne.style.scale = '1.1'
    cardOne.addEventListener('mouseleave', ()=> {
      cardOne.style.scale = '1'
    })
}) 
cardTwo.addEventListener('mouseenter', (cd2Info)=> {
  cardTwo.style.scale = '1.1'
    cardTwo.addEventListener('mouseleave', ()=> {
      cardTwo.style.scale = '1'
    })
}) 
cardThree.addEventListener('mouseenter', (cd3Info)=> {
  cardThree.style.scale = '1.1'
    cardThree.addEventListener('mouseleave', ()=> {
      cardThree.style.scale = '1'
    })
}) 
cardFour.addEventListener('mouseenter', (cd4Info)=> {
  cardFour.style.scale = '1.1'
    cardFour.addEventListener('mouseleave', ()=> {
      cardFour.style.scale = '1'
    })
})



const closeSidebar = document.querySelector('#close')
const openSidebar = document.querySelector('#open')
const Sidebar = document.querySelector('.sidebar')


openSidebar.addEventListener('click', ()=> {
  openSidebar.style.display = 'none'
  Sidebar.style.width = '190px'
  Sidebar.style.left = '0px'

  setTimeout(() => {
    closeSidebar.style.display = 'flex'
  }, 450);
  
  closeSidebar.addEventListener('click', ()=> {
    openSidebar.style.display = 'flex'
    Sidebar.style.width = '0px'
    Sidebar.style.left = '-190px'

    closeSidebar.style.display = 'none'
  })
})


function SaidoSite() {
  window.confirm('Deseja sair do site?')
}

// DESCRIPTION MAX CHARACTERS = 136
