var i =0;
var len=document.querySelectorAll(".drum").length;
while (i<len){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var sound=this.innerHTML;
   makeSound(sound);
   keyanimation(sound);

});
 i++;
}
document.addEventListener("keydown",function(keyboard){

makeSound(keyboard.key);
keyanimation(keyboard);
});
function makeSound(event){
  switch (event) {
    case  "w":
    var tom1= new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;
    case  "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
        break;
    case  "d":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
          break;
    case  "s":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
            break;
    case  "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
              break;
    case  "k":
              var kickbass = new Audio('sounds/kick-bass.mp3');
              kickbass.play();
                break;
    case "l":
      var snare=new Audio("sounds/snare.mp3");
          snare.play();
          break;
    default:console.log(sound);

  }
}
function keyanimation(touched){
  var activebutton =document.querySelector("."+touched);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
