function c() { 
    let g = document.getElementById("g").value; 
    let w = parseFloat(document.getElementById("w").value); 
    let h = parseFloat(document.getElementById("h").value); 
 
    if (isNaN(w) || isNaN(h) || h <= 0) { 
        alert("Invalid input."); 
        return; 
    } 
 
    let b = (703 * w) / (h * h); 
    let s = ""; 
 
    if (g === "m") { 
        if (b < 17.5) s = "Anorexia"; 
        else if (b < 20.71) s = "Underweight"; 
        else if (b < 26.40) s = "Ideal Range"; 
        else if (b < 27.30) s = "Marginally Overweight"; 
        else if (b < 31.10) s = "Overweight Range"; 
        else s = "Very Overweight or Obese"; 
    } else { 
        if (b < 17.5) s = "Anorexia"; 
        else if (b < 19.10) s = "Underweight"; 
        else if (b < 25.80) s = "Ideal Range"; 
        else if (b < 27.30) s = "Marginally Overweight"; 
        else if (b < 32.30) s = "Overweight Range"; 
        else s = "Very Overweight or Obese"; 
    } 
    alert(`BMI: ${b.toFixed(2)}\nStatus: ${s}`); 
} 