const container = document.querySelector(".container");

function populateDiv(array) {
  for (let i = 0; i < array.length; i++) {
    const card = document.createElement("div");
    const flipCard = document.createElement("div");
    const cardInner = document.createElement("div");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");
    const imageFront = document.createElement("img");
    const imageBack = document.createElement("img");

    card.classList.add("card");
    imageFront.classList.add("image");
    imageBack.classList.add("image");
    
  

    imageFront.src = "./images/cardback.png";
    imageBack.src = array[i];
    flipCard.classList.add("flip-card");
    cardInner.classList.add("flip-card-inner");
    cardFront.classList.add("flip-card-front");
    cardBack.classList.add("flip-card-back");
    container.appendChild(card);
    card.appendChild(flipCard);
    flipCard.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardFront.appendChild(imageFront);
    cardBack.appendChild(imageBack);  
  }
}

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {   
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

async function shuffleImages() {
  array = await fetchUrls();
  
  for (let i = 0; i < 3; i++) {
    array.push(array[i]);
  }
  return shuffle(array);
}

async function Run() {
  array = await shuffleImages();
  populateDiv(array);
  OnClickCard();
}

function OnClickCard() {
  const cards = document.querySelectorAll(".card");
  let hashMap = new Map();
  let array = [];
  cards.forEach(card => {
      card.addEventListener("click", () => {
        const flipCard = card.querySelector(".flip-card");
        const flipCardInner = flipCard.querySelector(".flip-card-inner");
        const flipCardBack = flipCardInner.querySelector(".flip-card-back");
        const image = flipCardBack.querySelector(".image");
        console.log(array);
        if (array.length != 2) { 
          flipCard.classList.add("flip-card-motion");
          flipCardInner.classList.add("flip-card-motion");
          array.push(image.src);
          hashMap.set(image.src, flipCardInner);
        }
        setTimeout(() => {
          if (array.length == 2) {
            if (array[0] == array[1]) {
              //keep them flipped? 
              console.log("CORRECT");
            } else {
              // flip cards back
              const first = hashMap.get(array[0]);
              const second = hashMap.get(array[1]);
              
              first.classList.add("flip-card-motion-back");
              second.classList.add("flip-card-motion-back");
            }
            array = [];
            console.log(array.length);
            console.log(hashMap);
        } 
        }, 1500);
      });   
  })
}

Run();


