function validateInput(phone, email) {
    const phonePattern = /^\d{10}$/; // Exactly 10 digits
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    const isPhoneValid = phonePattern.test(phone);
    const isEmailValid = emailPattern.test(email);

    return {
        phoneValid: isPhoneValid,
        emailValid: isEmailValid
    };
}

const {email, phone}=validateInput(2222222222, "hi@hello.com");
console.log(validateInput(2222222222, "hihello.com").emailValid);
console.log(validateInput(222222222, "hihello.com").phoneValid);

