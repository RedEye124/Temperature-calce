const conversionType = document.getElementById('conversionType');
const temperatureInput = document.getElementById('temperatureInput');
const convertButton = document.getElementById('convertButton');
const resultOutput = document.getElementById('resultOutput');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);

    if (!isNaN(temperature)) {
        const selectedConversion = conversionType.value;
        let result;

        switch (selectedConversion) {
            case 'celsiusToFahrenheit':
                result = (temperature * 9/5) + 32;
                break;
            case 'fahrenheitToCelsius':
                result = (temperature - 32) * 5/9;
                break;
            // Add more cases for other temperature conversions as needed

            default:
                result = 'Invalid Conversion';
                break;
        }

        resultOutput.value = result.toFixed(2);
    } else {
        alert('Please enter a valid number for the temperature.');
    }
}
