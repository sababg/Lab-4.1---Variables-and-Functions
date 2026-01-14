//Task 1:Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.

function formatFullName(firstName, lastName) {
  if (!firstName) {
    console.log("Invalid name input");
    return;
  } else if (!lastName) {
    console.log("Invalid name input");
    return;
  } else {
    let letterFirst = firstName.charAt(0).toUpperCase();
    let letterLast = lastName.charAt(0).toUpperCase();
    let restFirst = firstName.slice(1).toLowerCase();
    let restLast = lastName.slice(1).toLowerCase();
    console.log(letterLast + restLast + ", " + letterFirst + restFirst);
  }
}
formatFullName(
  prompt("What is your First Name?"),
  prompt("What is your Last Name?")
);

// Task 2: Mathematical Operations with Multiple Parameters
function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (typeof price !== "number" || price <= 0 || Number.isNaN(price)) {
    console.log("Invalid input");
    return;
  }

  if (typeof quantity !== "number" || quantity <= 0 || Number.isNaN(quantity)) {
    console.log("Invalid input");
    return;
  }

  if (typeof taxRate !== "number" || taxRate < 0 || Number.isNaN(taxRate)) {
    console.log("Invalid input");
    return;
  }

  let totalCost = price * quantity * (1 + taxRate);
  console.log(totalCost);
}
calculateTotalCost(
  Number(prompt("What is the price?")),
  Number(prompt("What quantity are you purchasing?")),
  Number(prompt("What is the tax rate in your area?"))
);

//Task 3: Functions with Conditional Logic

function checkEligibility(age, isEmployed) {
  if (age > 18) {
    if (isEmployed) {
      return "You are eligible for the program. ";
    } else {
      return "You are conditionally eligible for the program.";
    }
  } else {
    return "You are not eligible for the program. ";
  }
}
console.log(checkEligibility(25, true));
console.log(checkEligibility(31, false));
console.log(checkEligibility(18, false));

//Task 4: Refactoring for Reusability
function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  console.log(price, quantity, taxRate, discount);

  if (typeof price !== "number" || price <= 0 || Number.isNaN(price)) {
    console.log("Invalid input");
    return;
  }

  if (typeof quantity !== "number" || quantity <= 0 || Number.isNaN(quantity)) {
    console.log("Invalid input");
    return;
  }

  if (typeof taxRate !== "number" || taxRate < 0 || Number.isNaN(taxRate)) {
    console.log("Invalid input");
    return;
  }

  if (typeof discount !== "number" || discount < 0 || Number.isNaN(discount)) {
    console.log("Invalid input");
    return;
  }

  let subtotal = price * quantity - discount;
  let subtotalAfterDiscount = subtotal - discount;

  if (subtotalAfterDiscount < 0) {
    console.log("Invalid input");
    return;
  }

  let totalCost = subtotalAfterDiscount * (1 + taxRate);
  console.log("totalCost", totalCost);
}

calculateTotalCost(
  Number(prompt("What is the price?")),
  Number(prompt("What quantity are you purchasing?")),
  Number(prompt("What is the tax rate in your area?  (e.g., 0.08 for 8%)"))
);

calculateTotalCost(
  Number(prompt("What is the price?")),
  Number(prompt("What quantity are you purchasing?")),
  Number(prompt("What is the tax rate in your area? (e.g., 0.08 for 8%)")),
  Number(prompt("What is the discount amount? (leave blank for none)")) || 0
);
