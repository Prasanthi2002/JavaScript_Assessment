// 🔐 Closure-based Portfolio Tracker
function createPortfolioTracker() {
  const portfolio = []; // Private array

  function buyShare(company, quantity, pricePerShare) {
    const existing = portfolio.find(share => share.company === company);
    if (existing) {
      existing.quantity += quantity;
      existing.pricePerShare = pricePerShare; // Update price if needed
    } else {
      portfolio.push({ company, quantity, pricePerShare });
    }
    log(`Bought ${quantity} shares of ${company} at ₹${pricePerShare} each.`);
  }

  function sellShare(company, quantity) {
    const existing = portfolio.find(share => share.company === company);
    if (!existing || existing.quantity < quantity) {
      log(`Cannot sell ${quantity} shares of ${company}. Not enough shares.`);
      return;
    }
    existing.quantity -= quantity;
    log(`Sold ${quantity} shares of ${company}.`);
    if (existing.quantity === 0) {
      portfolio.splice(portfolio.indexOf(existing), 1);
    }
  }

  function totalValue() {
    const value = portfolio.reduce((sum, share) => sum + share.quantity * share.pricePerShare, 0);
    log(`Portfolio Value: ₹${value}`);
    return value;
  }

  function log(message) {
    document.getElementById("output").innerText += message + "\n";
  }

  return {
    buyShare,
    sellShare,
    totalValue
  };
}

// 🧪 Usage
const tracker = createPortfolioTracker();
tracker.buyShare("TCS", 10, 3500);       // ₹35,000
tracker.buyShare("Infosys", 5, 1500);    // ₹7,500
tracker.sellShare("TCS", 3);             // Sell 3 TCS
tracker.totalValue();                    // ₹42,500