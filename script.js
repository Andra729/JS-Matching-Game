/************************************************
 * This is "your" last reso/u/lt
 ************************************************/
 var best = localStorage.getItem("best");

/************************************************
 * Positioning function
 ************************************************/
function gamePostitioning () {
    var w = Math.floor( window.innerWidth * 0.9 );
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
var numberOfFaces = 5;
var theLeftSide = document.getElementById('leftSide');

function generateFaces() {
    theLeftSide.innerHTML = "";

    for (var i = 0; i < numberOfFaces; i++) {
        
        var imgElement = document.createElement('IMG');

        imgElement.src = "smile.png";
        imgElement.style.top = gamePostitioning().y + "px";
        imgElement.style.left = gamePostitioning().x + "px";

        theLeftSide.appendChild(imgElement);
    }
    /* cheating */
    console.log(theLeftSide.lastChild);
 };
 
/************************************************
 * Cloning the left-1 to RightSide
 ************************************************/
  var theRightSide = document.getElementById('rightSide');

  function cloneGeneration() {
  
      theRightSide.removeChild(theRightSide.firstChild)
      var cloned = theLeftSide.cloneNode(true);
      cloned.id =""; 
      theRightSide.appendChild(cloned).removeChild(cloned.lastChild);
 };

/************************************************
 * GAME OVER function
 ************************************************/
function gameOver() {
    var current = numberOfFaces/5

    if( !best || best < current){
        best = localStorage.setItem('best', current);
    }else{
        best = localStorage.getItem('best');
    }

    alert(
        'Game OVER!\n\n' +
        'Current level: ' + current + '. level\n\n' +
        'Your best result: ' + best + '. level'
        );
 }

/************************************************
 * ONCLICK event
 ************************************************/
/*
theLeftSide.lastChild.onclick = function nextLevel(event){ 
        event.stopPropagation();
        numberOfFaces += 5;

        generateFaces();
        cloneGeneration();
}*/

function nextLevel(event){ 
    event.stopPropagation();
    numberOfFaces += 5;

    generateFaces();
    cloneGeneration();
}

        /************************************
        do {
            event.stopPropagation();
            numberOfFaces += 5;

            generateFaces();
            cloneGeneration();
            
        } while ( !theLeftSide.lastChild.onclick );


function clickToNextLevel() {
    console.log( theLeftSide.lastChild.onclick + " ez az amaz ");

    if( !theLeftSide.lastChild.onclick ){
        theLeftSide.lastChild.onclick = function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
    
            generateFaces();
            cloneGeneration();
        }
    } else{
        gameOver();
    }
}

 /************************************************
 * BODYCLICK event
 ************************************************/
function gameWarning() {

    alert('To play, click the extra face in the white box!\n\nClick "ok" to continue');

};

