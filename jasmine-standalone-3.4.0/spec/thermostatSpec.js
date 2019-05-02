'use strict'

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees
  it('has a default temperature', function(){
    expect(thermostat.temp).toEqual(20);
  });

  // The minimum temperature is 10 degrees
  it('has a minimum temperature of 10 degrees', function(){
    expect(thermostat._minTemp).toEqual(10);
  });

  // You can increase the temperature with an up function
  describe('up', function(){
    it('increases the temperature by a given amount', function(){
      thermostat.up(5);
      expect(thermostat.temp).toEqual(25);
    });
  });

// You can decrease the temperature with a down function
    describe('down', function(){
      it('decreases the temperature by a given amount', function(){
        thermostat.down(5);
        expect(thermostat.temp).toEqual(15);
      });
    });
});
