
async function getWeather(lat,lon){
   try{
      let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da9f8e800c9ada6f617bc521fe360071&units=metric`);  
      let weather  = await data.json();
      console.log(weather);
      document.getElementById('error').style.display = 'none';
      document.getElementById('temp').innerHTML = weather.main.temp + '°C';
      document.getElementById('temp_min').innerHTML = weather.main.temp_min + '°C';
      document.getElementById('temp_max').innerHTML = weather.main.temp_max + '°C';
      document.getElementById('pressure').innerHTML = weather.main.pressure;
      document.getElementById('humidity').innerHTML = weather.main.humidity;
      document.getElementById('windspeed').innerHTML = weather.wind.speed;
      document.getElementById('deg').innerHTML = weather.wind.deg;
      document.getElementById('gust').innerHTML = weather.wind.gust;
      document.getElementById('country').innerHTML = weather.sys.country;
      document.getElementById('city').innerHTML = weather.name;
      document.getElementById('longitude').innerHTML = weather.coord.lon;
      document.getElementById('latitude').innerHTML = weather.coord.lat;
      document.getElementById('main').innerHTML = weather.weather[0].main;

   }catch(error){
      document.getElementById('content').style.display = 'none';
      document.getElementById('error').style.display = 'block';
   }
   
}



function position(position){
   getWeather(position.coords.latitude, position.coords.longitude); 
}
function errors(){
       document.getElementById('content').style.display = 'none';
      document.getElementById('error').style.display = 'block';
}

function getlocation(){
     let location =  navigator.geolocation.getCurrentPosition(position,errors);
}
getlocation();
