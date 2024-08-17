import location from './location';

const dom = (() => {
  const iconSetIdentifier = {
    snow: '13d',
    'snow-showers-day': '13d',
    'snow-showers-night': '13n',
    'thunder-rain': '11d',
    'thunder-showers-day': '11d',
    'thunder-showers-night': '11n',
    rain: '09d',
    'showers-day': '10d',
    'showers-night': '10n',
    fog: '50d',
    wind: '50d',
    cloudy: '04d',
    'partly-cloudy-day': '02d',
    'partly-cloudy-night': '02n',
    'clear-day': '01d',
    'clear-night': '01n'
  }

  const errorMessage = document.querySelector('#error-message');

  const changeTodaysTemp = (values) => {
    const city = document.querySelector('#city');
    const description = document.querySelector('#temp-description');
    const temperature = document.querySelector('#current-temp');
    const high = document.querySelector('#curr-high');
    const low = document.querySelector('#curr-low');
    city.textContent = values.city;
    description.textContent = values.condition;
    temperature.textContent = values.currentTemp;
    high.textContent = values.high;
    low.textContent = values.low;
  }

  const changeDescription = (description) => {
    const descriptionElement = document.querySelector('#description');
    descriptionElement.textContent = description;
  }

  const changeAdditionalInfo = (additionalInfo) => {
    const sunrise = document.querySelector('#sunrise');
    const sunset = document.querySelector('#sunset');
    const chanceOfRain = document.querySelector('#rain-chance');
    const humidity = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');
    const feels = document.querySelector('#feels-like');
    const precipitation = document.querySelector('#precipitation');
    const pressure = document.querySelector('#pressure');
    const visibility = document.querySelector('#visibility');
    const uv = document.querySelector('#uv-index');
    sunrise.textContent = additionalInfo.sunrise;
    sunset.textContent = additionalInfo.sunset;
    chanceOfRain.textContent = additionalInfo.chanceOfRain;
    humidity.textContent = additionalInfo.humidity;
    wind.textContent = additionalInfo.wind;
    feels.textContent = additionalInfo.feelslike;
    precipitation.textContent = additionalInfo.precip;
    pressure.textContent = additionalInfo.pressure;
    visibility.textContent = additionalInfo.visibility;
    uv.textContent = additionalInfo.uvIndex;
  }

  const createHourForecast = (info) => {
    const displayItem = document.createElement('div');
    const displayTime = document.createElement('div');
    const displayRain = document.createElement('div');
    const icon = new Image();
    const temp = document.createElement('div');

    displayItem.classList.add('display-item');
    displayTime.classList.add('display-time');
    displayRain.classList.add('display-rain');
    icon.classList.add('display-img');
    temp.classList.add('display-temp');

    displayTime.textContent = info.dateTime;
    displayRain.textContent = info.chanceOfRain;
    icon.src = `https://openweathermap.org/img/wn/${iconSetIdentifier[info.icon]}@2x.png`;
    temp.textContent = info.temp;

    displayItem.appendChild(displayTime);
    displayItem.appendChild(displayRain);
    displayItem.appendChild(icon);
    displayItem.appendChild(temp);

    return displayItem;
  }

  const createHourDisplay = (infoArray) => {
    const display = document.querySelector('#temp-display');
    display.textContent = '';
    infoArray.forEach(date => {
      display.appendChild(createHourForecast(date));
    })
  }

  const createWeekItem = (weekInfo) => {
    const weekItem = document.createElement('div');
    const weekDay = document.createElement('div');
    const imgContainer = document.createElement('div');
    const icon = new Image();
    const rainChance = document.createElement('div');
    const humidity = document.createElement('div');
    const temperature = document.createElement('div');

    weekItem.classList.add('week-temp-item');
    weekDay.classList.add('week-day');
    icon.classList.add('week-img');
    rainChance.classList.add('week-chance');
    humidity.classList.add("week-humidity");
    temperature.classList.add("week-temperature");

    // weekDay, icon, chanceOfRain, humidity, temp
    weekDay.textContent = weekInfo.weekDay;
    icon.src = `https://openweathermap.org/img/wn/${iconSetIdentifier[weekInfo.icon]}@2x.png`;
    rainChance.textContent = weekInfo.chanceOfRain;
    humidity.textContent = weekInfo.humidity;
    temperature.textContent = weekInfo.temp;

    imgContainer.appendChild(icon);
    weekItem.appendChild(weekDay);
    weekItem.appendChild(imgContainer);
    weekItem.appendChild(rainChance);
    weekItem.appendChild(humidity);
    weekItem.appendChild(temperature);
    return weekItem;
  }

  const createWeekDisplay = (weekArray) => {
    const display = document.querySelector('#week-temp-list');

    if (weekArray.length === 0) {
      return;
    }
    display.textContent = '';
    weekArray.forEach(date => {
      console.log(date);
      display.appendChild(createWeekItem(date));
    });
  }

  const createPage = (city, units) => {
    location.getLocation(city);
    const array = location.getWeekInfo(city, units);
    setTimeout(() => {
      changeDescription(location.getDescription());
      changeTodaysTemp(location.getTodaysTemp(units));
      changeAdditionalInfo(location.getAdditionalTempInfo());
      createHourDisplay(location.getDisplayInfo(units));
      createWeekDisplay(array);
    }, 500);
  }

  const displayErrorMessage = (city) => {
    errorMessage.textContent = `The location (${city}) doesn't exist`;
    setTimeout(() => {
      errorMessage.textContent = '';
    }, 3000);
  }

  // CELSIUS is true FAHRENHAIT is false
  const changeUnit = (() => { 
    let unit = true;

    const changeUnitOfMeasure = () => {
      unit = !unit;
    }

    const getUnitOfMeasure = () => unit;

    return {
      changeUnitOfMeasure,
      getUnitOfMeasure
    }
  })();

  return {
    changeTodaysTemp,
    changeDescription,
    changeAdditionalInfo,
    createHourForecast,
    createHourDisplay,
    createWeekItem,
    createWeekDisplay,
    createPage,
    displayErrorMessage,
    changeUnit
  }
})();

export default dom;