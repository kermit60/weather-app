import './styles.css';
import location from './modules/location';
import dom from './modules/dom';

location.getLocation('markham');
setTimeout(() => {
  dom.changeDescription(location.getDescription());
  dom.changeTodaysTemp(location.getTodaysTemp());
  dom.changeAdditionalInfo(location.getAdditionalTempInfo());
  dom.createHourDisplay(location.getDisplayInfo());
  console.log(location.getWeekInfo('canada'));
}, 500);
console.log('RENDERING WORKS');
console.log(new Date());