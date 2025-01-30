const calculate = document.getElementById("calculate_btn");


calculate.onclick = bmiCalculation;


function bmiCalculation(){
    const display = document.getElementById("bmi_display");
    const weight = document.getElementById("weight_input").value;
    const height = document.getElementById("height_input").value;
    const message = document.getElementById("message");


    if(!weight || !height){
       alert(`Missing fields / Invalid Entry`);
        return;
    }

    else {
     
    display.value = Math.round(weight / ((height / 100) * 2) * 10)/ 10;

        if(display.value < 18.5){
        message.textContent = `You are Underweight`;
        display.className = "underweight";
        message.className = "text";
        }
        else if (display.value <= 24.9){
        message.textContent = `Healthy Weight!`;
        display.className = "healthy_Weight";
        message.className = "text";
        }
        else if (display.value <= 29.9){
        message.textContent = `You are Overweight`;
        display.className = "overweight";
        message.className = "text";
        }
        else if (display.value <= 34.9){
        message.textContent = `Obesity (Class 1)`;
        display.className = "obese";
        message.className = "text";
        }
        else if (display.value <= 39.9){
        message.textContent = `Obesity (Class 2)`;
        display.className = "obese";
        message.className = "text";
        }
        else {
        message.textContent = `Obesity (Class 3)`;
        display.className = "obese";
        message.className = "text";
        }
}
}


const maleButton = document.getElementById("male_btn");
const femaleButton = document.getElementById("female_btn");

maleButton.onclick = hideFemaleSex;
femaleButton.onclick = hideMaleSex;


function hideFemaleSex(){
        femaleButton.className = `check_icon2`;
    }
function hideMaleSex(){
        maleButton.className = `check_icon1`;
    }



const reset = document.getElementById("homeKey");

reset.onclick = resetFields;

function resetFields(){
    document.getElementById("bmi_display").value = " ";
    document.getElementById("weight_input").value = " ";
    document.getElementById("height_input").value = " ";
    document.getElementById("message").textContent = `BMI`;
    document.getElementById("male_btn").className = `sex`;
    document.getElementById("female_btn").className = `sex`;
}



