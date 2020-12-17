$(document).ready(function(){
$('#pickForm input').on('change', function() {
   if($('input[name="soctype"]').is(':checked')) {
   var options = [];
   options.push($('input[name="soctype"]:checked', '#pickForm').val());
   options.push($('input[name="actType"]:checked', '#pickForm').val());
   <!-- document.getElementById("demo").innerHTML= options[0] +', '+ options[1]; -->

   $('#package').show();
      $('#soctype').text($('input[name="soctype"]:checked', '#pickForm').val());
      $('#actType').text($('input[name="actType"]:checked', '#pickForm').val());

<!-- this works -->
  var link1='<a href="results4.html">Donate for environmental justice</a>';
  var link2='<a href="results5.html">Volunteer for environmental justice</a>';
  var link3='<a href="results6.html">Advocate for environmental justice</a>';
  var link4='<a href="results7.html">Donate for civil rights</a>';
  var link5='<a href="results8.html">Volunteer for civil rights</a>';
  var link6='<a href="results9.html">Advocate for civil rights</a>';
  var link7='<a href="results1.html">Donate for food security</a>';
  var link8='<a href="results2.html">Volunteer for food security</a>';
  var link9='<a href="results3.html">Advocate for food security</a>';
  var link10='<a href="results10.html">Donate for socieconomic equity</a>';
  var link11='<a href="results11.html">Volunteer for socieconomic equity</a>';
  var link12='<a href="results12.html">Advocate for socieconomic equity</a>';
  
  if ((options.indexOf("Environmental")!= -1)) {
    if (options.indexOf("Donate")!= -1) {
      document.getElementById("ifResults5").innerHTML=link1;
    } else if (options.indexOf("Volunteer")!= -1) {
      document.getElementById("ifResults5").innerHTML=link2;
    } else if (options.indexOf("Advocate")!= -1) {
      document.getElementById("ifResults5").innerHTML=link3;
    } else {
      document.getElementById("ifResults5").innerHTML="env only";
    }
  } else if (options.indexOf("Civil")!=-1) {
    if (options.indexOf("Donate")!= -1) {
      document.getElementById("ifResults5").innerHTML=link4;
    } else if (options.indexOf("Volunteer")!= -1) {
      document.getElementById("ifResults5").innerHTML=link5;
    } else if (options.indexOf("Advocate")!= -1) {
      document.getElementById("ifResults5").innerHTML=link6;
    } else {
      document.getElementById("ifResults5").innerHTML="civ only";
    }
  } else if (options.indexOf("Food")!= -1) {
    if (options.indexOf("Donate")!= -1) {
      document.getElementById("ifResults5").innerHTML=link7;
    } else if (options.indexOf("Volunteer")!= -1) {
      document.getElementById("ifResults5").innerHTML=link8;
    } else if (options.indexOf("Advocate")!= -1) {
      document.getElementById("ifResults5").innerHTML=link9;
    } else {
      document.getElementById("ifResults5").innerHTML="food only";
    }
  } else if (options.indexOf("Socio") != -1) {
    if (options.indexOf("Donate")!= -1) {
      document.getElementById("ifResults5").innerHTML=link10;
    } else if (options.indexOf("Volunteer")!= -1) {
      document.getElementById("ifResults5").innerHTML=link11;
    } else if (options.indexOf("Advocate")!= -1) {
      document.getElementById("ifResults5").innerHTML=link12;
    } else {
      document.getElementById("ifResults5").innerHTML="socio only";
    }
  } else {
    document.getElementById("ifResults5").innerHTML="Got none.";
  }

      }
  });
});
