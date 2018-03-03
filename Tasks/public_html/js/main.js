/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    var divCountObject={};
    var mainContainer = document.getElementById('mainContainer');
    var nodeArray;
    
//function to generated random color code    
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
 
 function createSpan(className, parentNode, value){
     var element = document.createElement('span');
     element.setAttribute('class', className);
     element.innerHTML=value;
     parentNode.appendChild(element);
 }
 
 //function to determine how the divs to be created are divided
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
 
 // function to create divs using creatDiv function, calculateDivNumbers
function onClick(){
    nodeArray=[];
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
}

//function contains swap implementation
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

//function to swap created divs as per the user's choice using swap implementation
function onSwap(){

    var fromDiv = document.getElementById('fromDiv').value;
    var toDiv = document.getElementById('toDiv').value;
    
    var fromNode = nodeArray[fromDiv-1];
    var toNode = nodeArray[toDiv-1];
    
    swap(fromNode,toNode);  
}

//Deletes created divs sequentially
function onDelete(){

       var d = setInterval(function(){
            console.log("abc");
            var deleteNode = nodeArray[0];
            deleteNodeParent = deleteNode.parentNode;
            deleteNodeParent.removeChild(deleteNode);
            nodeArray.shift();
            if(nodeArray.length ===0){
            clearInterval(d);
       }
       },3000);
       
}  

function createDateTime(){
    var date = new Date();
    var dateValue;
    var timeValue;
    for(var i=0;i<nodeArray.length;i++){
        if(nodeArray[i].childElementCount>0){
            var dateSpan = nodeArray[i].getElementsByClassName('dateSpan');
            var timeSpan = nodeArray[i].getElementsByClassName('timeSpan');
            nodeArray[i].removeChild(dateSpan[0]);
            nodeArray[i].removeChild(timeSpan[0]);
        }
        date.setDate(date.getDate()-i);
        date.setMinutes(date.getMinutes() - 10);
        dateValue = date.toLocaleDateString();
        timeValue = date.toLocaleTimeString();
        
        createSpan('dateSpan',nodeArray[i],dateValue);
        createSpan('timeSpan',nodeArray[i],timeValue);
    }
}