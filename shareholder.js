function shareholder(portfolio) {
  const shareholderMap = new Map();

  for (const { name, stock } of portfolio) {
    if (!shareholderMap.has(stock)) {
      shareholderMap.set(stock, { stock, name: [name], count: 1 });
    } else {
      const stockInfo = shareholderMap.get(stock);
      stockInfo.name.push(name);
      stockInfo.count++;
    }
  }

  return Array.from(shareholderMap.values());
}

const portfolio = [
  { name: "Mark", stock: "FB" },
  { name: "Steve", stock: "AAPL" },
  { name: "Steve", stock: "AAPL" },
  { name: "Tim", stock: "AAPL" },
  { name: "Steve", stock: "MSFT" },
  { name: "Bill", stock: "MSFT" },
];

console.log(shareholder(portfolio));
