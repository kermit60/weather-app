import './styles.css';
import location from './modules/location';
import dom from './modules/dom';
import handlers from './modules/handlers';

// location.getLocation('markham');
// setTimeout(() => {
//   dom.changeDescription(location.getDescription());
//   dom.changeTodaysTemp(location.getTodaysTemp());
//   dom.changeAdditionalInfo(location.getAdditionalTempInfo());
//   dom.createHourDisplay(location.getDisplayInfo());
// }, 500);

// const array = location.getWeekInfo('markham');
// setTimeout(() => {
//   dom.createWeekDisplay(array);
// }, 500);
dom.createPage('Canada');

console.log('RENDERING WORKS');
