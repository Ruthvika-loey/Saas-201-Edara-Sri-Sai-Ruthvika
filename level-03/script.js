
(function() {
  var initialize = function() {
   document.getElementById("name").focus;
   document.getElementById("department2").value=document.getElementById("department2").options[1].value;
   document.getElementById("department2").options[0].disabled=true;
   //console.log(document.getElementById("department2").value);
   document.getElementById("department1").addEventListener("change",disableDuplicateSecondaryDepartment);
   document.getElementById("submit").addEventListener("click",onsubmit);
  };

  var disableDuplicateSecondaryDepartment = function() {
    var ind=document.getElementById("department1").selectedIndex;
    document.getElementById("department2").options[ind].disabled=true;
    for(i=0;i<4;i++)
    {
     if(i!=ind)
      { document.getElementById("department2").options[i].disabled=false;}
    }
      return;
  }

  var constructData = function() {
    var n=document.getElementById("name").value;
    var p=document.getElementById("phno").value;
    var em=document.getElementById("emailaddress").value;
    var d1=document.getElementById("department1").value;
    var d2=document.getElementById("department2").value;
   var data={ "name":n,"phno":p,"emailaddress":em,"department1":d1,"department2":d2,}
    return data;
  }

  var validateResults = function(data) {

   var isValid = true;
  var data2=Object.values(data);
    isValid=(validatename(data2[0])&&validatephno(data2[1])&&validateemail(data2[2])&&validatedept(data2[3],data2[4]));
    return isValid;
  };
  function validatedept(dpt1,dpt2)
  {  if(dpt1==dpt2)   
     { return false;}
     else
     return true;
  }
  function validatephno(ph)
  {
    var regx=/^[0-9]\d{0,9}$/;
    var phn =document.getElementById("phno").value;
     if(!regx.test(phn)){
      return false;
      }
    }
   function validatename(n)
   { 
   var regex = /^[a-zA-Z ]{0,100}$/;
    if(regex.test(name1)){
    return true;
    }
    else{
    return false;
    }
    }
    function validateemail(em)
    {
      var reg=/^[a-zA-Z0-9.@]+@college.edu$/;
      if(!reg.test(mil))
      {
  isValid=false;
      }
    }
    
      
   
    var onSubmit = function(event) {
      // 5. Figure out how to avoid the redirection on form submit
  
      var data = constructData();
  
      if (validateResults(data)) {
        printResults(data);
      } else {
        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = '';
        resultsDiv.classList.add("hide");
      }
    };
  
    var printResults = function(data) {
      var constructElement = function([key, value]) {
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
  
    /*
      Initialize the javascript functions only after the html DOM content has loaded.
      This is to ensure that the elements are present in the DOM before binding any event listeners to them.
    */
    document.addEventListener('DOMContentLoaded', initialize);
  })();
  