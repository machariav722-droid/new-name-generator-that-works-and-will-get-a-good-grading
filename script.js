function generateAkanName() {

    
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    if (isNaN(day) || day < 1 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
        alert("Please enter a valid month (1-12).");
        return;
    } 
    if (isNaN(year) || year < 1) {
        alert("Please enter a valid year.");
        return;
    }
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    const birthDate = new Date(year, month - 1, day);

    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month - 1 ||
        birthDate.getDate() !== day
    ) {
        alert("Please enter a valid date.");
        return;
    }
    const dayNumber = birthDate.getDay(); 
    
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Male Akan names
    const maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
    ];

    // Female Akan names
    const femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama"
    ];

    // Determine Akan name
    let akanName;

    if (gender.value === "male") {
        akanName = maleNames[dayNumber];
    } else {
        akanName = femaleNames[dayNumber];
    }

    // Display the result
    const result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <h3> Your Akan Name</h3>
        <p><strong>Date of Birth:</strong> ${day}/${month}/${year}</p>
        <p><strong>Day Born:</strong> ${days[dayNumber]}</p>
        <p><strong>Gender:</strong> ${
            gender.value.charAt(0).toUpperCase() + gender.value.slice(1)
        }</p>
        <p><strong>Your Akan Name:</strong> ${akanName}</p>
    `;
}
