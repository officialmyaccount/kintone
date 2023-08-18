(() => {
    'use strict';
    kintone.events.on('app.record.index.show', (event) => {
        const bgColor = 'yellow';
        const elStatus = kintone.app.getFieldElements('ステータス');
        const elUrgent = kintone.app.getFieldElements('Urgent');

        for (let i = 0; i < elStatus.length; i++) {
            const record = event.records[i];
            elStatus[i].style.backgroundColor = bgColor;

            switch (record['ステータス'].value) {
                case '未着手':
                    elStatus[i].style.color = 'red';
                    break;
                case '処理中':
                    elStatus[i].style.color = 'green';
                    break;
                default:
                    elStatus[i].style.color = 'blue';
                    break;
            }
            if (record.Urgent.value[0] === '至急') {
                elUrgent[i].style.color = 'red';
                elUrgent[i].style.fontWeight = 'bold';
            }
        }
    });
    kintone.events.on('app.record.detail.show', (event) => {
        const elUrgent = kintone.app.record.getFieldElement('Urgent');
        if (event.record.Urgent.value[0] === '至急') {
            elUrgent.style.color = 'red';
            elUrgent.style.fontWeight = 'bold';
        }
    })
})();
