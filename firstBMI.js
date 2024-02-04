var hheight = document.querySelector(".height-meter");
var wweight = document.querySelector(".weight-kg");
var result = document.querySelector(".Result");
var res = document.querySelector(".bmi-result");
var height , BMI , weight;
var clas = document.querySelector(".clasification");

result.addEventListener("click", () => {
    
    height = hheight.value;
    weight = wweight.value;
    BMI = weight/(height**2);
    res.innerText = BMI;
 
    if(BMI <= 18.5){
        clas.innerText = ("You are Underweight!");
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        clas.innerText = ("You are Healthy!");
    }
    else if(BMI >= 25 && BMI <= 29.9){
        clas.innerText = ("You are Overweight!");
    }
    else if(BMI >= 30){
        clas.innerText = ("You are Obese!");
    }
    else{
        clas.innerText = ("");
        res.innerText = ("");
    }
});