function checkPayLine(symbols) {
  // Define the paying symbols and their payouts
  const payingSymbols = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const payouts = {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
    7: 70,
    8: 80,
    9: 90,
  };
  
  // Check for a pay line using the wild symbol
  if (symbols.includes(0)) {
    const payingSymbol = symbols.filter(symbol => payingSymbols.includes(symbol))[0];
    const payout = payouts[payingSymbol];
    return [payingSymbol, Array.from({ length: symbols.length }, (_, i) => i).filter(i => symbols[i] === payingSymbol)];
  }
  
  // Check for a pay line using only paying symbols
  for (const symbol of payingSymbols) {
    const positions = Array.from({ length: symbols.length }, (_, i) => i).filter(i => symbols[i] === symbol);
    if (positions.length >= 3) {
      const payout = payouts[symbol];
      return [symbol, positions];
    }
  }
  
  // No pay line found
  return null;
}

