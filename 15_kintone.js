/*
 * Luxon sample program
 * Copyright (c) 2022 Cybozu
 *
 * Licensed under the MIT License
 * https://opensource.org/licenses/mit-license.php
 */
/* global luxon */
(() => {
    'use strict';
    kintone.events.on('app.record.detail.show', (event) => {
        const record = event.record;

        const birthDayFieldCode = 'BirthDay';
        const spaceFieldCode = 'BirthDay';
        const joiningDayFieldCode = 'JoiningDate';

        /**
         * 経過年月日を計算する
         * @param {string} dateStr 日付文字列
         * @returns {object} 計算結果のオブジェクト
         */

        const calculateDuration = function(dateStr) {
            const currentDate = luxon.DateTime.local().startOf('day');
            const date = luxon.DateTime.fromISO(dateStr).startOf('day');
            //経過期間を計算する
            const duration = currentDate.diff(date, ['years', 'months', 'days']);
            return duration.toObject();
        };
        //入社からの経過年月日を表示
        const joiningDayValue = record[joiningDayFieldCode].value;
        if (joiningDayValue) {
            const joiningDayDuration = calculateDuration(joiningDayValue);
            const joiningDayElement = kintone.app.record.getFieldElement(joiningDayFieldCode);
            const $emLabel = $('<label>');
            const $emDiv = $('<span>');

            $(joiningDayElement).append($emDiv);
            $(joiningDayElement).css({
              width: $(joiningDayElement).innerWidth() + 50 + 'px',
            });

            $emDiv.append($emLabel);
            $emLabel.html('<br>');
            $emLabel.append(
                joiningDayDuration.years + '年' + joiningDayDuration.months + 'ヶ月'
            );

            $emDiv.css({
                color: 'blue',
            });
        }
        const birthDayValue = record[birthDayFieldCode].value;
        if (birthDayValue) {
            const birthDayDuration = calculateDuration(birthDayValue);
            const bitrhDayButtonElement = kintone.app.record.getSpaceElement(spaceFieldCode);
            const $emButton = $('<button>', {
                id: 'age_button',
                text: '年齢計算',
            }).on('click', () => {
                alert(birthDayDuration.years + '歳です。');
            });
            $(bitrhDayButtonElement).append($emButton);
        }
        return event;
    })
})();
