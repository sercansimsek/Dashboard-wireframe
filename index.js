fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature",
)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".body").style.backgroundImage =
      `url(${data.urls.regular})`;
    document.querySelector(".author").textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`;
    document.querySelector(".author").textContent = `By: Dodi Achmad`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return response.json();
  })
  .then((data) => {
    document.querySelector('.crypto').innerHTML = `
      <img src=${data.image.thumb} alt='${data.name} icon'>
      <p>${data.name}</p>
    `
  })
  .catch((err) => {
    console.error(err);
  });

