'use strict';

{
    const rain = Math.round(Math.random());
    console.log(rain);

    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else if (rain === 0) {
        console.log('Дождя нет!');
    }
}

{
    const enteringPointsForMath = Number(prompt("Введите кол-во баллов по математике:", "85"));
    const enteringPointsForRusLang = Number(prompt("Введите кол-во баллов по русскому языку:", "75"));
    const enteringPointsForInformatics = Number(prompt("Введите кол-во баллов по информатике:", "95"));

    if (enteringPointsForMath + enteringPointsForRusLang + enteringPointsForInformatics >= 265) {
        alert("Поздравляю, вы поступили на бюджет!");
        console.log("Поздравляю, вы поступили на бюджет!");
    } else {
        alert("К сожалению, вы не прошли на бюджет.");
        console.log("К сожалению, вы не прошли на бюджет.");
    }
}

{
    const withdrawal = Number(prompt("Введите, какую сумму денег вы хотели бы снять:", "100"));

    if (withdrawal % 100 === 0) {
        console.log("Банкомат сможет выдать сумму");
    } else {
        console.log("Банкомат может выдавать купюры от 100 рублей");
    }
}