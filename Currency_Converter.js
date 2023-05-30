// *****      SELECT ITEMS       *****
//      btns
const lsClearBtn = document.querySelector('.left-side-clear-btn');
const rsClearBtn = document.querySelector('.right-side-clear-btn');
const lsExtendBtn = document.querySelector('.left-side-extend-btn');
const rsExtendBtn = document.querySelector('.right-side-extend-btn');
const swipeBtn = document.querySelector('.center-swipe-btn');

//      inputs
const leftUpInput = document.querySelector('.left-up-input');
const rightUpInput = document.querySelector('.right-up-input');
const leftDownInput = document.querySelector('.left-down-input');
const rightDownInput = document.querySelector('.right-down-input');

//      rest
const formControl = document.querySelector('.form-control');

const apiKey = 'clX3L1WRYiLmRCB5fFNRxqoEuAQKzuCESy3id5D0';
// *****       EVENT LISTENERS      *****

document.addEventListener('DOMContentLoaded', getDate());



// *****        FUNCTIONS       *****

// async function makeReq() {
//     const currentDate = new Date().toJSON();
//     const getLatest = new URL(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`);
//     const getHistorical = new URL(`https://api.freecurrencyapi.com/v1/historical?apikey=${apiKey}&date_from=2021-12-29&date_to=2023-05-29`);
//     const responseLatest = await fetch(getLatest);
//     const responseHistorical = await fetch(getHistorical);
//     const latestData = await responseLatest.json();
//     const historicalData = await responseHistorical.json();
//     console.log(latestData);
//     console.log(historicalData);
//     console.log(currentDate);
// }

async function getCurrencyExchange() {
    const holdingCurrency = leftUpInput.value;
    const wantedCurrency = rightUpInput.value;
    const holdingValue = leftDownInput.value;
    const wantedValue = rightDownInput.value;
}

function getDate() {
    const currentDate = new Date().toLocaleDateString();
    console.log(currentDate);
}