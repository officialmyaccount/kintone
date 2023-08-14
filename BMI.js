const height = prompt('身長を入力してください', '');
const weight = prompt('体重を入力してください', '');

const BMI = weight / height ** 2;
console.log("BMI=" + BMI);

if (BMI < 18.5) {
    alert('やせ型です');
} else if (BMI < 25) {
    alert('標準体型です');
} else if (BMI < 30) {
    alert('太り気味です');
} else {
    alert('肥満気味です');
}
