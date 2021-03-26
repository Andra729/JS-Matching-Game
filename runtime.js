/************************************************
 * variables been used 
 ************************************************/
var theBody = document.getElementsByTagName('body')[0];

/************************************************
 * ONLOAD
 * theLeftSide.lastChild.onclick = theLeftSide.lastChild;
 ************************************************/
 generateFaces();
 cloneGeneration();
 
 console.log( theLeftSide.lastChild.onclick );

 theLeftSide.lastChild.onclick = function nextLevel(event){ 
    event.stopPropagation();
    numberOfFaces += 5;

    generateFaces();
    cloneGeneration();
    console.log( theLeftSide.lastChild.onclick );
}
/*
 theLeftSide.lastChild.onwaiting = (event) => {
    numberOfFaces += 5;

    generateFaces();
    cloneGeneration();
    console.log( theLeftSide.lastChild.onclick.event );
 }*/

 while( !theLeftSide.lastChild.onclick ){
        theLeftSide.lastChild.onclick = function nextLevel(event) {
            event.stopPropagation();
            numberOfFaces += 5;
            
            generateFaces();
            cloneGeneration();

        //}
    } 
 }
 /*
while( looping == 1 ) {
    generateFaces();
    cloneGeneration();
    stopPropagation();

    if (theLeftSide.lastChild.onclick ) {
        numberOfFaces += 5;
        start;
    }

} */

if( theBody.onclick ){
    gameWarning();
} else if ( !theLeftSide.lastChild.onclick ){
    gameOver();
}