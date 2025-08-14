// 📚 1. Create JSON array of books
let books = [
  { title: "JavaScript Basics", author: "Anu", price: 450, available: true },
  { title: "HTML & CSS", author: "Devi", price: 350, available: false }
];

// 📋 Output helper
function log(message) {
  document.getElementById("output").innerText += message + "\n";
}

// 📖 2. Display all books
log("All Books:");
for (const book of books) {
  log(`Title: ${book.title}, Author: ${book.author}, Price: ${book.price}, Available: ${book.available} ₹`);
}

// ✅ 3. Display only available books
log("\nAvailable Books:");
for (const book of books) {
  if (book.available) {
    log(`Title: ${book.title}, Author: ${book.author}, Price: ${book.price} ₹`);
  }
}

// ➕ 4. Add a new book
books.push({ title: "Node.js Guide", author: "Kiran", price: 600, available: true });
log("\nAfter Adding:");
log(books.map(b => b.title).join(", "));

// 💰 5. Update price of a specific book
const jsBook = books.find(b => b.title === "JavaScript Basics");
if (jsBook) {
  jsBook.price = 500;
}
log("\nAfter Price Update:");
log(`${jsBook.title} - ${jsBook.price} ₹`);

// ❌ 6. Delete a book (remove "HTML & CSS")
books = books.filter(b => b.title !== "HTML & CSS");
log("\nAfter Deletion:");
log(books.map(b => b.title).join(", "));