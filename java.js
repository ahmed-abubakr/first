/* global console , document */

var myDiv = document.getElementById('main'),
    mybuuton = myDiv.firstElementChild,
    myFile = document.getElementById('file');

mybuuton.onclick = function () {
    'use strict';
    // this.parentNode.style.display = 'None';  
    var n = document.querySelector("#file").value.lastIndexOf("\\") ,
        a = document.querySelector("#file").value.substr(n+1);


        document.querySelector("body").style.background = 'url(' + a +')' ; 
 };