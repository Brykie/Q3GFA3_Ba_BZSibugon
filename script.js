var rng = Math.floor(Math.random() * 1000);

  var ones = rng % 10;
  var tens = Math.floor((rng % 100) / 10);
  var hundreds = Math.floor(rng / 100);
  
  var date = new Date();

  var display1 = "Randomly generated number: ".concat(rng.toString());
  var display2 = "Breakdown: ".concat((hundreds * 100).toString(), ", ", (tens*10).toString(), ", ", ones.toString());
  var display3 = "Date: " .concat(date.toString());

  document.getElementById('aydee1').innerHTML = display1;
  document.getElementById('aydee2').innerHTML = display2;
  document.getElementById('aydee3').innerHTML = display3;

  

// math.floor is to round down so it wont be like .123192 //
// alternatively, could use other methods to obtain hundreds, tens, and ones eg. num - (num%100) for the hundreds and etc. //
