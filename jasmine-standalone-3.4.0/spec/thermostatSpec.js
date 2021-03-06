'use strict'

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();

  });

  // Thermostat starts at 20 degrees
  it('has a default temperature', function(){
    expect(thermostat._currentTemp).toEqual(20);
  });

  // The minimum temperature is 10 degrees
  it('has a minimum temperature of 10 degrees', function(){
    expect(thermostat._minTemp).toEqual(10);
  });

  // You can increase the temperature with an up function
  describe('up', function(){
    it('increases the temperature by a given amount', function(){
      thermostat.up();
      expect(thermostat._currentTemp).toEqual(21);
    });
  });

  // You can decrease the temperature with a down function
  describe('down', function(){
    it('decreases the temperature by a 1  degree amount', function(){
      thermostat.down();
      expect(thermostat._currentTemp).toEqual(19);
    });
  });

  // If power saving mode is on, the maximum temperature is 25 degrees
  describe('powerSavingMode', function(){
    //Power saving mode is on by default
    it('is on by defualt', function(){
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('can be turned off', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('can be turned back on', function() {
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });

    describe('power saving mode is on', function() {
      it('sets a max temp of 25 degrees', function(){
        thermostat.powerSavingModeOn();
        expect(thermostat._maxTemp).toEqual(25)
      });
    });
  });

  //You can reset the temperature to 20 with a reset function
  describe('reset', function(){
    it('sets the temperature to 20', function(){
    thermostat.reset();
    expect(thermostat._currentTemp).toEqual(20);
    });
  });

describe('energy usage', function() {
  describe('when the temperature is below 18', function(){
    it('is low usage', function(){
      for(var i = 0; i <= 2; i++) {
        thermostat.down();
      }
      expect(thermostat.getEnergyUsage()).toEqual("low-usage")
    });
  });
    describe('when the temperature is between 18 and 25 degrees', function(){
      it('is medium usage', function(){
        for(var i = 0; i <= 2; i++) {
          thermostat.up();
        }
        expect(thermostat.getEnergyUsage()).toEqual("medium-usage")
      });
    });

    describe('when the temperature is above 25', function(){
      it('is low usage', function(){
        thermostat.powerSavingModeOff();
        for(var i = 0; i <= 6; i++) {
          thermostat.up();
        }
        expect(thermostat.getEnergyUsage()).toEqual("high-usage")
      });
    });
  });

});
