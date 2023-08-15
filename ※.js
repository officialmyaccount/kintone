let result = '';

for (let i = 1; i <= 100; i++) {
    result += '*';
}
console.log(result);

for (let i = 1; i <= 100; i++) {
    result += '*';
    if (i % 10 === 0) {
        result += '\n';
    }
}
console.log(result);

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 5; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
