import './styles.css';
import location from './modules/location';

location.getLocation('vancouver');
setTimeout(() => {
  console.log(location.getDescription());
  console.log(location.getTodaysTemp());
  console.log(location.getAdditionalTempInfo());
  console.log(location.getDisplayInfo());
  console.log(location.getWeekInfo('vancouver'));
}, 500);
console.log('RENDERING WORKS');
console.log(new Date());