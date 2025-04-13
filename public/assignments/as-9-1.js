const hot = document.getElementById('hot'); 
const pleasant = document.getElementById('pleasant'); 
const cold = document.getElementById('cold'); 
const out = document.getElementById("output"); 
 
// Temperature data from New York City
const temp = [55,62,68,74,59,45,41,58,60,67,65,78,82,88,91,92,90,95,87,80,78,79,72,68,61,59,55,65];

let h = 0, p = 0, c = 0; 

// Create table data for displaying temperatures with their categories
let tableData = '';

for(let i = 0; i < temp.length; i++){ 
    if(temp[i] > 85){ 
        h++; 
        tableData += `${temp[i]} (HOT)<br>`; 
    } else if(temp[i] >= 60 && temp[i] <= 84){ 
        p++; 
        tableData += `${temp[i]} (PLEASANT)<br>`; 
    } else { 
        c++; 
        tableData += `${temp[i]} (COLD)<br>`; 
    } 
} 
 
console.log(h, p, c); 
out.innerHTML = tableData; 
hot.innerHTML = h; 
pleasant.innerHTML = p; 
cold.innerHTML = c; 