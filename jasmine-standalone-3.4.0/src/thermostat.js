'use strict'

function Thermostat() {
  this._temp = 20,
  this._minTemp = 10,
  this._maxTemp = 32,
  this.powerSavingMode = true
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temp;
};

Thermostat.prototype.up = function() {
  if (this._temp < this._maxTemp) {
  this._temp += 1
  };
};

Thermostat.prototype.down = function() {
  if (this._temp > this._minTemp) {
    this._temp -= 1
  };
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true
};
