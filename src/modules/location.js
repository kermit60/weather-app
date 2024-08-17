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

  const getLocation = async (city) => {
    try {
      // fetching the city's information                                                                                            
      const cityFetch = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${formatDate()}?key=NZL55SGLRPM9G77WWV7GLSNPP&unitGroup=metric`)
      const cityInfo = await cityFetch.json();
      targetLocation = cityInfo
      console.log(targetLocation);
    } catch (error) {
      console.log(`The city/country ${city} doesn't exist`);
    }
  }

  const getDescription = () => `Today: ${targetLocation.days[0].description}. The high will be ${Math.round(targetLocation.days[0].tempmax)}°. The low will be ${Math.round(targetLocation.days[0].tempmin)}°`;

  const getTodaysTemp = () => {
    const city = targetLocation.resolvedAddress.split(', ')[0];
    const today = targetLocation.days[0];
    const condition = today.conditions;
    const currentTemp = `${Math.round(targetLocation.currentConditions.temp)}°`;
    const high = `H:${Math.round(today.tempmax)}°`;
    const low = `L:${Math.round(today.tempmin)}°`;

    return {
      city,
      condition,
      currentTemp,
      high,
      low
    }
  }

  const getDisplayInfo = () => {
    const array = [];
    const displayArray = targetLocation.days[0].hours;
    array.push({
      dateTime: 'Now',
      chanceOfRain: `${targetLocation.currentConditions.precipprob}%`,
      icon: targetLocation.currentConditions.icon,
      temp: `${targetLocation.currentConditions.temp}°`
    })
    displayArray.forEach(element => {
      const dateTime = element.datetime.substring(0, 5);
      const chanceOfRain = `${element.precipprob}%`;
      const icon = element.icon;
      const temp = `${element.temp}°`;
      array.push({dateTime, chanceOfRain, icon, temp});
    })
    return array;
  }

  const getAdditionalTempInfo = () => {
    const today = targetLocation.days[0];
    const sunrise = today.sunrise.substring(0, 5);
    const sunset = today.sunset.substring(0, 5);
    const chanceOfRain = `${today.precipprob}%`;
    const humidity = `${Math.round(today.humidity)}%`;
    const wind = `${today.windspeed} km/hr`;
    const feelslike =`${today.feelslike}°`;
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

  const getWeekInfo = (city) => {
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
          const temp = `${Math.round(day.tempmax)}° ${Math.round(day.tempmin)}°`;
          infoArray.push({weekDay, icon, chanceOfRain, humidity, temp});
        })
      })
      .catch(error => console.log(error));
    return infoArray;
  }

  return {
    getLocation,
    getDescription,
    getTodaysTemp,
    getAdditionalTempInfo,
    getDisplayInfo,
    getWeekInfo,
    formatDate
  }
})();

export default location;