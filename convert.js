var App = {
    tempConvert: function(){
    var a = document.getElementById('sel').value;
    var temF = $("#tempF").val();
    var ans;
    try{
    if(isNaN(temF)== true) throw "Not a number";
    if(temF == "") throw "Empty";
  
  
  else{
    if(a == "Celsius"){
       ans = parseFloat((temF-32)*(5/9)); 
       ans =Math.round(ans*100)/100;
       document.getElementById('tempC').value = ans;
         
       }
    if(a == "Kelvin"){
       ans = (parseInt(temF)+459.67)*(5/9);
       ans = Math.round(ans*100)/100;
       document.getElementById('tempC').value = ans;
     }
  }
  
}
catch(err){
    alert(err);
    $("#tempF").val("");
    $("#tempC").val("");
  }
  }
}


var AppTest = {
    tempConvert: function(number, string){
    var a = string;
    var temF = number;
    var ans;
    try{
    if(isNaN(temF)== true) throw "Not a number";
    if(temF == "") throw "Empty";
  
  
  else{
    if(a == "Celsius"){
       ans = parseFloat((temF-32)*(5/9)); 
       ans =Math.round(ans*100)/100;
       document.getElementById('tempC').value = ans;
         
       }
    if(a == "Kelvin"){
       ans = (parseInt(temF)+459.67)*(5/9);
       ans = Math.round(ans*100)/100;
       document.getElementById('tempC').value = ans;
     }
  }
  
}
catch(err){
    alert(err);
    $("#tempF").val("");
    $("#tempC").val("");
  }
  }
}


$(document).ready(function(){
  $("#oopIn").blur(function(){
    var oopPoints = $("#oopIn").val();
    var oopGPA;

    try{
      if(isNaN(oopPoints) == true) throw "Not a Number";
      if(oopPoints > 100) throw "Maximum points are 100";
      if(oopPoints < 0) throw "Points cannot be minus";
      if(oopPoints !=""){//== "") throw "empty";
      if(oopPoints >=90) $("#oopGrade").val("A");
      else if(oopPoints >=80) $("#oopGrade").val("B");
      else if(oopPoints >=70) $("#oopGrade").val("C");
      else $("#oopGrade").val("F");
      }
    }
  catch(err){
    alert(err);
    $("#oopIn").val("");
    $("#oopGrade").val("");
  }
  })
  $("#webIn").blur(function(){
    var webPoints = $("#webIn").val();
    try{
      if(isNaN(webPoints) == true) throw "Not a Number";
      if(webPoints > 100) throw "Maximum points are 100";
      if(webPoints < 0) throw "Points cannot be minus";
      if(webPoints != ""){// "") throw "empty";
      if(webPoints >=90)$("#webGrade").val("A");
      else if(webPoints >=80) $("#webGrade").val("B");
      else if(webPoints >=70) $("#webGrade").val("C");
      else $("#webGrade").val("F");
      }
    }
    catch(err){
    alert(err);
    $("#webIn").val("");
    $("#webGrade").val("");
  }
  })
  $("#adbIn").blur(function(){
    var adbPoints = $("#adbIn").val();
    try{
      if(isNaN(adbPoints) == true) throw "Not a Number";
      if(adbPoints > 100) throw "Maximum points are 100";
      if(adbPoints < 0) throw "Points cannot be minus";
      if(adbPoints != ""){//== "") throw "empty";
      if(adbPoints >=90) $("#adbGrade").val("A");
      else if(adbPoints >=80) $("#adbGrade").val("B");
      else if(adbPoints >=70) $("#adbGrade").val("C");
      else $("#adbGrade").val("F");
      }
    }
  catch(err){
    alert(err);
    $("#adbIn").val("");
    $("#adbGrade").val("");
  }
  })
})


function calGPA(){
  var subjectGrade=[$("#oopGrade").val(), $("#webGrade").val(), $("#adbGrade").val()];
  var subGPA = new Array();
  var gpa = 0;
  if(subjectGrade[0] != "" && subjectGrade[1] != "" && subjectGrade[2] != ""){
    for (var i = 0; i < 3; i++){
      if(subjectGrade[i] == "A")
        subGPA[i] = 4;
        else if(subjectGrade[i]=="B")
        subGPA[i] = 3;
        else if (subjectGrade[i] == "C")
        subGPA[i] = 2;
        else
        subGPA[i]=0;
    }
    for(var j = 0; j<3; j++){
      gpa += parseFloat(subGPA[j]);
    }
    gpa = (Math.round(gpa*100/3))/100;
    $("#gpa").val(gpa);
    if(gpa > 3.6){
      var congrats = $("<h3></h3>").text("Congratulations..!! You have more than 3.6 GPA");
      $("#grades").append(congrats);
    }
    else{
      var message = $("<h4></h4>").text("Your GPA for this semester is "+gpa);
      $("#grades").append(message);
    }
  }
  else{
    alert("All the subject points need to be entered to calculate the GPA!");
  }
}