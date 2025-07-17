getFetchData();

async function getFetchData() {
  const Access_key = "zHYsht19Lpd7u-_vzln63jeGLwG_FBR0GXu4cq7nwVA";
  const response = await fetch(
    `https://api.unsplash.com/photos?page=1&client_id=${Access_key}`
  );
  const data = await response.json();
  console.log("Data: ", data);
}
