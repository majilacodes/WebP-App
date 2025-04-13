let isStudent = confirm("Are you a student?"); 
if (isStudent) { 
    let regNo = prompt("Enter your registration number:"); 
    if (regNo) { 
        alert("Registration number recorded: " + regNo); 
    } else { 
        alert("No registration number entered."); 
    } 
} else { 
    alert("Access denied. This is only for students."); 
} 