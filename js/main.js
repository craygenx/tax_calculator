function vatCalculator(vatExclusivePrice, taxRate) {
    vatInclusivePrice = vatExclusivePrice + (vatExclusivePrice * (taxRate / 100))
    return vatInclusivePrice
}

console.log(vatCalculator(30, 10))