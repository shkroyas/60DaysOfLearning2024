// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. 
// The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
    return products.filter(product => {
        for (let key in criterion) {
            if (product[key] === undefined || product[key] !== criterion[key]) {
                return false;
            }
        }
        return true;
    });
}

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 40000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 8000 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 500 },
    { id: 4, name: 'Pants', category: 'Apparel', price: 600 }
];

const criterion = { category: 'Electronics' };

const filteredProducts = filterProducts(products, criterion);
console.log(filteredProducts); 