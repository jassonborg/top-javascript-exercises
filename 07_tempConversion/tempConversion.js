const convertToCelsius = function(Celsius) {
  const convertC = (Celsius - 32) * 5 / 9;
  const roundUp = Math.round(convertC * 10) / 10;
  return roundUp;
};

const convertToFahrenheit = function(Fahrenheit) {
  const convertF = (Fahrenheit * 9 / 5) + 32;
  const roundUp = Math.round(convertF * 10) / 10;
  return roundUp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
