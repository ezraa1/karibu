


const getPage = async () => {
    fetch("https://api.m3o.com/v1/user/Create")
    
    
      .then(response => response.json())
       .then(data => console.log(data));
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

var div = document.getElementById("section2");
div.appendChild(img)
div.setAttribute("style", "text-align:center");

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
 document.getElementById("myForm").style.left = "100px";