'use strict'

describe('Features', function(){
  var thermostat = new Thermostat();
// Thermostat starts at 20 degrees
  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });

  // You can increase the temperature with an up function

  describe('up', function(){
    it('increases the temperature by a given amount', function(){
      thermostat.up(5);
      expect(thermostat.temp).toEqual(25);
    });
  });

});
