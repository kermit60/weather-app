import dom from './dom';

const handlers = (() => {
  const searchButton = document.querySelector('#search-button');
  const input = document.querySelector('#search');
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value);
    dom.createPage(input.value);
    input.value = ''
  })

})()

export default handlers;