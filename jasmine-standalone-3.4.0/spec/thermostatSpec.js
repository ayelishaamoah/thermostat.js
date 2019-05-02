'use strict'

describe('Thermostat', function(){


  it('has a default temperature', function(){
    var thermostat = new Thermostat();
    expect(thermostat.temp).toEqual(20);
  });

  describe('up', function(){
    var thermostat = new Thermostat();
    it('increases the temperature by a given amount', function(){
      thermostat.up(5);
      expect(thermostat.temp).toEqual(25);
    });
  });
});
