console.log('Loaded!');
var element = document.getElementById('maintxt');
element.innerHTML="New Value";
var img = document.getElementById('madi');
var marginleft = 0;
function moveRight(){
  marginleft = marginleft + 10;
  img.style.marginleft=marginnleft+"px";
}
img.onhover=function(){
  var interval = setInterval(moveRight,100) ; 
};