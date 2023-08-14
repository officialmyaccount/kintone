const result = confirm('確認ボックスの表示');
console.log(result);

if (result) {
    console.log('はいが押されました');
} else {
    console.log('いいえが押されました');
}