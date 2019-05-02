'use strict'

function Thermostat() {
  this.temp = 20
};

Thermostat.prototype.up = function(value) {
  this.temp += value
}

Thermostat.prototype.down = function(value) {
  this.temp -= value
}
