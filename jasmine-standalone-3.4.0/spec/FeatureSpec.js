'use strict'

describe('Features', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees
  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // The minimum temperature is 10 degrees
  it('has a minimum temperature of 10 degrees', function(){
    for(var i = 0; i <= 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  // You can increase the temperature with an up function
  describe('up', function(){
    it('increases the temperature by a given amount', function(){
      for(var i = 0; i <= 12; i++) {
        thermostat.up();
        console.log(thermostat._temp)
      }
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  // You can decrease the temperature with a down function
  describe('down', function(){
    it('decreases the temperature by a given amount', function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
  });

  describe('powerSavingMode', function(){
    //Power saving mode is on by default
    it('is on by defualt', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    // If power saving mode is on, the maximum temperature is 25 degrees
    // it('sets a max temp of 25 degrees', function(){
    //   thermostat.powerSavingMode();
    //   for(var i = 0; i <= 5; i++) {
    //     thermostat.up();
    //   }
    //   expect(thermostat.getCurrentTemperature()).toEqual(25);
    // });
  });

});
