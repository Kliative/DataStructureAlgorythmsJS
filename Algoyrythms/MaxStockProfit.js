function maxStockProfit(pricesArr) {
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;

    for (let i = 0; i < pricesArr.length; i++) {
        if (changeBuyPrice) {
            buyPrice = pricesArr[i];
        }
        sellPrice = pricesArr[i + 1];

        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            var tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) {
                maxProfit = tempProfit;
            }
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
console.log(maxStockProfit([10,18,4,5,6,16,12]));