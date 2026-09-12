import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('#gallery');
const loaderEl = document.querySelector('#loader');
const loadMoreBtnEl = document.querySelector('#load-more-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Builds and appends gallery markup for the given array of images.
 * Refreshes the SimpleLightbox instance so new items become clickable.
 * @param {Array<Object>} images - Array of image objects from Pixabay API.
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>${likes}
              </p>
              <p class="info-item">
                <b>Views</b>${views}
              </p>
              <p class="info-item">
                <b>Comments</b>${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>${downloads}
              </p>
            </div>
          </a>
        </li>
      `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

/**
 * Clears all markup from the gallery container.
 */
export function clearGallery() {
  galleryEl.innerHTML = '';
}

/**
 * Shows the loading spinner.
 */
export function showLoader() {
  loaderEl.classList.add('is-visible');
}

/**
 * Hides the loading spinner.
 */
export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}

/**
 * Shows the "Load more" button.
 */
export function showLoadMoreButton() {
  loadMoreBtnEl.hidden = false;
}

/**
 * Hides the "Load more" button.
 */
export function hideLoadMoreButton() {
  loadMoreBtnEl.hidden = true;
}
