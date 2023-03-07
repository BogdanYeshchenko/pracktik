// import Gallery from "../gallery/gallery";

// const el = {
//   letterBox: document.querySelector(".search-container"),
//   gallery: document.querySelector(".gallery__wrapper"),
// };

// el.letterBox.addEventListener("click", handleClickToLetter);

// const gallery = new Gallery();
// async function handleClickToLetter(e) {
//   if (e.target.classList.value !== "search-box") {
//     return;
//   }

//   gallery.clearGallery();

//   const selectedLetter = e.target.textContent;
//   gallery.numberOfItemsPerPage();
//   const data = await gallery.getDataByLetter(selectedLetter);
//   gallery.setCurrentPage(1, data);
// }

// Якщо немає коктейлів потрібно приховати тайтл і відрендерити в галерею цей div

// const galleryTitle = document.querySelector(".gallerytitle");
galleryTitle.classList.toggle("is-hidden");

`<div class="not-found">
  <h2 class="not-foundtitle">Sorry, we didn't find any cocktail for you</h2>
  <svg class="not-found__icon">
    <use href="./images/icons.svg#icon-sorry"></use>
  </svg>
</div>`;
// Це для Богдана
