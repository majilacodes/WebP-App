function t() { 
    let p = 10, q = 5;   
    let x = Number(document.getElementById("a").value); 
    let y = Number(document.getElementById("c").value); 
    let z = (x * p) + (y * q); 
    document.getElementById("r").value = "₹" + z; 
} 