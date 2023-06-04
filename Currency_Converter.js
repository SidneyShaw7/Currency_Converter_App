// *****      SELECT ITEMS       *****
//      btns
// require('dotenv').config();

// import 'dotenv/config'
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



// rest 

const apiKey = 'clX3L1WRYiLmRCB5fFNRxqoEuAQKzuCESy3id5D0';

let latestData;
let historicalData;

// *****       EVENT LISTENERS      *****

// document.addEventListener('DOMContentLoaded', makeReq);



// *****        FUNCTIONS       *****



async function makeReq() {
    const currentDate = date();
    const newPriorDate = priorDate();
    const getLatest = new URL(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`);
    const getHistorical = new URL(`https://api.freecurrencyapi.com/v1/historical?apikey=${apiKey}&date_from=${newPriorDate}&date_to=${currentDate}`);
    const responseLatest = await fetch(getLatest);
    const responseHistorical = await fetch(getHistorical);
    latestData = await responseLatest.json();
    historicalData = await responseHistorical.json();
    console.log(latestData);
    console.log(historicalData);
    console.log(currentDate);
}

async function getCurrencyExchange() {
    const LUInput = leftUpInput.value;
    const RUInput = rightUpInput.value;
    const LDInput = leftDownInput.value;
    const RDInput = rightDownInput.value;
    let leftCurrency = historicalData.data.LUInput;
    let rightCurrency = historicalData.data.RUInput; 
}


// getting corrected dates 
function date() {
    const priorDays = 1;
    const date = new Date();
    const currentDate = date.getDate();
    date.setDate(currentDate - priorDays);
    const newDate = new Date(date.toString().split('GMT')[0]+'UTC').toISOString();
    return newDate;
}

function priorDate() {
    const priorDays = 91;
    const date = new Date();
    const currentDate = date.getDate();
    date.setDate(currentDate - priorDays);
    const newCurrentDate = date.toISOString();
    console.log(newCurrentDate);
    return newCurrentDate;
}

// function swapElements(date, index1, index2) {
//     var splitDate = date.split('/').reverse();
//     let temp = splitDate[index1];
//     splitDate[index1] = splitDate[index2];
//     splitDate[index2] = temp;
//     const currentDate = splitDate.join('-');
//     return currentDate;
// };


