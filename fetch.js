const container = document.querySelector(".container");

async function fetchImage() {
  var divList = [];
  const response = await fetch("https://dog.ceo/api/breeds/image/random/9");
  var result = await response.json();

  for (var i = 0; i < 9; i++) {
    var imageContainer = document.createElement("div");
    var image = document.createElement("img");
    image.classList.add("image");
    image.src = result.message[i];
    imageContainer.classList.add("imageContainer");
    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
    divList.push(imageContainer);
  }
  return divList;
}

async function printDivList() {
  try {
    const divList = await fetchImage();
    divList.forEach((div) => {
      div.addEventListener("click", () => {
        div.classList.add("card-back");
        div.childNodes[0].src = "";
      });
    });
  } catch (error) {
    console.error(error);
  }
}

printDivList();


