import dom from './dom';

const location = (() => {
  let targetLocation = '';
  // yyyy-MM-ddTHH:mm:ss 2020-10-19T13:00:00
  const formatDate = () => {
    const date = new Date();
    const month = (Number(date.getMonth()) + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
  };

  const getPlace = () => targetLocation.address;

  const getLocation = async (city) => {
    try {
      // fetching the city's information                                                                                            
      const cityFetch = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${formatDate()}?key=NZL55SGLRPM9G77WWV7GLSNPP&unitGroup=metric`)
      const cityInfo = await cityFetch.json();
      targetLocation = cityInfo
      console.log('Current Location', targetLocation.resolvedAddress);
    } catch (error) {
      dom.displayErrorMessage(city);
      console.log(`The city/country ${city} doesn't exist`);
      console.log('Current location', targetLocation.resolvedAddress);
    }
  }

  const getDescription = () => `Today: ${targetLocation.days[0].description}`;

  const getTodaysTemp = (units) => {
    const city = targetLocation.resolvedAddress.split(', ')[0];
    const today = targetLocation.days[0];
    const condition = today.conditions;
    const currentTemp = `${Math.round(targetLocation.currentConditions ? (units ? targetLocation.currentConditions.temp : (targetLocation.currentConditions.temp * 9/5) + 32 )
                                                                       : (units ? targetLocation.days[0].temp : (targetLocation.days[0].temp * 9/5) + 32))}°`;
    const high = `H:${units ? Math.round(today.tempmax) : Math.round((today.tempmax * 9/5) + 32)}°`;
    const low = `L:${units ? Math.round(today.tempmin) : Math.round((today.tempmin * 9/5) + 32)}°`;

    return {
      city,
      condition,
      currentTemp,
      high,
      low
    }
  }

  const getDisplayInfo = (units) => {
    const array = [];
    const displayArray = targetLocation.days[0].hours;
    array.push({
      dateTime: 'Now',
      chanceOfRain: `${targetLocation.currentConditions ? targetLocation.currentConditions.precipprob : targetLocation.days[0].precipprob}%`,
      icon: targetLocation.currentConditions ? targetLocation.currentConditions.icon : targetLocation.days[0].icon,
      temp: `${targetLocation.currentConditions ? (units ? Math.round(targetLocation.currentConditions.temp) : Math.round((targetLocation.currentConditions.temp * 9/5) + 32)) 
                                                : (units ? Math.round(targetLocation.days[0].temp) : Math.round((targetLocation.days[0].temp * 9/5) + 32))}°`
    })
    displayArray.forEach(element => {
      const dateTime = element.datetime.substring(0, 5);
      const chanceOfRain = `${element.precipprob}%`;
      const icon = element.icon;
      const temp = `${units ? Math.round(element.temp) : Math.round((element.temp * 9/5) + 32)}°`;
      array.push({dateTime, chanceOfRain, icon, temp});
    })
    return array;
  }

  const getAdditionalTempInfo = (units) => {
    const today = targetLocation.days[0];
    const sunrise = today.sunrise.substring(0, 5);
    const sunset = today.sunset.substring(0, 5);
    const chanceOfRain = `${today.precipprob}%`;
    const humidity = `${Math.round(today.humidity)}%`;
    const wind = `${today.windspeed} km/hr`;
    const feelslike =`${units ? Math.round(today.feelslike) : Math.round((today.feelslike * 9/5) + 32)}°`;
    const precip = `${Math.round(today.precip)} mL`;
    const pressure = `${String(today.pressure).split('.')[0]} hPa`
    const visibility = `${today.visibility} km`;
    const uvIndex = today.uvindex;

    return {
      sunrise,
      sunset,
      chanceOfRain,
      humidity,
      wind,
      feelslike,
      precip,
      pressure,
      visibility,
      uvIndex
    }
  }

  const getWeekInfo = (city, units) => {
    const infoArray = [];
    const weekdays = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    }
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next8days?key=NZL55SGLRPM9G77WWV7GLSNPP&unitGroup=metric`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        response.days.splice(2).forEach(day => {
          const weekDay = weekdays[(new Date(day.datetime)).getDay()];
          const icon = day.icon;
          const chanceOfRain = `${day.precipprob}%`;
          const humidity = `${Math.round(day.humidity)}%`;
          const temp = `${units ? Math.round(day.tempmax) : Math.round((day.tempmax * 9/5) + 32)}° ${units ? Math.round(day.tempmin) : Math.round((day.tempmin * 9/5) + 32)}°`;
          infoArray.push({weekDay, icon, chanceOfRain, humidity, temp});
        })
      })
      .catch(error => {
        console.log(error);
        return;
      });
    console.log(infoArray);
    return infoArray;
  }

  return {
    getLocation,
    getDescription,
    getTodaysTemp,
    getAdditionalTempInfo,
    getDisplayInfo,
    getWeekInfo,
    formatDate,
    getPlace
  }
})();

export default location;