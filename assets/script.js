const celToFarInput = document.getElementById('celToFarInput');
const celToFarOutput = document.getElementById('celToFarOutput');

const celToKelInput = document.getElementById('celToKelInput');
const celToKelOutput = document.getElementById('celToKelOutput');

const farToCelInput = document.getElementById('farToCelInput');
const farToCelOutput = document.getElementById('farToCelOutput');

const farToKelInput = document.getElementById('farToKelInput');
const farToKelOutput = document.getElementById('farToKelOutput');

const kelToFarInput = document.getElementById('kelToFarInput');
const kelToFarOutput = document.getElementById('kelToFarOutput');

const kelToCelInput = document.getElementById('kelToCelInput');
const kelToCelOutput = document.getElementById('kelToCelOutput');

const resetFields = document.getElementById('reset')


// From Celsius to Fahrenheit
function celToFar(){
    let output = (parseFloat(celToFarInput.value) * 9/5) + 32;
    celToFarOutput.value = parseFloat(output.toFixed(2));

}

// From Celsius to Kelvin
function celToKel(){
    let output = parseFloat(celToKelInput.value) + 273.15;
    celToKelOutput.value = output;
}

// From fahrenheit to Celsius
function farToCel(){
    let output = (parseFloat(farToCelInput.value - 32)) * 5/9;
    farToCelOutput.value = parseFloat(output.toFixed(2));
}

// From Fahrenheit to Kelvin
function farToKel(){
    let output = (parseFloat(farToKelInput.value - 32) * 5/9) + 273.15;
    farToKelOutput.value = parseFloat(output.toFixed(2));
}

// From Kelvin to Fahrenheit
function kelToFar(){
    let output = parseFloat((kelToFarInput.value - 273.15) * 9/5)+ 32;
    kelToFarOutput.value = output.toFixed(2);
}

// From Kelvin to Celsius
function kelToCel(){
    let output = kelToCelInput.value - 273.15;
    kelToCelOutput.value = parseFloat(output.toFixed(2));

}


// function celsiusToFahrenheit(){
//     let output = (parseFloat(celsius.value) * 9/5) + 32;
//     fahrenheit.value = parseFloat(output.toFixed(2));
// }

// function celsiusToKelvin(){
//     let output = parseFloat(celsius.value + 273.15)
//     kelvin.value = parseFloat(output.toFixed(2))
// }

// function fahrenheitToCelsius(){
//     let output = (parseFloat(fahrenheit.value - 32)) * 5/9;
//     celsius.value = parseFloat(output.toFixed(2));
// }

// function fahrenheitToKelvin(){
//     let output = (parseFloat(farToKelInput.value - 32) * 5/9) + 273.15;
//     farToKelOutput.value = parseFloat(output.toFixed(2))
// }

// function kelvinToFahrenheit(){
//     let output = (parseFloat(kelvin.value - 273.15) * (9/5) + 32)
//     fahrenheit.value = parseFloat(output.toFixed(2))
// }

// function kelvinToCelsius(){
//     let output = parseFloat(kelvin.value - 273.15)
//     celsius.value = output.toFixed(2)
// }










