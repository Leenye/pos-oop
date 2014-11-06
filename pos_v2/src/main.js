//TODO: Please write code in this file.

function printInventory(inputs) {

    for(var i=0; i < inputs.length; i++) {
        console.log(isPromotion(inputs[i]));

    }
}

function isWeightedFood(input) {
    return input.indexOf('-') != -1;
}

function parseSymbol(input) {
    if (isWeightedFood(input)){
        return [input.split('-')[0],parseInt(input.split('-')[1])];
    }
}

var allPromotions = loadAllPromotions;

function isPromotion(input){
    var x;
    //problem below: how to reference an array in an object
    for(x in allPromotions[0].['ITEM000000','ITEM000001','ITEM000005']){
        if (input == x)
          return (1);
    }
}

function PurcasedItem(barcode, name ,unit ,price ,amount ){
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price;
    this.amout = amount;
}
