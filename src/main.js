import requestForImgs from './js/pixabay-api.js';
import iziToast from 'izitoast';

const form = document.querySelector('.form');

form.addEventListener('submit', doSearch);

function doSearch(event) {
  event.preventDefault();
  if (event.target.elements.search.value === '') {
    iziToast.show({
      message: 'Запит на пошук порожній',
      backgroundColor: 'red',
      messageColor: 'white',
      position: 'topRight',
    });
  } else {
    document.querySelector('.gallery').innerHTML = '';
    requestForImgs(event);
  }
  form.reset();
}