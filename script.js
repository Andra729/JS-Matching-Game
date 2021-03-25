/************************************************
 * Positioning function
 ************************************************/
function imgPostitions () {
    var w = Math.floor( window.innerWidth * 0.8 );
    var h = Math.floor(window.innerHeight * 0.41 );
    var h2 = Math.floor(window.innerHeight * 0.35 );
    var x = Math.floor((Math.random() * w ));
    var y = Math.floor((Math.random() * h2 ));

    document.getElementById("leftSide").style.height = h + "px";
    document.getElementById("rightSide").style.height = h + "px";

    console.log("w:" + w +" , h:" + h +" , x:" + x + " , y:" + y);
    return {x, y, h};
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
        imgElement.style.top = imgPostitions().y + "px";
        imgElement.style.left = imgPostitions().x + "px";

        theLeftSide.appendChild(imgElement);
    }
    /* cheatings */
    console.log(theLeftSide.lastChild );
 };

onload = generateFaces();

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

cloneGeneration();

 /************************************************
 * ONCLICK event
 ************************************************/
theLeftSide.lastChild.onclick = function nextLevel(event){
    while ( theLeftSide.lastChild.onclick ) {   
        event.stopPropagation();
        numberOfFaces += 5;

        generateFaces();
        cloneGeneration();}
};


 /************************************************
 * BODYCLICK event
 ************************************************/
var theBody = document.getElementsByTagName('body')[0];

theBody.onclick = function gameOver() {

    alert("Game Over!\n\n" + numberOfFaces/5 +". level");

    theBody.onclick = null;

    theLeftSide.lastChild.onclick = null;
};

 /************************************************
 * Repetition
 ************************************************/
/*
Faszom tudja, már mindent kipróbáltam...*/
