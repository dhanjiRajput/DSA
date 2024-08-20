
const buy_or_sell=(prices)=>{
    let buy = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        }
        
        let temp=prices[i]-buy;

        profit = Math.max(profit, temp);
    }
    return profit;
}

let prices=[7,1,5,3,6,4];

console.log(buy_or_sell(prices));