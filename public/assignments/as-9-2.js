let s = Array(10).fill(0); // 0 = empty, 1 = booked

function a() {
    if (!s.includes(0)) {
        alert("All seats are booked. Next flight leaves in 3 hours.");
        return;
    }

    let n = prompt("Enter your name:");
    if (!n) {
        alert("Name cannot be empty!");
        return;
    }

    let c = parseInt(prompt("Enter 1 for First Class or 2 for Economy:"));
    if (c === 1) {
        f(n);
    } else if (c === 2) {
        e(n);
    } else {
        alert("Invalid choice. Please enter 1 or 2.");
    }
}

function f(n) { // First Class: seat 1–5 (index 0–4)
    for (let i = 0; i < 5; i++) {
        if (s[i] === 0) {
            s[i] = 1;
            p(n, i + 1, "First Class");
            return;
        }
    }

    let x = confirm("First Class is full. Would you like to be placed in Economy?");
    if (x) {
        e(n);
    } else {
        alert("Next flight leaves in 3 hours.");
    }
}

function e(n) { // Economy: seat 6–10 (index 5–9)
    for (let i = 5; i < 10; i++) {
        if (s[i] === 0) {
            s[i] = 1;
            p(n, i + 1, "Economy");
            return;
        }
    }

    let x = confirm("Economy is full. Would you like to be placed in First Class?");
    if (x) {
        f(n);
    } else {
        alert("Next flight leaves in 3 hours.");
    }
}

function p(n, sn, c) { // Print boarding pass
    let msg = `Boarding Pass:<br>Name: ${n}<br>Seat Number: ${sn}<br>Class: ${c}`;
    document.getElementById("o").innerHTML += msg + "<br><br>";
}
