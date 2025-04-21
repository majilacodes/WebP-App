const
    temp = [55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82, 88, 91, 92, 90, 93, 87, 80
        , 78, 79, 72, 68, 61, 59, 55, 65]
const hot = document.getElementById('hot');
const pleasant = document.getElementById('pleasant');
const cold = document.getElementById('cold');
const out = document.getElementById("output");
let h = 0, p = 0, c = 0;
for (let i = 0; i < temp.length; i++) {
    if (temp[i] >= 85) {
        h++;
    }
    if (temp[i] >= 60 && temp[i] <= 84) {
        p++;
    }
    if (temp[i] < 60) {
        c++;
    }
}
console.log(h, p, c);
out.innerHTML = "Hot days: " + h + " Pleasant days: " + p + " Cold days: " + c;
hot.innerHTML = h;
pleasant.innerHTML = p;
cold.innerHTML = c;