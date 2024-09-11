{
    // 1. Simple Percentage Discount
    // Given an item price and a discount percentage, calculate the discounted price.
    function discountPrice(price) {
      let discount = price * 0.2;
      let actuaPrice = price - discount;
      return actuaPrice;
    }
  
    const test = discountPrice(500);
    //   console.log(test);
  }
  
  {
    // 1. Simple Percentage Discount
    // Given an item price and a discount percentage, calculate the discounted price.
  
    function calculateDiscountPrice(originalPrice, discountPercentage) {
      const discountAmount = (originalPrice * discountPercentage) / 100;
      let discountPrice = originalPrice - discountAmount;
      return discountPrice;
    }
  
    const test = calculateDiscountPrice(100, 30);
    //   console.log(test);
  }
  
  {
    // 1. Simple Percentage Discount
    // Given an item price and a discount percentage, calculate the discounted price.
  
    //   2. Modular Approach (Breaking into Smaller Functions):
  
    function calculateDiscountAmount(originalPrice, discountPercentage) {
      return (originalPrice * discountPercentage) / 100;
    }
  
    function calculateDiscountPrice(originalPrice, discountPercentage) {
      let discountPrice = calculateDiscountAmount(
        originalPrice,
        discountPercentage
      );
      return originalPrice - discountPrice;
    }
  
    const test = calculateDiscountPrice(100, 40);
    //   console.log(test); // 60
  }
  
  {
    // 1. Simple Percentage Discount
    // Given an item price and a discount percentage, calculate the discounted price.
  
    //   edge case handling
  
    function calculateDiscountedPrice(originalPrice, discountPercentage) {
      if (
        originalPrice < 0 ||
        discountPercentage < 0 ||
        discountPercentage > 100
      ) {
        return "Invalid input!";
      }
  
      let discountAmount = (originalPrice * discountPercentage) / 100;
      return originalPrice - discountAmount;
    }
  }
  
  {
    // 1. Simple Percentage Discount
    // Given an item price and a discount percentage, calculate the discounted price.
  
    //   with functional programmming
  
    let prices = [100, 200, 300];
    let discountPercentage = 20;
  
    function calculateDiscountAmount(originalPrice, discountPercentage) {
      return (originalPrice * discountPercentage) / 100;
    }
  
    let discountedPrices = prices.map((price) => {
      // console.log(price);
      calculateDiscountedPrice(price, discountPercentage);
    });
    //   console.log(discountedPrices);
  }
  
  {
    // 1. Simple Percentage Discount
    // Given an item price and a discount percentage, calculate the discounted price.
  
    // with the help of OOP
    class Product {
      constructor(price) {
        this.price = price;
      }
  
      applyDiscount(discountPercentage) {
        let discountAmount = (this.price * discountPercentage) / 100;
        this.price -= discountAmount;
        return this.price;
      }
    }
  
    let product = new Product(100);
    //   console.log(product.applyDiscount(20)); // Outputs the discounted price
  }
  
  {
    // 1. Simple Percentage Discount
    // Given an item price and a discount percentage, calculate the discounted price.
    // Rounding and Precision Handling:
  
    function calculateDiscountedPrice(originalPrice, discountPercentage) {
      let discountAmount = (originalPrice * discountPercentage) / 100;
      let discountedPrice = originalPrice - discountAmount;
      return Math.round(discountedPrice * 100) / 100; // Rounds to two decimal places
    }
  }
  
  {
    // 2. Fixed Amount Discount
    // Apply a fixed discount (e.g., $10 off) to the price and calculate the final price.
  
    function fixediscount(price, fixedDiscount) {
      let finalPrice = price - fixedDiscount;
      if (finalPrice < 0) {
        return (finalPrice = 0);
      }
      return finalPrice;
    }
  
    const test = fixediscount(11, 10);
    //   console.log(test);
  }
  
  {
    // 3. Buy One, Get One Free
    // If a customer buys two items, one is free. Calculate the total cost for the customer.
    function buyOneGetOne(itemPrice1, itemPrice2) {
      let totalCost = Math.max(itemPrice1, itemPrice2);
      return totalCost;
    }
  
    const test = buyOneGetOne(100, 50);
    //   console.log(test);
  }
  
  {
    // 3. Buy One, Get One Free
    // If a customer buys two items, one is free. Calculate the total cost for the customer.
    function calculateTotalCostForBuyOneGetOne(itemPrice1, itemPrice2) {
      let totalCost;
      if (itemPrice1 > itemPrice2) {
        totalCost = itemPrice1;
      } else {
        totalCost = itemPrice2;
      }
  
      return totalCost;
    }
  
    // Example usage:
    let itemPrice1 = 50; // Price of the first item
    let itemPrice2 = 30; // Price of the second item
    let totalCost = calculateTotalCostForBuyOneGetOne(itemPrice1, itemPrice2);
  
    //   console.log("The total cost for the customer is: $" + totalCost);
  }
  
  {
    function calculateTotalCostForBuyThreeGetOne(
      itemPrice1,
      itemPrice2,
      itemPrice3,
      itemPrice4
    ) {
      // Put all item prices into an array
      let itemPrices = [itemPrice1, itemPrice2, itemPrice3, itemPrice4];
      // console.log(itemPrices);
  
      // Sort the array in descending order so the most expensive items come first
      itemPrices.sort((a, b) => b - a);
  
      // The customer pays for the three most expensive items, so sum them
      let totalCost = itemPrices[0] + itemPrices[1] + itemPrices[2];
  
      return totalCost;
    }
  
    // Example usage:
    let itemPrice1 = 50; // Price of the first item
    let itemPrice2 = 40; // Price of the second item
    let itemPrice3 = 30; // Price of the third item
    let itemPrice4 = 20; // Price of the fourth item (free)
  
    let totalCost = calculateTotalCostForBuyThreeGetOne(
      itemPrice2,
      itemPrice1,
      itemPrice3,
      itemPrice4
    );
  
    //   console.log("The total cost for the customer is: $" + totalCost);
  }
  
  {
    // 4. Tiered Discount
    // If a customer spends more than $100, apply a 10% discount. Otherwise, no discount.
  
    function tieredDiscount(price) {
      if (price > 100) {
        let discountAmount = price * 0.1;
        let discountPrice = price - discountAmount;
        return discountPrice;
      } else {
        return price;
      }
    }
  
    const test = tieredDiscount(1000);
  //   console.log(test);
  }
  
  {
    // 5. Multiple Item Discount
    // A store offers a discount if the customer buys more than 3 items. Calculate the final price with the discount applied.
  
    function calculateFinalPriceWithDiscount(itemPrices, discountPercentages) {
      let total = 0;
      for (const price of itemPrices) {
        total += price;
      }
  
      if (itemPrices.length > 3) {
        let discountAmount = (total * discountPercentages) / 100;
        total -= discountAmount;
      }
      return total;
    }
  
    const test = calculateFinalPriceWithDiscount([50, 30, 20, 10], 10);
  //   console.log(test);
    
  }