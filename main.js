getFetchData();

async function getFetchData() {
  const Access_key = "zHYsht19Lpd7u-_vzln63jeGLwG_FBR0GXu4cq7nwVA";
  const response = await fetch(
    `https://api.unsplash.com/photos?page=1&client_id=${Access_key}`
  );
  const data = await response.json();
  console.log("Data: ", data);
  displayData(data)
  return data;
}

function displayData(data){
  let ImgSection = document.querySelector(".img-section");
  data.map((item) => {
    let ImgContainer = document.createElement('div')
    ImgContainer.classList.add('img-container')
    ImgContainer.innerHTML = `
      <img src="${item.urls.regular}" alt="">
    `
    ImgSection.appendChild(ImgContainer)
  })
}