function calcTaxIncludePrice(price) {
    const TaxIncludePrice = price * 1.08;
    return TaxIncludePrice;
}

console.log(calcTaxIncludePrice(1000));

//三角形の面積を求める
function triangle(x, y) {
    const result = x * y / 2;
    return result;
}

console.log(triangle(3, 8));
