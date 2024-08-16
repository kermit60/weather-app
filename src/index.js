import './styles.css';
import location from './modules/location';

location.getLocation('vancouver');
setTimeout(() => {
  console.log(location.getDescription());
  console.log(location.getTodaysTemp());
  console.log(location.getAdditionalTempInfo());
}, 1000);
console.log('RENDERING WORKS');
console.log(new Date());