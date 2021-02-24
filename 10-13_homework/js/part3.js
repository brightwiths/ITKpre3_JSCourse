// === 1 ===
function alertResult(number) {
  alert(number);
}
function getArraySum(numbers, callBack) {
  // debugger;
  var result = 0;
  for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  callBack(result);
}
// вызов: getArraySum([123,23,43,34], alertResult);

// === 2 ===
function logResult(number) {
  console.log(number);
}
// вызов: getArraySum([123,23,43,34], logResult);

// === 3 ===
// удаляльщик, должен удалить переданный ей элемент
function deleter(element) {
  element.remove();
}
// прятальщик, должен спрятать переданный ей элемент
function hider(element) {
  element.style.visibility = "hidden";
}
// показывальщик 
function shower(element) {
  element.style.visibility = "visible";
}
// обводитель в красную рамку
function border(element) {
  element.style.border = "1px solid red";
}
function getConcreteFunctionByName(name) {
  switch (name) {
    case "deleter":
      return deleter;
    case "hider":
      return hider;
    case "shower":
      return shower;
    case "border":
      return border;
  }
}
/*
Запуск:
var elements = document.getElementsByClassName("some-class");
var concretteProccessor = getConcreteFunctionByName("deleter");
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  concretteProccessor(element);
}
Но почему-то с deleter-ом накладка, удаляет только два элемента. 
*/

// ==4==
function addErrorClass(element) {    
  }
  
  function add100PercentWidthClass(element) {    
  }
  
  function clearValue(element) {    
  }

function proccessElements(elements, processors) {
  for (i = 0; i < elements.length; i++) {
    var element = elements(i);
    for (j = 0; j < processors.length; j++) {
      var processor = processors(j)
      processor(element); 
    }
  }
}