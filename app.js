function checkBMI() {


var weight = document.getElementById('weight').value;
var height = document.getElementById('height').value;

console.log("weight:",weight);
console.log("height:",height);


 heightInMetre = height/100;

 var BMI = weight/(heightInMetre*heightInMetre);
 BMI = BMI.toFixed(6);
 console.log("BMI:", BMI);

 document.getElementById('wout').innerHTML = weight; + "&nbsp;Kg";
 document.getElementById('hout').innerHTML = height + "&nbsp;Cm";
 document.getElementById('BMI').innerHTML = BMI;

 if (BMI < 18.5) {
    document.getElementById('overview').innerHTML = "<div class='alert alert-primary' role='alert'> Overview: Underweight</div>";
    console.log("Overview: Underweight")
}
else if (BMI >= 18.5 && BMI <=24.9) {
     document.getElementById('overview').innerHTML = "<div class='alert alert-primary' role='alert'> Overview: Normal Weight</div>";
     console.log("Overview: Normal Weight")
}

else if (BMI >= 25 && BMI <= 29.9) {
     document.getElementById('overview').innerHTML = "<div class='alert alert-primary' role='alert'> Overview: Overweight</div>";
     console.log("Overview: Overweight")
} 
else if (BMI>= 30) {
     document.getElementById('overview').innerHTML = "<div class='alert alert-primary' role='alert'> Overview: Obesity</div>";
     console.log("Overview: Obesity")
}

}
