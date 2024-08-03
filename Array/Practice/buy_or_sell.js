
const buy_or_sell=()=>{
    let buy_sell = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy_sell) {
            buy_sell = prices[i];
        }
        profit = Math.max(profit, prices[i] - buy_sell);
    }
    return profit;
}

let prices=[7,1,5,3,6,4];

let result=buy_or_sell(prices);

console.log(result);
