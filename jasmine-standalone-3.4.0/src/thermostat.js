'use strict'

function Thermostat() {
  this._DEFAULT_TEMP = 20,
  this._currentTemp = 20,
  this._minTemp = 10,
  this._maxTemp = 25,
  this.powerSavingMode = true
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this._currentTemp;
};

Thermostat.prototype.up = function() {
  if (this._currentTemp < this._maxTemp) {
  this._currentTemp += 1
  };
};

Thermostat.prototype.down = function() {
  if (this._currentTemp > this._minTemp) {
    this._currentTemp -= 1
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
  this._currentTemp = this._DEFAULT_TEMP;
};
