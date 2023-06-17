// *****      SELECT ITEMS       *****

//      btns
const lsClearBtn = document.querySelector('.left-side-clear-btn');
const rsClearBtn = document.querySelector('.right-side-clear-btn');
const lsExtendBtn = document.querySelector('.left-side-extend-btn');
const rsExtendBtn = document.querySelector('.right-side-extend-btn');
const rateExtendBtn = document.querySelector('.rate-extend-btn');
const swipeBtn = document.querySelector('.center-swipe-btn');

//      inputs
const leftUpInput = document.querySelector('.left-up-input');
const rightUpInput = document.querySelector('.right-up-input');
const leftDownInput = document.querySelector('.left-down-input');
const rightDownInput = document.querySelector('.right-down-input');



// rest 
const optLeft = document.querySelector('.opt-left');
const optRight = document.querySelector('.opt-right');
const options = document.querySelector('.options');
const rateOptions = document.querySelector('.rate-options');
const extendRImg = document.getElementById('right-extend');
const extendLImg = document.getElementById('left-extend');
const extendBImg = document.getElementById('bottom-extend');

const apiKey = 'clX3L1WRYiLmRCB5fFNRxqoEuAQKzuCESy3id5D0';

let latestData;
let historicalData;
let extendedList = false;
// *****       EVENT LISTENERS      *****

document.addEventListener('DOMContentLoaded', makeReq);

lsExtendBtn.addEventListener('click', extendLList);
rsExtendBtn.addEventListener('click', extendRList);
rateExtendBtn.addEventListener('click', extendBList);

// *****        FUNCTIONS       *****



