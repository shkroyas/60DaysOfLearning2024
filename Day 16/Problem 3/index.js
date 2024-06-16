// The Password Validator: You are building a password validation feature. Create a function that checks if a given
// password meets the following criteria:
// at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
            hasUppercase = true;
        } else if (charCode >= 97 && charCode <= 122) {
            hasLowercase = true;
        } else if (charCode >= 48 && charCode <= 57) {
            hasDigit = true;
        }

        // Early return if all conditions are met
        if (hasUppercase && hasLowercase && hasDigit) {
            return true;
        }
    }

    return false;
}

// Example usage
let password1 = "Password1";
let password2 = "password";
let password3 = "PASSWORD1";
let password4 = "Pass1";

console.log(password1+' : '+validatePassword(password1)); // Output: true
console.log(password2+' : '+validatePassword(password2)); // Output: false
console.log(password3+' : '+validatePassword(password3)); // Output: false
console.log(password4+' : '+validatePassword(password4)); // Output: false