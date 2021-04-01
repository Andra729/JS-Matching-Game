/************************************************
 * Game verison
 ************************************************/
 var version = "v1.6"
 document.getElementById('game-version').textContent = version;
 document.title = ".JS Matching Game " + version;

 /************************************************
 * ONLOAD script.js
 ************************************************/
 var startBtn = document.getElementById('start');
 var infoIcon = document.getElementById('info');

 startBtn.setAttribute("onClick", "onStart()");
 startBtn.style.display = "none";

 infoIcon.setAttribute("onClick", "onInfo()");
 infoIcon.style.cursor = "help";
 infoIcon.style.fontSize = "1.25rem";

 /************************************************
 * This is "your"  best result
 ************************************************/
 var best = localStorage.getItem("best");
 var current = 0;

 /************************************************
 * Positioning function
 ************************************************/
 function gamePostitioning () {
     var w = Math.floor( window.innerWidth * 0.85 );
     var h = Math.floor(window.innerHeight * 0.41 );
     var h2 = Math.floor(window.innerHeight * 0.35 );
     var x = Math.floor((Math.random() * w ));
     var y = Math.floor((Math.random() * h2 ));

     document.getElementById("leftSide").style.height = h + "px";
     document.getElementById("rightSide").style.height = h + "px";
     return {x, y};
 };

 /************************************************
 * LeftSide smiling faces generator
 ************************************************/
 var numberOfFaces = 0;
 var theLeftSide = document.getElementById('leftSide');

 function generateFaces() {
     theLeftSide.innerHTML = "";

     for (var i = 1; i <= numberOfFaces; i++) {
        
         var imgElement = document.createElement('IMG');
         imgElement.src = "smile.png";
         imgElement.id = i;
         imgElement.setAttribute("onClick", "nextLevel(this.id)");
         imgElement.style.top = gamePostitioning().y + "px";
         imgElement.style.left = gamePostitioning().x + "px";

         theLeftSide.appendChild(imgElement);
     }

     current = numberOfFaces/5;
     document.getElementById('game-level').setAttribute('value', current + '. level');
     /* cheating hint */
     console.log(theLeftSide.lastChild);
 };
 
 /************************************************
 * Cloning the left-1 to RightSide
 ************************************************/
 var theRightSide = document.getElementById('rightSide');

 function cloneGeneration() {
  
     theRightSide.removeChild(theRightSide.firstChild)
     var cloned = theLeftSide.cloneNode(true);
     cloned.id="clone";
     theRightSide.appendChild(cloned).removeChild(cloned.lastChild);

     var items = theRightSide.getElementsByTagName('img');

     for( j =0; j < items.length; j++ ){
         items[j].removeAttribute('id');
         items[j].removeAttribute('onClick');
     }
      
 };

 /************************************************
 * GAME OVER function + local store the best result
 ************************************************/
 function gameOver() {

    if( !best || best < current){
         best = localStorage.setItem('best', current);
    }else{
         best = localStorage.getItem('best');
    }

    if ( !best ) {
         alert(
             'Game OVER!\n\n' +
             'Current level: ' + current + '. level\n\n' +
             'Your best result: ' + current + '. level'
             );
    } else {
         alert(
             'Game OVER!\n\n' +
             'Current level: ' + current + '. level\n\n' +
             'Your best result: ' + best + '. level'
             );
     }
 }

 /************************************************
 * ONCLICK event to repeat
 ************************************************/
 function nextLevel(id) {

     if( id == numberOfFaces ){
         numberOfFaces += 5;
         generateFaces();
         cloneGeneration();

    } else {
         for( j=0; j<numberOfFaces; j++ ){
             document.getElementById( j+1 ).removeAttribute('onClick');
         }
         gameOver();
         startBtn.removeAttribute('style');
     }
 }

 /************************************************
 * onStart() clicked
 ************************************************/
 function onStart() {
     window.location.reload();
 }

 /************************************************
 * onInfo() clicked
 ************************************************/

