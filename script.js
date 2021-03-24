/************************************************
 * Positioning function
 ************************************************/
function imgPostitions () {
    var x = Math.floor((Math.random() *300));
    var y = Math.floor((Math.random() *300));

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
