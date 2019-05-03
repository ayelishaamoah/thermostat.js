$(document).ready(function(){

  var thermostat = new Thermostat();
  getTemperature();
  getWeather("London", "UK");

  function getWeather(cityName, countryCode) {
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=metric&APPID=2709239d48bf8ec9d4849b2ff90a196a`, function(response) {
      var imgId = response.weather[0].icon;

      $('#weather-desc').text(response.weather[0].description);
      $('#local-temp').text(Math.round(response.main.temp) + ' degrees');
      $('#humidity-desc').text(response.main.humidity + '%');
      $('#wind-desc').text(response.wind.speed + ' mph');
      $('#local-weather-icon').attr('src', `https://openweathermap.org/img/w/${imgId}.png`);
      $('#city-name').text(response.name);
    });
  };

  $('#submit-location').click(function(event) {
    console.log('submit');

    var formData = $('#current-location-form').serializeArray();
    city = formData[0].value;
    countryCode = formData[1].value;

    getWeather(city, countryCode);

    $('#current-location-form')[0].reset();

  });

  $('#temperature').text(`${thermostat.getCurrentTemperature()} degrees`);

  $('#powersave-mode-title').text('Powersaving Mode On');

  function getTemperature() {
    $('#temperature').text(`${thermostat.getCurrentTemperature()} degrees`);
    $('#temperature').addClass(thermostat.getEnergyUsage())
  }

  $('#increase-temp-btn').on('click', function(){
    $('#temperature').removeClass(thermostat.getEnergyUsage())
    thermostat.up();
    getTemperature();
  });

  $('#decrease-temp-btn').on('click', function(){
    $('#temperature').removeClass(thermostat.getEnergyUsage())
    thermostat.down();
    getTemperature();
  });

  $('#reset-temp-btn').on('click', function(){
    $('#temperature').removeClass(thermostat.getEnergyUsage())
    thermostat.reset();
    getTemperature();
  });

  $('#powersave-on-btn').on('click', function(){
    console.log("clicked button");
    $('#powersave-on-btn').addClass('hidden');
    $('#powersave-off-btn').removeClass('hidden');
    $('#powersave-mode-title').text('Powersaving Mode On');
  });

  $('#powersave-off-btn').on('click', function(){
    console.log("clicked button");
    thermostat.powerSavingModeOff();
    $('#powersave-on-btn').removeClass('hidden');
    $('#powersave-off-btn').addClass('hidden');
    $('#powersave-mode-title').text('Powersaving Mode Off');
  });
});




// $.get("http://api.openweathermap.org/data/2.5/weather?id=264374&APPID=2709239d48bf8ec9d4849b2ff90a196a", function(response) { console.log(response.name) });
