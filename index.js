
document.addEventListener("DOMContentLoaded", () => {
})
  function myFunction() {
    var x = document.getElementById("county");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  
  fetch(' https://ezraa1.github.io/my-server/db.json')
    
    .then(response => response.json())
  .then(data => {
  
   data.forEach(element => {
    let list=document.querySelector("#list")
    let li=document.createElement("li")
    li.innerText=element.name
    list.appendChild(li).style.listStyle="none"
   
 
 
    

  })
  })
}

function displayMyContent(){
    var myContent= document.getElementById("section1");
    var defaultDisplay = myContent.style.display;
    var servicesButton = document.getElementById ("servicesButton");
    if (defaultDisplay == 'block') {
        myContent.style.display = 'none';
        // servicesButton.innerHTML
    }
    else{
        myContent.style.display = 'block';
        // servicesButton.innerHTML
    }
}
var img = document.createElement("img");
img.src = "s-image3.jpg";
img.style.height="250px";

var div = document.getElementById("section2");
div.appendChild(img)
div.setAttribute("style", "text-align:center");

document.getElementById("myForm1").style.display="none";
 function openSignUpForm() {
  document.getElementById("myForm1").style.display = "block";
}
 
 function closeSignUpForm() {
  document.getElementById("myForm1").style.display = "none";
 }


//  validation
function validateForm() {
    
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Input is incorrect!");
      return false;
    }
  }

