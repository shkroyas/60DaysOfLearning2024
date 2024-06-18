// You are developing a user authentication system, and you need to manage user authentication tokens. 
// Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresInMinutes) {
    const expirationTime = new Date().getTime() + expiresInMinutes * 60 * 1000;
    const authTokenData = {
        token: token,
        expiresAt: expirationTime
    };
    localStorage.setItem('authToken', JSON.stringify(authTokenData));
}

const token = 'your-authentication-token';
const expiresInMinutes = 1; // The token should expire in 1 minute

setAuthToken(token, expiresInMinutes);

function getAuthToken() {
    const authTokenData = JSON.parse(localStorage.getItem('authToken'));
    if (!authTokenData) {
        return null;
    }
    const currentTime = new Date().getTime();
    if (currentTime > authTokenData.expiresAt) {
        localStorage.removeItem('authToken');
        return null;
    }
    return authTokenData.token;
}

const currentToken = getAuthToken();
if (currentToken) {
    console.log('Token is valid:', currentToken);
} else {
    console.log('Token has expired or does not exist');
}