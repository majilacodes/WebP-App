function calculate() {
    gen = document.getElementById("gender").value;
    console.log(gen);
    weight = document.getElementById("weight").value;
    height = eval((document.getElementById("feet").value * 12) + '+' + document.getElementById("inches").value);
    console.log(weight, height);
    let bmi = (703 * weight) / (height * height)
    document.getElementById("out").value = bmi;
    let message = "";
    if (gen.toLowerCase() === "female") {
        if (bmi < 17.50) {
            message = "Anorexia";
        } else if (bmi >= 17.51 && bmi <= 19.10) {
            message = "Underweight";
        } else if (bmi >= 19.11 && bmi <= 25.80) {
            message = "Ideal range";
        } else if (bmi >= 25.81 && bmi <= 27.30) {
            message = "Marginally overweight range";
        } else if (bmi >= 27.31 && bmi <= 32.30) {
            message = "Overweight range";
        } else {
            message = "Very overweight or Obese range";
        }
    } else if (gen.toLowerCase() === "male") {
        if (bmi < 17.50) {
            message = "Anorexia";
        } else if (bmi >= 17.501 && bmi <= 20.70) {
            message = "Underweight";
        } else if (bmi >= 20.71 && bmi <= 26.40) {
            message = "Ideal range";
        } else if (bmi >= 26.41 && bmi <= 27.80) {
            message = "Marginally overweight range";
        } else if (bmi >= 27.81 && bmi <= 31.10) {
            message = "Overweight range";
        } else {
            message = "Very overweight or Obese range";
        }
    } else {
        message = "Invalid gen input";
    }
    alert(`BMI Classification: ${message}`);
}