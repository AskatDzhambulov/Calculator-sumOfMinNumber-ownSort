
// Calculator

function calculator(firstNumber,oper ,secondNumber){
  var firstNumber,secondNumber;
  var result;
  if (oper == '/' && secondNumber == 0){
    result = 'error';
  }else if (oper == '/'){
    result = firstNumber / secondNumber;
  }else if (oper == '+' ){
    result = firstNumber + secondNumber;
  }else if (oper == '-'){
    result = firstNumber - secondNumber;
  
  }else if(oper == '*'){
    result = firstNumber * secondNumber;
  }else {
    result = 'FALSE';
  }
  return result;
}
// Firstly write a first number, after give operator , then write a second number
 var answer = calculator(12,'*',13);
 console.log(answer);

console.log('-----------------------------------');

// Sum of two minimum numbers

function sumMinNumbers(arrayOfNumbers){
  var arrayOfNumbers = array[0] + array[1];
  return arrayOfNumbers;
}
var array = [1,2,5,7,13,1214,25125,44].sort(function arraySort(a,b){
  return a-b;
});
console.log(array); // Sorted Array
console.log('Sum of two minimum numbers is equal to : ' + sumMinNumbers(array));


console.log('-----------------------------------');


// Sort without method (.sort())

function mySort(arrayS){
  var result = [];
  var i;
  var j;
  for (var i = 0; i < arrayS.length; i++) {
    if (i === 0) {
      result.push(arrayS[i]);
    }else if (arrayS[i] > result[i-1]){
      result.push(arrayS[i]);
    }else {
      for(var j = 0; j < result.length;j++){
        if (arrayS[i] > result[j] && arrayS[i] < result[j+1]){
        result.splice(j+1,0,arrayS[i]);
        }else if (arrayS[i] > result[j] && arrayS[i] === result[j+1]){
          result.splice(j+1,0,arrayS[i]);
        }
      }
    }
  }
  return result;
}
var arrayNumbers = [1,2,5,1231,444,456,444,555,123123]; 
console.log(mySort(arrayNumbers)); // Sorted Array