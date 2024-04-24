const container = document.querySelector(".container");

async function fetchUrls() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/9");
  const result = await response.json();
  console.table(result);
  return result.message;
}

async function populateDiv() {
  const urlList = await fetchUrls();

  urlList.forEach(element => {
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = element;
    imageContainer.classList.add("imageContainer");
    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
  });
}

function ImageContainerClick() {
  container.childNodes.forEach(element => {
    element.addEventListener("click", () => {
      element.classList.add("card-back");
      element.childNodes[0].src = "";
    })
  })
}

async function AddClickFunction() {
  await populateDiv();
  ImageContainerClick();
}

AddClickFunction();









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


