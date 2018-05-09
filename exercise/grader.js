function average(array){
    var avr = 0;
    for(var i =0; i<array.length; i++){
        avr = avr + array[i];
    }
    var result = avr/array.length;
    return result;
}

var scores = [1,2,3,4,5,6,7,8,9,10];
console.log(average(scores));