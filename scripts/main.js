var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/zwo2.jpg') {
      myImage.setAttribute ('src','images/zwo.jpg');
    }  else {
      myImage.setAttribute ('src','images/zwo2.jpg');
    }
}

var myButton = document.getElementById('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Java script is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Java script is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
