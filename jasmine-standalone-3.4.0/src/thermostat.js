'use strict'

function Thermostat() {
  this._temp = 20,
  this._minTemp = 10,
  this._maxTemp = 32
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temp;
};

Thermostat.prototype.up = function(value) {
  this._temp += value
};

Thermostat.prototype.down = function(value) {
  this._temp -= value
};

Thermostat.prototype.powerSavingMode = function() {
  this._maxTemp = 25
};
