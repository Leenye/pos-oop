//TODO: Please write code in this file.

function printInventory(inputs) {
    printTime();
    // for(var i=0; i<inputs.length, i++){
    //     isWeightedFood(inputs[i]);
    //     parseSymbol(inputs[i]);
    // }
  // //  var purchasedItems = parsePurchasedItems(inputs);
    console.log(formattedDateString);
}

function printTime(){
    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
    var currentDate = new Date(), //why the punctuation must be the comma ?
    year = dateDigitToString(currentDate.getFullYear());
    month = dateDigitToString(currentDate.getMonth() + 1),
    date = dateDigitToString(currentDate.getDate()),
    hour = dateDigitToString(currentDate.getHours()),
    minute = dateDigitToString(currentDate.getMinutes()),
    second = dateDigitToString(currentDate.getSeconds()),
    formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return formattedDateString;
}

function isWeightedFood(input) {

     return input.indexOf('-') != -1 ;
}

function parseSymbol(input) {
    if (isWeightedFood(input)){
        return [input.split('-')[0],parseInt(input.split('-')[1])];
    }
}

//var allPromotions = loadAllPromotions;

// function isPromotion(input){
//     var x;
//      //problem below: how to reference an array in an object
//     for(x in allPromotions.['ITEM000000','ITEM000001','ITEM000005']){
//          if (input == x){
//            return (1);
//          }
//          else{
//            rerurn (0);
//          }
//     }
// }

function parsePurchasedItems(inputs){
    var purchasedItems = {};
    for (var i=0; i <inputs.length, i++){
        var barCode = inputs[i];
        var itemAmount = 1;

        if (isWeightedFood(inputs[i])) {
            barCode = parseSymbol(inputs[i]][0];
            itemAmount = parseSymbol(inputs[i]][1];
        }

        if (purchasedItems.hasOwnProperty(barcode)){
            purchasedItems[barCode] += itemAmount;
        }
        else{
            purchasedItems[barCode] = itemAmount;
        }
    }
    return purchasedItems;
}
