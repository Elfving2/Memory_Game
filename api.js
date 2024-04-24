async function fetchUrls() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const result = await response.json();
    console.table(result);
    return result.message;
  }