function vatCalculator(exclusivePrice, taxRate) {
    inclusivePrice = exclusivePrice + (exclusivePrice * (taxRate / 100))
    return inclusivePrice
}

console.log(vatCalculator(30, 16))