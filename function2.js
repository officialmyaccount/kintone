function calcBMI(height, weight) {
    const BMI = weight / height ** 2;

    if (BMI < 18.5) {
        return 'やせ型です';
    } else if (BMI < 25) {
        return '標準です';
    } else if (BMI < 30) {
        return '太り気味';
    } else {
        return '肥満です';
    }
}

function calcBMIarray(status) {
    const resultArray = [];
    for (let i = 0; i < status.length; i++) {
        const height = status[i][0];
        const weight = status[i][1];
        const shape = calcBMI(height, weight);
        resultArray.push(shape);
    }
    return resultArray;
}

const data = [
    [1.5, 40],
    [1.7, 60],
];
const resultData = calcBMIarray(data);
console.log(resultData);

const result = calcBMI(1.7, 60);
console.log(result);


function addTax(price) {
    for (let i = 0; i < price.length; i++) {
        price[i] = price[i] * 1.08;
    }
    return price;
}

const resultSecond = addTax([100, 200, 300, 400, 500]);
console.log(resultSecond);
