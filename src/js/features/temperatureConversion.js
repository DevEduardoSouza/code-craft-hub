const celsiusToFahrenheit = (celsius) => {
  celsius = validateTemperature(celsius);

  return {
    celsius: `${celsius}°c`,
    fahrenheit: `${(1.8 * celsius + 32).toFixed(2)}°f`,
  };
};

const fahrenheitToCelsius = (fahrenheit) => {
  fahrenheit = validateTemperature(fahrenheit);

  return {
    fahrenheit: `${fahrenheit}°f`,
    celsius: `${((fahrenheit - 32) / 1.8).toFixed(2)}°c`,
  };
};

const validateTemperature = (temperature) => {
  temperature = Number(temperature);

  if (!temperature || typeof temperature !== "number") {
    throw new Error({ message: "Invalid temperature value" });
  }

  return temperature;
};

export { celsiusToFahrenheit, fahrenheitToCelsius };
