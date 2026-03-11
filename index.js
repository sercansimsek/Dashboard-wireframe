fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature",
)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".body").style.backgroundImage =
      `url(${data.urls.regular})`;
    document.querySelector('.author').textContent = `By: ${data.user.name}`
  });
