let fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let employees = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i = 0; i < 5; i++) {
    console.log((i+1) + '番目の記号:' + employees[i]);
}

for (let i = 0; i < employees.length; i++) {
    console.log((i+1) + '番目の社員:' + employees[i]);
}