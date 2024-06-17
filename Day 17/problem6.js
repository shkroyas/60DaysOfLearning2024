// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of
//  Promises where each number is multiplied by 2 after a delay of 2000 milliseconds.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function multiplyByTwoAsync(number) {
    await delay(2000); 
    return number * 2;
  }
  
  async function asyncArrayMapping(numbers) {
    
    const promises = numbers.map(async (number) => {
      return await multiplyByTwoAsync(number);
    });
    
    
    return Promise.all(promises);
  }
  
  
  const numbers = [1, 2, 3, 4, 5];
  
  asyncArrayMapping(numbers).then(result => {
    console.log(result); 
  });