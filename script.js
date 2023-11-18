// ==UserScript==
// @name         hide_stars
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  ホロジュールでホロスタを非表示にする
// @author       hololiveファン
// @author       milk_v_note
// @match        https://schedule.hololive.tv/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    const blackList = ['花咲みやび','鏡見キラ','奏手イヅル','アルラン','律可','アステル','岸堂天真','夕刻ロベル','影山シエン','荒咬オウガ','ホロスタ','緋崎ガンマ','水無世燐央','羽継烏有','夜十神封魔','Altare','Dezmond','Syrios','Vesper','HOLOSTARS EN','Bettel','Hakka','Shinri','Flayon','Jurard','Goldbullet','Octavio','Crimzon'];

    // Official schedule
    if (location.host === "schedule.hololive.tv") {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.querySelectorAll(".name").forEach(nameE => {
                const name = nameE.innerText.trim();
                if (!blackList.every(blN => !name.includes(blN))) {
                    nameE.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                };
            });

            if (blBtn = document.evaluate("//a[contains(., 'ホロスタ')]", document, null, XPathResult.ANY_TYPE, null ).iterateNext()) {
                blBtn.parentNode.remove();
            }
            if (blBtn = document.evaluate("//a[contains(., 'HOLOSTARS')]", document, null, XPathResult.ANY_TYPE, null ).iterateNext()) {
                blBtn.parentNode.remove();
            }
        });
    }
})();
