function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('ageError').innerText = '';

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        isValid = false;
    }

    // Validate age
    const age = document.getElementById('age').value;
    if (age === '') {
        document.getElementById('ageError').innerText = 'Age is required';
        isValid = false;
    } else if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById('ageError').innerText = 'Invalid age';
        isValid = false;
    }

    return isValid;
}