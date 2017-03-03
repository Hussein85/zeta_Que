function openWin() {
    var url = "./mini_que.html";
    window.open(url, "", "width=290px, height=175, resizable=no, dialog=yes, minimizable=no, maximizable=no");
    return false;
}


// Change flash duration and interval
var flashInterval = 500;
var duration = 30000;           // in milliseconds


// Check if queData is stored in localstorage, if not then create it.
if (localStorage.getItem('queData') === null){  
    var queData = { 'kassa': 30, 'totalIKassa': 0, 'radgivning': 45, 'totalRad': 5, 'verkstad': 20, 'totalVerk': 2};
    localStorage.setItem('queData', JSON.stringify(queData));
}else{
    loadData();
}


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
    document.getElementById("audio1").Play();

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

     // Save kassaNr and antalIKö to localStorage  
     var temp1 = JSON.parse(localStorage.getItem('queData'));
     temp1['kassa'] = kassaNr;
     temp1['totalIKassa'] = antalIKö;
     localStorage.setItem('queData', JSON.stringify(temp1));

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
    document.getElementById("audio1").Play();

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

     // Save kassaNr and antalIKö to localStorage
     
     var temp1 = JSON.parse(localStorage.getItem('queData'));
     temp1['kassa'] = kassaNr;
     temp1['totalIKassa'] = antalIKö;
     localStorage.setItem('queData', JSON.stringify(temp1));
     

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
    document.getElementById("audio1").Play();

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
     
      // Save kassaNr and antalIKö to localStorage
      
     var temp1 = JSON.parse(localStorage.getItem('queData'));
     temp1['radgivning'] = kassaNr;
     temp1['totalRad'] = antalIKö;
     localStorage.setItem('queData', JSON.stringify(temp1));
     

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
    document.getElementById("audio1").Play();

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

      // Save kassaNr and antalIKö to localStorage
      
     var temp1 = JSON.parse(localStorage.getItem('queData'));
     temp1['radgivning'] = kassaNr;
     temp1['totalRad'] = antalIKö;
     localStorage.setItem('queData', JSON.stringify(temp1));
     
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
    document.getElementById("audio1").Play();

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

       // Save kassaNr and antalIKö to localStorage   
     var temp1 = JSON.parse(localStorage.getItem('queData'));
     temp1['verkstad'] = kassaNr;
     temp1['totalVerk'] = antalIKö;
     localStorage.setItem('queData', JSON.stringify(temp1));
     
     
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
    document.getElementById("audio1").Play();

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

     // Save kassaNr and antalIKö to localStorage
     var temp1 = JSON.parse(localStorage.getItem('queData'));
     temp1['verkstad'] = kassaNr;
     temp1['totalVerk'] = antalIKö;
     localStorage.setItem('queData', JSON.stringify(temp1));
}




function flashText(queNbrId) {
    var text = document.getElementById(queNbrId);
    text.style.color = (text.style.color=='red') ? 'black':'red';
}


function loadData(){
     var temp1 = JSON.parse(localStorage.getItem('queData'));
     document.getElementById("kassaNr").innerHTML = temp1.kassa;
     document.getElementById("totalInQueNr").innerHTML = temp1.totalIKassa;
     document.getElementById("radQueNr").innerHTML = temp1.radgivning;
     document.getElementById("totalRadQueNr").innerHTML = temp1.totalRad;
     document.getElementById("verkNbr").innerHTML = temp1.verkstad;
     document.getElementById("totalVerkNbr").innerHTML = temp1.totalVerk;

}


