'use strict'

function Thermostat() {
  this._DEFAULT_TEMP = 20,
  this._currentTemp = this._DEFAULT_TEMP,
  this._minTemp = 10,
  this._maxTemp = 25,
  this.powerSavingMode = true,
  this.PSM_MAX_TEMP = 25,
  this.STD_MAX_TEMP = 32
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
  this._maxTemp = this.STD_MAX_TEMP;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this._maxTemp = this.PSM_MAX_TEMP;
  this.powerSavingMode = true;
};

Thermostat.prototype.reset = function() {
  this._currentTemp = this._DEFAULT_TEMP;
};


Thermostat.prototype.getEnergyUsage = function() {
  if (this._currentTemp < 18) {
   return 'low-usage';
  }
  if (this._currentTemp >= 18 && this._currentTemp < 25 ) {
   return 'medium-usage';
  }
  return 'high-usage';
};
