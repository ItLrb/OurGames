const mainCards = document.querySelectorAll(".main-card");
const bigBox = document.querySelector(".box");

const cardOne = document.getElementById("card1");
const cardTwo = document.getElementById("card2");
const cardThree = document.getElementById("card3");
const cardFour = document.getElementById("card4");

// gangs
const cardOneG = document.getElementById("card1gangs");
const cardTwoG = document.getElementById("card2gangs");
const cardThreeG = document.getElementById("card3gangs");
const cardFourG = document.getElementById("card4gangs");

// brazilis
const cardOneB = document.getElementById("card1brz");
const cardTwoB = document.getElementById("card2brz");
const cardThreeB = document.getElementById("card3brz");
const cardFourB = document.getElementById("card4brz");

// Hover no MAIN CARD

bigBox.addEventListener("mouseenter", (hover) => {
  cardOne.classList.add("cards1");
  cardTwo.classList.add("cards2");
  cardThree.classList.add("cards3");
  cardFour.classList.add("cards4");

  bigBox.addEventListener("onclick", (click) => {
    cardOne.classList.add("cards1");
    cardTwo.classList.add("cards2");
    cardThree.classList.add("cards3");
    cardFour.classList.add("cards4");
  });
  bigBox.addEventListener("mouseleave", (outhover) => {
    cardOne.classList.remove("cards1");
    cardTwo.classList.remove("cards2");
    cardThree.classList.remove("cards3");
    cardFour.classList.remove("cards4");
  });
});

// Hover nos GAME CARD

cardOne.addEventListener("mouseenter", (cd1Info) => {
  cardOne.style.scale = "1.1";
  cardOne.addEventListener("mouseleave", () => {
    cardOne.style.scale = "1";
  });
});
cardTwo.addEventListener("mouseenter", (cd2Info) => {
  cardTwo.style.scale = "1.1";
  cardTwo.addEventListener("mouseleave", () => {
    cardTwo.style.scale = "1";
  });
});
cardThree.addEventListener("mouseenter", (cd3Info) => {
  cardThree.style.scale = "1.1";
  cardThree.addEventListener("mouseleave", () => {
    cardThree.style.scale = "1";
  });
});
cardFour.addEventListener("mouseenter", (cd4Info) => {
  cardFour.style.scale = "1.1";
  cardFour.addEventListener("mouseleave", () => {
    cardFour.style.scale = "1";
  });
});

// =-----------------------------=--------------------------=-------------------= 


// CAROUSEL EFFECT

const prevBtn = document.getElementById("pass-left");
const nextBtn = document.getElementById("pass-right");

let currentIndex = 0;


function showCurrentCard() {
  mainCards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex -=  1 + mainCards.length) % mainCards.length;

  if (currentIndex == 0) {
    bigBox.addEventListener("mouseenter", (hover) => {
      cardOne.classList.remove("cards1brzl");
      cardTwo.classList.remove("cards2brzl");
      cardThree.classList.remove("cards3brzl");
      cardFour.classList.remove("cards4brzl");

      cardOne.classList.remove("cards1gangs");
        cardTwo.classList.remove("cards2gangs");
        cardThree.classList.remove("cards3gangs");
        cardFour.classList.remove("cards4gangs");
      
      cardOne.classList.add("cards1");
      cardTwo.classList.add("cards2");
      cardThree.classList.add("cards3");
      cardFour.classList.add("cards4");
    
      bigBox.addEventListener("mouseleave", (outhover) => {
        cardOne.classList.remove("cards1");
        cardTwo.classList.remove("cards2");
        cardThree.classList.remove("cards3");
        cardFour.classList.remove("cards4");
      });
    });
  showCurrentCard();
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex += 1) % mainCards.length;
  if (currentIndex == 1) { 
    bigBox.addEventListener("mouseenter", (hover) => {
      
      
      cardOne.classList.add("cards1brzl");
      cardTwo.classList.add("cards2brzl");
      cardThree.classList.add("cards3brzl");
      cardFour.classList.add("cards4brzl");

      bigBox.addEventListener("mouseleave", (outhover) => {
        cardOne.classList.remove("cards1brzl");
        cardTwo.classList.remove("cards2brzl");
        cardThree.classList.remove("cards3brzl");
        cardFour.classList.remove("cards4brzl");
      
      });  
    })
    showCurrentCard();
  }
  elseif (currentIndex == 2); {
          bigBox.addEventListener("mouseenter", (hover) => {
            cardOne.classList.remove("cards1brzl");
            cardTwo.classList.remove("cards2brzl");
            cardThree.classList.remove("cards3brzl");
            cardFour.classList.remove("cards4brzl");
            
            cardOne.classList.remove("cards1");
            cardTwo.classList.remove("cards2");
            cardThree.classList.remove("cards3");
            cardFour.classList.remove("cards4");
            
          cardOne.classList.add("cards1gangs");
          cardTwo.classList.add("cards2gangs");
          cardThree.classList.add("cards3gangs");
          cardFour.classList.add("cards4gangs");
      
          bigBox.addEventListener("mouseleave", (outhover) => {
            cardOne.classList.remove("cards1gangs");
            cardTwo.classList.remove("cards2gangs");
            cardThree.classList.remove("cards3gangs");
            cardFour.classList.remove("cards4gangs");
          });
        });
      showCurrentCard();
    }
})

// Mostrar o primeiro card inicialmente
showCurrentCard();


// BUTTON LIKE

document.getElementById("likeCriadorButton").addEventListener("click", function() {
  // Marque o "like" no Criador
  // profileBanner("https://i.pinimg.com/564x/4e/12/6c/4e126c11e671154288dcc56ff6522331.jpg")
  likeProfile("Criador");
});

document.getElementById("likeBrazilispowerButton").addEventListener("click", function() {
  // Marque o "like" no Brazilispower
  // profileBanner("https://cdn.discordapp.com/attachments/1094667212712841306/1157758847138680944/brasi.png?ex=6519c673&is=651874f3&hm=b52d482dfbf387e4b1f4aa32279b03b239adc2764b6cd7e6dc61728320d94be0&")
  likeProfile("Brazilispower");
});

function likeProfile(profileName) {
  // Recupere a lista de perfis "liked" da localStorage (se existir)
  const likedProfiles = JSON.parse(localStorage.getItem("likedProfiles")) || [];

  // Adicione o perfil atual à lista se ainda não estiver lá
  if (!likedProfiles.includes(profileName)) {
      likedProfiles.push(profileName);
      localStorage.setItem("likedProfiles", JSON.stringify(likedProfiles));
  }
}



// DESCRIPTION MAX CHARACTERS = 136
