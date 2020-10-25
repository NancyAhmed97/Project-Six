
var username=document.getElementById("name")
var email=document.getElementById("Email")
var phone=document.getElementById("Phone")
var namealert=document.getElementById("namealert")
var emailalert=document.getElementById("emailalert")
var phonealert=document.getElementById("phonealert")
var valueoftextarea=document.getElementById("exampleFormControlTextarea1").value
var lengthoftextarea= valueoftextarea.length
var listitem=document.getElementById("hide")
var head=document.getElementById("head2")
var contentText="";
var text
 //first section
 function add(e) {

    listitem.style.display="block"
    console.log(document.getElementById("item1"));
    document.getElementById("item1").value = contentText;
//    $('#frin').value()
   
   
  }
  function saveText(value)
  {
     console.log(value);
     contentText = value;
  }
  function remove()
  {
      listitem.style.display="none"

  }
//seond section
function hover () {
    console.log("fired");
    document.getElementById("head2").classList.add("color_chang");
}

function removerClass(){
    document.getElementById("head2").classList.remove("color_chang");
}

var playSound = new Audio();
playSound.src = "sounds/Baby-Laugh.mp3";

$('.music').hover(function () {

  playSound.play();// for play sound
$('.hustlin').addClass('color_chang');


 });

$('.music').mouseleave(function () {
  $('.hustlin').removeClass('color_chang');
  playSound.pause();// for pause sound
  enableLoop();
});

// make sound continue
function enableLoop() {
  playSound.loop = true;
}





// third section
// Set the date we're counting down to
var count = new Date("dec 1,2020 00:01:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var d = count - now;

  var days = Math.floor(d/(1000*60*60*24));
  var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  var minutes = Math.floor((d%(1000*60*60))/(1000*60));
  var seconds = Math.floor((d%(1000*60))/1000);

  document.getElementById("day").innerHTML = days ;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if(d <= 0){
    clearInterval(x);
  }
},1000);



//sectionfifth
function validateUserName()
{
   var valueofname = /^[a-zA-Z]{2,10}/;    
   if(valueofname.test(username.value)==true)
    {
        namealert.style.display="none"
    }else
    {
      namealert.style.display="block"

    }
}
function validateEmail()
{
   var valueofemail = /^[a-zA-Z]{2,10}/;    
   if(valueofemail.test(email.value)==true)
    {
        emailalert.style.display="none"
    }else
    {
      emailalert.style.display="block"

    }
}
function validatePhone()
{
   var valueofphone = /^[a-zA-Z]{2,10}/;    
   if(valueofphone.test(phone.value)==true)
    {
        phonealert.style.display="none"
    }else
    {
      phonealert.style.display="block"

    }
}
$('textarea').keypress(function(){
    if(lengthoftextarea<30)
    {
        $(".counter").text(30-(lengthoftextarea +=1) + "letter remailing")
    }else
    {
        this.value = this.value.substring(0, max);
    }
    });
    
    function hoverRGB (value) {
        document.getElementById("colorRGB").style.backgroundColor = value;
     }