// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called 
// placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation 
// message after a random delay.

function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function placeOrder(order) {
    const delayTime = randomDelay(1000, 5000); 
    await delay(delayTime); 
    return `Order for ${order} has been placed successfully!`;
  }
  
  placeOrder('Laptop').then(confirmationMessage => {
    console.log(confirmationMessage); });