async function makeReq() {
    const currentDate = date();
    const newPriorDate = priorDate();
    // const getLatest = new URL(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`);
    const getHistorical = new URL(`https://api.freecurrencyapi.com/v1/historical?apikey=${apiKey}&date_from=${newPriorDate}&date_to=${currentDate}`);
    // const responseLatest = await fetch(getLatest);
    const responseHistorical = await fetch(getHistorical);
    // latestData = await responseLatest.json();
    historicalData = await responseHistorical.json();
    // console.log(latestData);
    console.log(historicalData);
    console.log(currentDate);
    
    let newDays = [];
    let newValues = [];

    const rHistorical = historicalData.data;
    let rDays= Object.keys(rHistorical);
    rDays.forEach((day) => {
       console.log(typeof day, typeof rHistorical[day].RUB);
       newDays.push(day);
       newValues.push(rHistorical[day].EUR);
    //    return rHistorical[day.RUB]
    })

    const ctx = document.getElementById('myChart');
    

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: newDays,
                datasets: [{
                    // label: '',
                    data: newValues,
                    borderWidth: 1,
                    fill: false,
                    pointStyle: false
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 10
                            }
                        }
                    }
                }
            }
        });
    }
 
    


    async function getCurrencyExchange() {
        const LUInput = leftUpInput.value;
        const RUInput = rightUpInput.value;
        const LDInput = leftDownInput.value;
        const RDInput = rightDownInput.value;
        let leftCurrency = historicalData.data.LUInput;
        let rightCurrency = historicalData.data.RUInput;
    }
    
    // chart
    
    // function defaultSet() {
    //     leftUpInput.innerHTML = 
    // }
    
    // getting corrected dates 
    function date() {
        const priorDays = 1;
        const date = new Date();
        const currentDate = date.getDate();
        date.setDate(currentDate - priorDays);
        const newDate = new Date(date.toString().split('GMT')[0] + 'UTC').toISOString();
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
    
    function rotateDate() {
        
    }
    
    // buttons 
    
    function extendLList() {
        if (!extendedList) {
            optLeft.classList.add('show-opt');
            extendLImg.style.transform = 'rotate(-180deg)';
            extendedList = true;
        } else {
            optLeft.classList.remove('show-opt');
            extendLImg.style.transform = 'rotate(0deg)';
            extendedList = false;
        }
    }
    function extendRList() {
        if (!extendedList) {
            optRight.classList.add('show-opt');
            extendRImg.style.transform = 'rotate(-180deg)';
            extendedList = true;
        } else {
            optRight.classList.remove('show-opt');
            extendRImg.style.transform = 'rotate(0deg)';
            extendedList = false;
        }
    }
    function extendBList() {
        if (!extendedList) {
            rateOptions.classList.add('show-opt');
            extendBImg.style.transform = 'rotate(-180deg)';
            extendedList = true;
        } else {
            rateOptions.classList.remove('show-opt');
            extendBImg.style.transform = 'rotate(0deg)';
            extendedList = false;
        }
    }
    
    
    // function swapElements(date, index1, index2) {
        //     var splitDate = date.split('/').reverse();
        //     let temp = splitDate[index1];
        //     splitDate[index1] = splitDate[index2];
        //     splitDate[index2] = temp;
        //     const currentDate = splitDate.join('-');
        //     return currentDate;
        // };
        
        //     anychart.onDocumentReady(function showChart() {
        //         // some code
        //         var data90 = [
        //             [historicalData.data[0], historicalData.data.RUB]
        //             [historicalData.data[1], historicalData.data.RUB]
        //             [historicalData.data[2], historicalData.data.RUB]
        //             [historicalData.data[3], historicalData.data.RUB]
        //             [historicalData.data[4], historicalData.data.RUB]
        //             [historicalData.data[5], historicalData.data.RUB]
        //             [historicalData.data[6], historicalData.data.RUB]
        //             [historicalData.data[7], historicalData.data.RUB]
        //             [historicalData.data[8], historicalData.data.RUB]
        //             [historicalData.data[9], historicalData.data.RUB]
        //             [historicalData.data[10], historicalData.data.RUB]
        //             [historicalData.data[11], historicalData.data.RUB]
        //             [historicalData.data[12], historicalData.data.RUB]
        //             [historicalData.data[13], historicalData.data.RUB]
        //             [historicalData.data[14], historicalData.data.RUB]
        //             [historicalData.data[15], historicalData.data.RUB]
        //             [historicalData.data[16], historicalData.data.RUB]
        //             [historicalData.data[17], historicalData.data.RUB]
        //             [historicalData.data[18], historicalData.data.RUB]
        //             [historicalData.data[19], historicalData.data.RUB]
        //             [historicalData.data[20], historicalData.data.RUB]
        //             [historicalData.data[21], historicalData.data.RUB]
        //             [historicalData.data[22], historicalData.data.RUB]
        //             [historicalData.data[23], historicalData.data.RUB]
        //             [historicalData.data[24], historicalData.data.RUB]
        //             [historicalData.data[25], historicalData.data.RUB]
        //             [historicalData.data[26], historicalData.data.RUB]
        //             [historicalData.data[27], historicalData.data.RUB]
        //             [historicalData.data[28], historicalData.data.RUB]
        //             [historicalData.data[29], historicalData.data.RUB]
        //             [historicalData.data[30], historicalData.data.RUB]
        //             [historicalData.data[31], historicalData.data.RUB]
        //             [historicalData.data[32], historicalData.data.RUB]
        //             [historicalData.data[33], historicalData.data.RUB]
        //             [historicalData.data[34], historicalData.data.RUB]
        //             [historicalData.data[35], historicalData.data.RUB]
        //             [historicalData.data[36], historicalData.data.RUB]
        //             [historicalData.data[37], historicalData.data.RUB]
        //             [historicalData.data[38], historicalData.data.RUB]
        //             [historicalData.data[39], historicalData.data.RUB]
        //             [historicalData.data[40], historicalData.data.RUB]
        //             [historicalData.data[41], historicalData.data.RUB]
        //             [historicalData.data[42], historicalData.data.RUB]
        //             [historicalData.data[43], historicalData.data.RUB]
        //             [historicalData.data[44], historicalData.data.RUB]
        //             [historicalData.data[45], historicalData.data.RUB]
        //             [historicalData.data[46], historicalData.data.RUB]
        //             [historicalData.data[47], historicalData.data.RUB]
        //             [historicalData.data[48], historicalData.data.RUB]
        //             [historicalData.data[49], historicalData.data.RUB]
        //             [historicalData.data[50], historicalData.data.RUB]
        //             [historicalData.data[51], historicalData.data.RUB]
        //             [historicalData.data[52], historicalData.data.RUB]
        //             [historicalData.data[53], historicalData.data.RUB]
        //             [historicalData.data[54], historicalData.data.RUB]
        //             [historicalData.data[55], historicalData.data.RUB]
        //             [historicalData.data[56], historicalData.data.RUB]
        //             [historicalData.data[57], historicalData.data.RUB]
        //             [historicalData.data[58], historicalData.data.RUB]
        //             [historicalData.data[59], historicalData.data.RUB]
        //             [historicalData.data[60], historicalData.data.RUB]
        //             [historicalData.data[61], historicalData.data.RUB]
        //             [historicalData.data[62], historicalData.data.RUB]
        //             [historicalData.data[63], historicalData.data.RUB]
        //             [historicalData.data[64], historicalData.data.RUB]
        //             [historicalData.data[65], historicalData.data.RUB]
        //             [historicalData.data[66], historicalData.data.RUB]
        //             [historicalData.data[67], historicalData.data.RUB]
        //             [historicalData.data[68], historicalData.data.RUB]
        //             [historicalData.data[69], historicalData.data.RUB]
        //             [historicalData.data[70], historicalData.data.RUB]
        //             [historicalData.data[71], historicalData.data.RUB]
        //             [historicalData.data[72], historicalData.data.RUB]
        //             [historicalData.data[73], historicalData.data.RUB]
        //             [historicalData.data[74], historicalData.data.RUB]
        //             [historicalData.data[75], historicalData.data.RUB]
        //             [historicalData.data[76], historicalData.data.RUB]
        //             [historicalData.data[77], historicalData.data.RUB]
        //             [historicalData.data[78], historicalData.data.RUB]
        //             [historicalData.data[79], historicalData.data.RUB]
        //             [historicalData.data[80], historicalData.data.RUB]
        //             [historicalData.data[81], historicalData.data.RUB]
        //             [historicalData.data[82], historicalData.data.RUB]
        //             [historicalData.data[83], historicalData.data.RUB]
        //             [historicalData.data[84], historicalData.data.RUB]
        //             [historicalData.data[85], historicalData.data.RUB]
        //             [historicalData.data[86], historicalData.data.RUB]
        //             [historicalData.data[87], historicalData.data.RUB]
        //             [historicalData.data[88], historicalData.data.RUB]
        //             [historicalData.data[89], historicalData.data.RUB]
        //         ]
        //         // create a data set
        //         var dataSet = anychart.data90.set(data90);
            
        //         // map the data for all series
        //         var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
            
        //         // create a line chart
        //         var chart = anychart.line();
            
        //         // create the series and name them
        //         var firstSeries = chart.line(firstSeriesData);
        //         firstSeries.name("RUB");
            
        //         // add a legend
        //         chart.legend().enabled(true);
            
        //         // add a title
        //         chart.title("Big Three's Grand Slam Title Race");
            
        //         // specify where to display the chart
        //         chart.container("info-graph");
            
        //         // draw the resulting chart
        //         chart.draw();
        //     });
        
        