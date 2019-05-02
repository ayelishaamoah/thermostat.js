'use strict'

describe('Thermostat', function(){

  var thermostat = new Thermostat();
  it('has a default temperature', function(){
    expect(thermostat.temp).toEqual(20);
  });
});
