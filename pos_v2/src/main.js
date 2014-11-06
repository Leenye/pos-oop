//TODO: Please write code in this file.

function printInventory(inputs) {

    printTime();
    console.log(formattedDateString);
}

function printTime(){
    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
   var currentDate = new Date(),
   year = dateDigitToString(currentDate.getFullYear());
   month = dateDigitToString(currentDate.getMonth() + 1),
   date = dateDigitToString(currentDate.getDate()),
   hour = dateDigitToString(currentDate.getHours()),
   minute = dateDigitToString(currentDate.getMinutes()),
   second = dateDigitToString(currentDate.getSeconds()),
   formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
   return formattedDateString;
}

var input = 'ITEM000003-2';

function isWeightedFood(input) {
    return input.indexOf('-') != -1;
}

function parseSymbol(input) {
    if (isWeightedFood(input)){
        return [input.split('-')[0],parseInt(input.split('-')[1])];
    }
}

var allPromotions = loadAllPromotions;
// function isPromotion(input){
//     var x;
//      //problem below: how to reference an array in an object
//     for(x in allPromotions[0].['ITEM000000','ITEM000001','ITEM000005']){
//          if (input == x)
//            return (1);
//     }
// }

function PurchasedItem(barcode, name ,unit ,price ,amount ){
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price;
    this.amout = amount;
}

//problem below: get the purchased item and amount.but it doesn't work
PurchasedItems.prototype.getItemAndAmount = function(input){
    if(isWeightedFood(input)){
        return (new PurchasedItem(parseSymbol(input)[0], '','',0,parseSymbol(input)[1]));
    }
    else if(PurchasedItems.hasOwnProperty.barcode != input){
        return (new PurchasedItem(input, '','',0,1));
    }
    else {
        this.amount += 1;
        return (PurchasedItem(input, '','', 0,this.amount));
    }
}
