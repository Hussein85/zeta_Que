function openWin() {
    var url = "./mini_que.html";
    window.open(url, "", "width=290px, height=175, resizable=no, dialog=yes, minimizable=no, maximizable=no");
    return false;
}


// Change flashing duration and interval
var flashInterval = 500;
var duration = 30000;


function nextKassa() {   
    nextKassa1("kassaNr", "totalInQueNr" ,flashInterval, duration  );  
}

function backKassa() {
     backKassa1("kassaNr", "totalInQueNr", flashInterval, duration);
}

function nextRad() {  
    nextRad1("radQueNr", "totalRadQueNr", flashInterval, duration);   
}

function backRad() {
    backRad1("radQueNr", "totalRadQueNr", flashInterval, duration);
}

function nextVerk() {  
    nextVerk1("verkNbr", "totalVerkNbr", flashInterval, duration);  
}

function backVerk() {
    backVerk1("verkNbr", "totalVerkNbr", flashInterval, duration);
}



// Private functions
var t1;
var t2;
function nextKassa1(queNbrId, totalQueNbrId, flashInterval, duration ){
    var kassaNr = parseInt(document.getElementById(queNbrId).innerHTML);
    var antalIKö = parseInt(document.getElementById(totalQueNbrId).innerHTML);
    kassaNr += 1;
    document.getElementById(queNbrId).innerHTML = kassaNr;
    if(antalIKö > 0){
        antalIKö -= 1;
    }
    document.getElementById(totalQueNbrId).innerHTML = antalIKö;
    document.getElementById("audio1").play();

    // Change color
    clearInterval(t1);
    clearTimeout(t2);
    t1 = setInterval(function(){ flashText(queNbrId) }, flashInterval);
    t2 = setTimeout(function() { 
        clearInterval(t1);
        var text = document.getElementById(queNbrId);
        if(text.style.color == 'red'){
            text.style.color = 'black';
        }      
     }, duration);
     
}


var t1;
var t2;
function backKassa1(queNbrId, totalQueNbrId, flashInterval, duration ){
    var kassaNr = parseInt(document.getElementById(queNbrId).innerHTML);
    var antalIKö = parseInt(document.getElementById(totalQueNbrId).innerHTML);
    if(kassaNr > 0){
        kassaNr -= 1;
    }
    document.getElementById(queNbrId).innerHTML = kassaNr;
    antalIKö += 1;
    document.getElementById(totalQueNbrId).innerHTML = antalIKö;
    document.getElementById("audio1").play();

    // Change color
    clearInterval(t1);
    clearTimeout(t2);
    t1 = setInterval(function(){ flashText(queNbrId) }, flashInterval);
    t2=setTimeout(function() { 
        clearInterval(t1); 
        var text = document.getElementById(queNbrId);
        if(text.style.color == 'red'){
            text.style.color = 'black';
        }
    }, duration);
}


//-----------------------------------

var t3;
var t4;
function nextRad1(queNbrId, totalQueNbrId, flashInterval, duration ){
    var kassaNr = parseInt(document.getElementById(queNbrId).innerHTML);
    var antalIKö = parseInt(document.getElementById(totalQueNbrId).innerHTML);
    kassaNr += 1;
    document.getElementById(queNbrId).innerHTML = kassaNr;
    if(antalIKö > 0){
        antalIKö -= 1;
    }
    document.getElementById(totalQueNbrId).innerHTML = antalIKö;
    document.getElementById("audio1").play();

    // Change color
    clearInterval(t3);
    clearTimeout(t4);
    t3 = setInterval(function(){ flashText(queNbrId) }, flashInterval);
    t4 = setTimeout(function() { 
        clearInterval(t3);
        var text = document.getElementById(queNbrId);
        if(text.style.color == 'red'){
            text.style.color = 'black';
        }      
     }, duration);
     
}


var t3;
var t4;
function backRad1(queNbrId, totalQueNbrId, flashInterval, duration ){
    var kassaNr = parseInt(document.getElementById(queNbrId).innerHTML);
    var antalIKö = parseInt(document.getElementById(totalQueNbrId).innerHTML);
    if(kassaNr > 0){
        kassaNr -= 1;
    }
    document.getElementById(queNbrId).innerHTML = kassaNr;
    antalIKö += 1;
    document.getElementById(totalQueNbrId).innerHTML = antalIKö;
    document.getElementById("audio1").play();

    // Change color
    clearInterval(t3);
    clearTimeout(t4);
    t3 = setInterval(function(){ flashText(queNbrId) }, flashInterval);
    t4=setTimeout(function() { 
        clearInterval(t3); 
        var text = document.getElementById(queNbrId);
        if(text.style.color == 'red'){
            text.style.color = 'black';
        }
    }, duration);
}


//-------------------------

var t5;
var t6;
function nextVerk1(queNbrId, totalQueNbrId, flashInterval, duration ){
    var kassaNr = parseInt(document.getElementById(queNbrId).innerHTML);
    var antalIKö = parseInt(document.getElementById(totalQueNbrId).innerHTML);
    kassaNr += 1;
    document.getElementById(queNbrId).innerHTML = kassaNr;
    if(antalIKö > 0){
        antalIKö -= 1;
    }
    document.getElementById(totalQueNbrId).innerHTML = antalIKö;
    document.getElementById("audio1").play();

    // Change color
    clearInterval(t5);
    clearTimeout(t6);
    t5 = setInterval(function(){ flashText(queNbrId) }, flashInterval);
    t6 = setTimeout(function() { 
        clearInterval(t5);
        var text = document.getElementById(queNbrId);
        if(text.style.color == 'red'){
            text.style.color = 'black';
        }      
     }, duration);
     
}


var t5;
var t6;
function backVerk1(queNbrId, totalQueNbrId, flashInterval, duration ){
    var kassaNr = parseInt(document.getElementById(queNbrId).innerHTML);
    var antalIKö = parseInt(document.getElementById(totalQueNbrId).innerHTML);
    if(kassaNr > 0){
        kassaNr -= 1;
    }
    document.getElementById(queNbrId).innerHTML = kassaNr;
    antalIKö += 1;
    document.getElementById(totalQueNbrId).innerHTML = antalIKö;
    document.getElementById("audio1").play();

    // Change color
    clearInterval(t5);
    clearTimeout(t6);
    t5 = setInterval(function(){ flashText(queNbrId) }, flashInterval);
    t6=setTimeout(function() { 
        clearInterval(t5); 
        var text = document.getElementById(queNbrId);
        if(text.style.color == 'red'){
            text.style.color = 'black';
        }
    }, duration);
}




function flashText(queNbrId) {
    var text = document.getElementById(queNbrId);
    text.style.color = (text.style.color=='red') ? 'black':'red';
}
