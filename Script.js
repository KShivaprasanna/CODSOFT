const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["%", "*", "/", "-", "+", "="];
let output = "";


const calculate = (btnValue) => {
    display.focus();
    if(btnValue === "=" && output !== "") {


      output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
      output ="";
    } else if (btnValue === "DEL") {


      output = output.toString().slice(0, -1);
    } else {

        //If output is empty and button is specialChars then return

        if (output === "" && specialchars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

//Add event listener to buttons, call calculator() on click.

buttons.forEach((button) => {
    //Button click listener calls calculate() with dataset value as argument.

    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
    
    


       