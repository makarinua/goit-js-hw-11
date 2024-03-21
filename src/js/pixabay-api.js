import doMarkUp from './render-functions.js';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

export default function requestForImgs(event) {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-hidden');
  const parameters = `key=42614843-af27c28624474ca020601ef6c&q=${event.target.elements.search.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true`;
  fetch(`https://pixabay.com/api/?${parameters}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'red',
          messageColor: 'white',
          position: 'topRight',
        });
      } else {
        doMarkUp(data);
      }
    })
    .then(() => {
      loader.classList.add('is-hidden');
      const lightbox = new SimpleLightbox('.large-image', {
        captionDelay: 250,
        captionsData: 'alt',
      });
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.show({
        message: 'Sorry, something goes wrong!',
        backgroundColor: 'red',
        messageColor: 'white',
        position: 'topCenter',
      });
    });
}