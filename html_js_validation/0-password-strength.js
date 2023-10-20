function validatePassword(password) {
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numericRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    if (!lengthRegex.test(password)) {
        document.getElementById('error').textContent = 'Password must be at least 8 characters long.';
        return false;
    }

    if (!uppercaseRegex.test(password)) {
        document.getElementById('error').textContent = 'Password must contain at least one uppercase letter.';
        return false;
    }

    if (!lowercaseRegex.test(password)) {
        document.getElementById('error').textContent = 'Password must contain at least one lowercase letter.';
        return false;
    }

    if (!numericRegex.test(password)) {
        document.getElementById('error').textContent = 'Password must contain at least one numeric digit.';
        return false;
    }

    if (!specialCharRegex.test(password)) {
        document.getElementById('error').textContent = 'Password must contain at least one special character (!@#$%^&*).';
        return false;
    }

    // If all criteria are met, allow form submission
    return true;
}