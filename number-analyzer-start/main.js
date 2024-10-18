// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  //document.getElementById('prime').innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

function getSign(number) {
  if (number == 0) {
    return "zero";
  } else if (number > 0) {
    return "pos";
  } else {
    return "neg";
  }
}

function evenOrOdd(number) {
  let remainder = number % 2;
  if (remainder == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function multipleOf10(number) {
  let remainder = number % 10;
  if (remainder == 0) {
    return "true";
  } else {
    return "false";
  }
}

function numDigits(number) {
  let stringOfNumber = number.toString();
  let digits = stringOfNumber.length;
  if (stringOfNumber.charAt(0) == "-") {
    digits--;
    return digits;
  } else {
    return digits;
  }
}
