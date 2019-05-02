'use strict'

// Thermostat starts at 20 degrees

describe('Features', function(){
  var thermostat = new Thermostat();

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });
});
