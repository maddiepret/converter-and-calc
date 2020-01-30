 //this is my function that counts the number of clicks and gives you an alert with the output
 var inc = 0;

 function myFunction() {
     inc = inc + 1;
     alert(inc);
 }
 //This is my convertion calculator. i created my variables 
 var gbp, usd, eur, cad, aud;
 //I used this function to get the input values and gave them a new variable name
 function init() {
     gbp = document.getElementById("GBP");
     usd = document.getElementById("USD");
     eur = document.getElementById("EUR");
     zar = document.getElementById("CAD");

 }
 //these convertion rate are not correct, i just added random ones
 //convertion function for pound
 function gbpfunc() {
     usd.value = parseFloat(gbp.value) * 0.78;
     eur.value = parseFloat(gbp.value) * 0.86;
     zar.value = parseFloat(gbp.value) * 0.052;
 }
 //convertion function for euro
 function eurfunc() {
     gbp.value = parseFloat(eur.value) * 1.17;
     usd.value = parseFloat(eur.value) * 0.91;
     zar.value = parseFloat(eur.value) * 0.061;
 }
 //convertion function for South African Rand
 function zarfunc() {
     gbp.value = parseFloat(zar.value) * 19.21;
     usd.value = parseFloat(zar.value) * 14.96;
     eur.value = parseFloat(zar.value) * 16.46;
 }
 //convertion function for dollars
 function usdfunc() {
     gbp.value = parseFloat(usd.value) * 1.28;
     eur.value = parseFloat(usd.value) * 1.1;
     zar.value = parseFloat(usd.value) * 0.067;
 }
 init();
 //here is my function for the drop down list
 function dropDownList() {
     let optItem = 26;
     let createOpt = "<label value='0'>numbers</lable>";

     for (let i = 0; i < optItem; i++) {
         createOpt += `<label value=${i}>number ${i}</label>`;
     }
     document.getElementById('drop').innerHTML = createOpt;
 }


 //this is my function for the calculator

 function calculator() {
     "use strict";



     // Shortcut to get elements
     var el = function(element) {
         if (element.charAt(0) === "#") { // If passed an ID...
             return document.querySelector(element); // ... returns single element
         }
         return document.querySelectorAll(element); // Otherwise, returns a nodelist
     };

     // Variables
     var viewer = el("#viewer"), // Calculator screen where result is displayed
         equals = el("#equals"), // Equal button
         nums = el(".num"), // List of numbers
         ops = el(".ops"), // List of operators
         theNum = "", // Current number
         oldNum = "", // First number
         resultNum, // Result
         operator; // Batman


     function button0() {
         calculator.input.value += '0'; /*evaluating the actual value of the button to the value itself*/
     }

     function button1() {
         calculator.input.value += '1';
     }

     function button2() {
         calculator.input.value += '2';
     }

     function button3() {
         calculator.input.value += '3';
     }

     function button4() {
         calculator.Input.value += '4';
     }

     function button5() {
         calculator.input.value += '5';
     }

     function button6() {
         calculator.input.value += '6';
     }

     function button7() {
         calculator.input.value += '7';
     }

     function button8() {
         calculator.input.value += '8';
     }

     function button9() {
         calculator.input.value += '9';
     }

     function plus() {
         calculator.input.value += '+';
     }

     function minus() {
         calculator.input.value += '-';
     }

     function multiply() {
         calculator.input.value += '*';
     }

     function erase() {
         calculator.input.value = ''; /*resets the value to an empty string*/
     }

     function equals() {
         calculator.input.value = eval(calculator.input.value); /*evaluate keyword used to to take input values to perform calculation*/
     }

     function divide() {
         calculator.input.value += '/';
     }



     // When: Number is clicked. Get the current number selected
     var setNum = function() {
         if (resultNum) { // If a result was displayed, reset number
             theNum = this.getAttribute("data-num");
             resultNum = "";
         } else { // Otherwise, add digit to previous number (this is a string!)
             theNum += this.getAttribute("data-num");
         }

         viewer.innerHTML = theNum; // Display current number

     };

     // When: Operator is clicked. Pass number to oldNum and save operator
     var moveNum = function() {
         oldNum = theNum;
         theNum = "";
         operator = this.getAttribute("data-ops");

         equals.setAttribute("data-result", ""); // Reset result in attr
     };

     // When: Equals is clicked. Calculate result
     var displayNum = function() {

         // Convert string input to numbers
         oldNum = parseFloat(oldNum);
         theNum = parseFloat(theNum);

         // Perform operation
         switch (operator) {
             case "plus":
                 resultNum = oldNum + theNum;
                 break;

             case "minus":
                 resultNum = oldNum - theNum;
                 break;

             case "times":
                 resultNum = oldNum * theNum;
                 break;

             case "divided by":
                 resultNum = oldNum / theNum;
                 break;

                 // If equal is pressed without an operator, keep number and continue
             default:
                 resultNum = theNum;
         }

         // If NaN or Infinity returned
         if (!isFinite(resultNum)) {
             if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
                 resultNum = "You broke it!";
             } else { // If result is infinity, set off by dividing by zero
                 resultNum = "Look at what you've done";
                 el('#calculator').classList.add("broken"); // Break calculator
                 el('#reset').classList.add("show"); // And show reset button
             }
         }

         // Display result, finally!
         viewer.innerHTML = resultNum;
         equals.setAttribute("data-result", resultNum);

         // Now reset oldNum & keep result
         oldNum = 0;
         theNum = resultNum;

     };

     // When: Clear button is pressed. Clear everything
     var clearAll = function() {
         oldNum = "";
         theNum = "";
         viewer.innerHTML = "0";
         equals.setAttribute("data-result", resultNum);
     };

     /* The click events */
     // Add click event to numbers
     for (var i = 0, l = nums.length; i < l; i++) {
         nums[i].onclick = setNum;
     }

     // Add click event to operators
     for (var i = 0, l = ops.length; i < l; i++) {
         ops[i].onclick = moveNum;
     }

     // Add click event to equal sign
     equals.onclick = displayNum;

     // Add click event to clear button
     el("#clear").onclick = clearAll;

     // Add click event to reset button
     el("#reset").onclick = function() {
         window.location = window.location;
     };

 };