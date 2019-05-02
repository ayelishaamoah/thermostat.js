'use strict'

function Thermostat() {
  this._DEFAULT_TEMP = 20,
  this._temp = 20,
  this._minTemp = 10,
  this._maxTemp = 25,
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

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false
  this._maxTemp = 32
};

Thermostat.prototype.powerSavingModeOn = function() {
  this._maxTemp = 25
  this.powerSavingMode = true
};

Thermostat.prototype.reset = function() {
  this._temp = this._DEFAULT_TEMP;
};
