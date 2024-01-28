const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

output.style.display = "none";

const romanNumbers = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
};
const convertation = (remainder, temp) => {
  if (remainder === 0) {
    return "";
  } else {
    return romanNumbers[remainder * 10 ** temp];
  }
};

const convertToRomanNumber = (value) => {
  let result = "";
  if (value in romanNumbers) {
    result = romanNumbers[value];
  } else {
    let temp = 0;
    while (value > 0) {
      const remainder = value % 10;
      value = parseInt(value / 10);

      result = convertation(remainder, temp++) + result;
    }
  }
  return result;
};

const basicConditions = () => {
  output.style.display = "";
  if (input.value === "") {
    output.innerText = "Please enter a valid number";
    output.classList.add("wrong-answer");
  } else if (input.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.classList.add("wrong-answer");
  } else if (input.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.classList.add("wrong-answer");
  } else {
    output.classList.remove("wrong-answer");
    output.innerText = convertToRomanNumber(parseInt(input.value));
  }
};

convertBtn.addEventListener("click", basicConditions);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    basicConditions();
  }
});
