/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    var divCountObject={};
    var mainContainer = document.getElementById('mainContainer');
    var nodeArray=[];
function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}
        
//Function to create a div and append it to a parent node and then assign a id to it
 function createDiv(parentNode, id, className){
     var element = document.createElement('div');
     element.setAttribute('id',id);
     element.setAttribute('class',className);
     parentNode.appendChild(element);
 }
 function calculateDivNumbers(Value){
    if(Value%2==0){
        divCountObject.firstContainerDiv=Value/2;
        divCountObject.secondContainerDiv=Value/2;
    }
    else{
        divCountObject.firstContainerDiv=((Value-1)/2)+1;
        divCountObject.secondContainerDiv=(Value-1)/2;
    }
    return divCountObject;
 }
function onClick(){
    var input=document.getElementById('divCount').value;
    calculateDivNumbers(input);
    if(document.contains(document.getElementById('firstChild'))){
        var firstChild = document.getElementById('firstChild');
        var secondChild = document.getElementById('secondChild');
        mainContainer.removeChild(firstChild);
        mainContainer.removeChild(secondChild);
        createDiv(mainContainer,'firstChild','childContainers');
        createDiv(mainContainer,'secondChild','childContainers');
           
    }
        var firstContainer = document.getElementById('firstChild');
        var secondContainer = document.getElementById('secondChild');
        var divCount=1;
    for(var i=1;i<=divCountObject.firstContainerDiv;i++){
        var j=0;
        var fistContainerChild = document.createElement('div');
            fistContainerChild.setAttribute('class','ContainerChild');
            fistContainerChild.setAttribute('id',divCount);
            fistContainerChild.setAttribute('style','width:calc(100% /'+ divCountObject.firstContainerDiv + ');height:100%;background-color:' + getRandomColor());
            firstContainer.appendChild(fistContainerChild);
            nodeArray.push(fistContainerChild);
            j++;
            divCount=divCount+j;
    }
    for(var i=1;i<=divCountObject.secondContainerDiv;i++){
        var j=0;
        var secondContainerChild = document.createElement('div');
            secondContainerChild.setAttribute('class','ContainerChild');
            secondContainerChild.setAttribute('id',divCount);
            secondContainerChild.setAttribute('style','width:calc(100% /'+ divCountObject.firstContainerDiv + ');height:100%;background-color:' + getRandomColor());
            secondContainer.appendChild(secondContainerChild);
            nodeArray.push(secondContainerChild);
            j++;
            divCount=divCount + j;
    }
debugger;    
}
function swap(n1,n2){
    var p1 = n1.parentNode;
    var p2 = n2.parentNode;
    var i1, i2;
    if ( !p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1) ) return;
    for (var i = 0; i < p1.children.length; i++) {
        if (p1.children[i].isEqualNode(n1)) {
            i1 = i;
        }
    }
    for (var i = 0; i < p2.children.length; i++) {
        if (p2.children[i].isEqualNode(n2)) {
            i2 = i;
        }
    }

    if ( p1.isEqualNode(p2) && i1 < i2 ) {
        i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
function onSwap(){

    var fromDiv = document.getElementById('fromDiv').value;
    var toDiv = document.getElementById('toDiv').value;
    
    var fromNode = nodeArray[fromDiv-1];
    var toNode = nodeArray[toDiv-1];
    
    swap(fromNode,toNode);
    /*if(fromDiv<=firstContainer.childElementCount&&toDiv<=firstContainer.childElementCount){
       fromNode = firstContainer.childNodes[fromDiv - 1];
      toNode = firstContainer.childNodes[toDiv -1];
      swap(fromNode,toNode);
    }else if (fromDiv > firstContainer.childElementCount && toDiv <= firstContainer.childElementCount){
        fromNode = secondContainer.childNodes[fromDiv-(secondContainer.childElementCount+2)];
        toNode = firstContainer.childNodes[toDiv-1];
        swap(fromNode,toNode);
    }
    else if (fromDiv <= firstContainer.childElementCount && toDiv > firstContainer.childElementCount){
        fromNode = firstContainer.childNodes[fromDiv-1];
        toNode = secondContainer.childNodes[toDiv-(secondContainer.childElementCount+2)];
        swap(fromNode,toNode);
    }else{
        fromNode = secondContainer.childNodes[fromDiv-(secondContainer.childElementCount+2)];
        toNode = secondContainer.childNodes[toDiv-(secondContainer.childElementCount+2)];
        swap(fromNode,toNode);
    }*/
    
    
}
