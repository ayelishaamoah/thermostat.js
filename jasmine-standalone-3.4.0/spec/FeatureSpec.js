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
    expect(thermostat._minTemp).toEqual(10);
  });

  // You can increase the temperature with an up function
  describe('up', function(){
    it('increases the temperature by a given amount', function(){
      thermostat.up(5);
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  // You can decrease the temperature with a down function
  describe('down', function(){
    it('decreases the temperature by a given amount', function(){
      thermostat.down(5);
      expect(thermostat.getCurrentTemperature()).toEqual(15);
    });
  });

  // If power saving mode is on, the maximum temperature is 25 degrees
  describe('powerSavingMode', function(){
    it('sets a max temp of 25 degrees', function(){
      thermostat.powerSavingMode();
      expect(thermostat._maxTemp).toEqual(25)
    });
  });

});
