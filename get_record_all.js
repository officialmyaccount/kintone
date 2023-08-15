(() => {
    'use strict';
    kintone.events.on('app.record.index.show', (event) => {
        const records = event.records;
        for (let i = 0; i < records.length; i++) {
            console.log('会社名:', records[i].会社名.value);
            console.log('部署名:', records[i].部署名.value);
            console.log('担当者名:', records[i].担当者名.value);
        }
    })
})();
