import './styles.css';
import location from './modules/location';
import dom from './modules/dom';

location.getLocation('markham');
setTimeout(() => {
  dom.changeDescription(location.getDescription());
  dom.changeTodaysTemp(location.getTodaysTemp());
  dom.changeAdditionalInfo(location.getAdditionalTempInfo());
  dom.createHourDisplay(location.getDisplayInfo());
  dom.createWeekDisplay(location.getWeekInfo('markham'));
}, 500);

const array = location.getWeekInfo('markham');
setTimeout(() => {
  dom.createWeekDisplay(array);
}, 500);

console.log('RENDERING WORKS');
