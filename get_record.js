(() => {
    'use strict';
    kintone.events.on('app.record.detail.show', (event) => {
        const record = event.record;
        console.log('----------');
        console.log('会社名:', record.会社名.value);
        console.log('部署名:', record.部署名.value);
        console.log('担当者名:', record.担当者名.value);
    })
})();
