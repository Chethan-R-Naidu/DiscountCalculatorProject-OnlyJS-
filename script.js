// Function to calculate the discount price of each product
function calculateDiscountedPrices(...prices) {
  console.log("The value of products is", prices);

  // Calculate the total sum before discount
  let totalSum = 0;
  prices.forEach((price) => {
    totalSum += price;
  });

  console.log("Before discount, total payable is", totalSum);

  // Calculate the discount for each product and return the after-discount price
  let discountedPrices = prices.map((price) => price - (price * 10) / 100);
  console.log("After discount, price on each product is", discountedPrices);

  // Calculate the total price after discount and return the total value
  let totalAfterDiscount = 0;
  for (const discountedPrice of discountedPrices) {
    totalAfterDiscount += discountedPrice;
  }
  return totalAfterDiscount;
}

// Function to get user input for product prices
function getUserInputForPrices() {
  // Initialize an empty array to store the prices
  let productPrices = [];

  // Prompt the user to enter the number of products and store the value
  let numberOfProducts = prompt("Enter the number of products:");

  // Loop through the number of products to get the price for each one
  for (let i = 0; i < numberOfProducts; i++) {
    // Prompt the user to enter the price for the current product
    let price = prompt(`Enter the price for product ${i + 1}:`);

    // Convert the input price to a number and add it to the productPrices array
    productPrices.push(Number(price));
  }

  // Return the array of product prices
  return productPrices;
}

// Call the getUserInputForPrices function to get the prices from the user and store them in userPrices
let userPrices = getUserInputForPrices();
let totalPayablePrice = calculateDiscountedPrices(...userPrices);
console.log("Payable price is", totalPayablePrice);
