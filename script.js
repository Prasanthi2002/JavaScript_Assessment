// 📋 Output helper
function log(message) {
  document.getElementById("output").innerText += message + "\n";
}

// 🧮 1. Ask how many customers to register (simulated)
let numberOfCustomers = 3;

// 🧾 2. Dynamic array of customer names
let customers = ["Raj", "Priya", "Karthik"];
log(`Original Customers: ${customers.join(", ")}`);

// 👥 3. Display using for...of
log("\nCustomers using for...of:");
for (const name of customers) {
  log(name);
}

// 🆔 4. Display customer IDs using for...in
log("\nCustomer IDs using for...in:");
for (const id in customers) {
  log(id);
}

// ➕ 5. Add new customer using push()
customers.push("Anita");
log(`\nAfter push('Anita'): ${customers.join(", ")}`);

// ➖ 6. Remove last customer using pop()
customers.pop();
log(`\nAfter pop(): ${customers.join(", ")}`);

// 🪄 7. Insert 'Vikram' at position 1 using splice()
customers.splice(1, 0, "Vikram");
log(`\nAfter insert 'Vikram' at position 1: ${customers.join(", ")}`);

// ❌ 8. Delete customer at position 2 using splice()
customers.splice(2, 1);
log(`\nAfter delete at position 2: ${customers.join(", ")}`);

// ✅ 9. Final customer list
log(`\nFinal Customers: ${customers.join(", ")}`);