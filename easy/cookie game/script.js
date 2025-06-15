let cookie = document.getElementById("cookie");
let gold = document.getElementById("golds");
let coins = document.getElementById("coins");
let BiggerFinger = document.getElementById("BiggerFinger");   // + coins . - gold
let BetterMines = document.getElementById("BetterMines");     // + gold  . - coins  
let DoubleCookies = document.getElementById("DoubleCookies"); // + coins . - gold

let countGolds = 0;
let countCoins = 0;

let GoldCountSt = 1;
let CoinCountSt = 1;

let BiggerFingerCost = 50;
let BetterMinesCost = 50;
let DoubleCookiesCost = 100;


if (cookie) {
    cookie.onclick = function() {
        countGolds += GoldCountSt;
        countCoins += CoinCountSt;
        gold.textContent = countGolds;
        coins.textContent = countCoins;
    };
}

if (BiggerFinger) {
    BiggerFinger.onclick = function() {
        if (countGolds < BiggerFingerCost) {
            alert("Not enough gold!");
        } else {
            countGolds -= BiggerFingerCost;
            BiggerFingerCost *= 2;
            CoinCountSt += 1; 
            gold.textContent = countGolds;
            BiggerFinger.textContent = "Bigger Finger " + String(BiggerFingerCost)
        }
    };
}

if (BetterMines) {
    BetterMines.onclick = function() {  
        if (countCoins < BetterMinesCost) {
            alert("Not enough coins!");
        } else {
            countCoins -= BetterMinesCost; 
            BetterMinesCost *= 2;
            GoldCountSt += 1;
            coins.textContent = countCoins;
            BetterMines.textContent = "Better Mines " + String(BetterMinesCost)
        }
    };
}

if (DoubleCookies) {
    DoubleCookies.onclick = function() {
        if (countGolds < DoubleCookiesCost) {
            alert("Not enough gold!");
        } else {
            countGolds -= DoubleCookiesCost;
            DoubleCookiesCost *= 2;
            CoinCountSt *= 2;
            gold.textContent = countGolds;
            DoubleCookies.textContent = "Double Cookies " + String(DoubleCookiesCost)
        }
    };
}
