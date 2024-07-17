const convertBtn = document.getElementById("convert-button");
const resultContainer = document.getElementById("result-container");

const romanConversion = (input) => {
  const romanNumeral = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let ans = "";

  for (let i = 0; i < romanNumeral.length; i++) {
    while (input >= romanNumeral[i].value) {
      ans += romanNumeral[i].numeral;
      input -= romanNumeral[i].value;
    }
  }
  return ans;
};

convertBtn.addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;

  if (inputValue !== "") {
    resultContainer.innerHTML = `<p>${romanConversion(inputValue)}</p>`;
    resultContainer.classList.add("interface");
    resultContainer.classList.remove("valid");
   

    if (inputValue > 3999) {
      resultContainer.innerHTML = `Please enter a number less than or equal to 3999`;
      resultContainer.classList.add("valid");
    }
  } else {
    resultContainer.innerHTML = `Enter valid Number`;
    resultContainer.classList.add("valid");
  }
});
