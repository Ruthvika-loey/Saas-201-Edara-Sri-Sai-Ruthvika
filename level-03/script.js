
(function() {
  var initialize = function() {
    
    var button = document.querySelector(".button");
    console.log(button);
    button.addEventListener("click", onSubmit);
    var department1 = document.querySelector("#department1");
    console.log(department1);
    department1.addEventListener('change', disableDuplicateSecondaryDepartment)

  };
  
  var details =function()
  {	var arr=["ECE","CIVIL","MECH"];
    var username =document.querySelector("#username")
    var phonenumber=document.querySelector("#phonenumber");
    var Email=document.querySelector("#Email");
    var department1 = document.querySelector("#department1");
    var department2 = document.querySelector("#department2");
		department2.value="CSE";
	if(department1.value==="CSE")
		department2.value=arr[Math.floor(Math.random()*2)];
    return [username, phonenumber, Email, department1, department2];
  };
  
   //Disabling option in SecondaryDepartment..
  var disableDuplicateSecondaryDepartment = function() {
  
    var department1 = document.querySelector("#department1");
    var department2 = document.querySelector("#department2");
    var deptSelected=department1.options[department1.selectedIndex].value;
   
    for(var i=0;i<4;i++)
    {
      if(department2.options[i].disabled = true)
      {
        department2.options[i].disabled=false;
      }
    }
    department2.options[department1.selectedIndex].disabled=true;
    department2.selectedIndex=department1.selectedIndex+1;
    if(department1.selectedIndex === 3)
    {department2.selectedIndex=2;}
    console.log(department2.selectedIndex);
    

  }
  //Constructing Data Entered..............
  var constructData= function() {
    var data = {};
    var Details=details();
   
    data.name=Details[0].value;
    
    data.phno=Details[1].value;
    data.emailaddress=Details[2].value;
    data.department1=Details[3].value;
    data.department2=Details[4].value;

    console.log(Details[4].value);

    return data;
  };


  //validate Name
  var validateName = function(name)
  {
    if(name.length > 100)
      {return false;}
      return true;
  };


  //Validate Phonenumber
   var validatePhone = function(phone)
  {  if(phone.length > 10)
        return false;
      else
      return true;
  };

 
  //Validate Email
  var validateEmail = function(email)
  {//Validating using Regularexpressions.....
     var regx=/^([a-zA-Z0-9\.]+)(@college.edu)$/
     console.log(regx.test(email));
     return regx.test(email);
  };

 //validate Results
  var validateResults = function(data) {
    var isValid = validateName(data.name) & validatePhone(data.phno) & validateEmail(data.emailaddress);
    console.log(isValid);
    return isValid;
  };
  
  
  
  var onSubmit = function(e) {
    e.preventDefault();
    var data = constructData();
    if (validateResults(data)) {
      printResults(data);
    } else {
      var resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = '';
      resultsDiv.classList.add("hide");
    }
  };


//Print Results
  var printResults = function(data) {
	console.log(data);
    var constructElement = function([key,value]) {
	
      return `<p class='result-item'>${key}: ${value}</p>`;
    };

    var resultHtml = (Object.entries(data) || []).reduce(function(innerHtml, keyValuePair) {
      debugger
      return innerHtml + constructElement(keyValuePair);
    }, '');
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = resultHtml;
    resultsDiv.classList.remove("hide");
  };

  document.addEventListener('DOMContentLoaded', initialize);
  var str='sdcdsccbdsjhcbsdhjcbsdhjcbsjchb';
})();