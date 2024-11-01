function ageCalculator() {
    var userinput = document.getElementById("datum").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "";  
      return false; 
    } else {
    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    return document.getElementById("vekPouzivatela").innerHTML =  
             " " + age + "  ";
    }
} 

var subjectObject = {
 "Dog": {
    "German Shepherd": ["Black", "Brown", "White"],
    "Labrador": ["Black", "Golden"],
    "Pug": ["Light-brown", "Black"]    
  },
  "Cat": {
    "Maine Coon": ["Gray", "White", "Black"],
    "British Shortcut": ["Gray", "Brown", "Red"]

  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
function WriteBox(){
    var yesItem= document.getElementById('Yes');
    var noItem = document.getElementById('No');
    yesItem.onchange = function() {  
        document.getElementById("box1").style.display = 'block';

    };
    noItem.onchange = function() {  
        document.getElementById("box1").style.display = 'none';
    };  
  }
function mailFunc(){
    var mail = document.getElementById("email").value;
	var poziadavky = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/;
    if(poziadavky.test(mail)==false){
        document.getElementById("div2").innerHTML="invalid format";
        document.getElementById("div2").style.color="Red";
    }else{
        document.getElementById("div2").innerHTML="";
        values.push(mail);
    }
}

function phoneFunc(){
    var phone = document.getElementById("phone").value;
	var poziadavka = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(poziadavka.test(phone)==false){
        document.getElementById("div3").innerHTML="invalid format";
        document.getElementById("div3").style.color="Red";
    }else{
        document.getElementById("div3").innerHTML="";
        values.push(phone);
    }
}

