
const container = document.querySelector(".container");

  function populateDiv(array) {
  for (let i = 0; i < array.length; i++) {
    const imageContainer = document.createElement("div");
    const card = document.createElement("div");
    const cardInner = document.createElement("div");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");
    const imageFront = document.createElement("img");
    const imageBack = document.createElement("img");

    imageContainer.classList.add("imageContainer");
    card.classList.add("flip-card");
    cardInner.classList.add("flip-card-inner");
    cardFront.classList.add("flip-card-front");
    cardBack.classList.add("flip-card-back");
    imageFront.classList.add("image");
    imageBack.classList.add("image");
    
  

    imageFront.src = "./images/cardback.png";
    imageBack.src = array[i];

    container.appendChild(imageContainer);
    imageContainer.appendChild(card);
    card.appendChild(cardInner);
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
}

Run();

// function ImageContainerClick() {
//   container.childNodes.forEach(element => {
//     element.addEventListener("click", () => {

//     })
//   })
// }
//ImageContainerClick();

// AddClickFunction();




/*
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

*/






// return divList;

// async function printDivList() {
//   try {
//     const divList = await fetchImage();
//     divList.forEach((div) => {
//       div.addEventListener("click", () => {
//         div.classList.add("card-back");
//         div.childNodes[0].src = "";
//       });
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// printDivList();


