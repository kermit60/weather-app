import dom from './dom';
import location from './location';

const handlers = (() => {
  const searchButton = document.querySelector('#search-button');
  const input = document.querySelector('#search');
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value);
    dom.createPage(input.value, dom.changeUnit.getUnitOfMeasure());
    input.value = ''
  })

  const toggle = document.querySelector('#temp-toggle');
  const celsius = document.querySelector('#celsius');
  const fahr = document.querySelector('#fahrenheit');
  toggle.addEventListener('click', () =>{
    dom.changeUnit.changeUnitOfMeasure();
    celsius.classList.remove('selected');
    fahr.classList.remove('selected');
    const unit = dom.changeUnit.getUnitOfMeasure();
    if (unit) {
      celsius.classList.add('selected')
    } else {
      fahr.classList.add('selected');
    }

    console.log(dom.changeUnit.getUnitOfMeasure());
    dom.createPage(location.getPlace(), unit);
  })

})()

export default handlers;