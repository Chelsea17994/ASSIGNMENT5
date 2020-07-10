function myFunction(){
    var trElements = document.getElementsByTagName('tr');
    var btnZebra = document.getElementById('btnZebra');
    var btnZebra2 = document.getElementById('btnZebra2');
    for (var i = 0; i < trElements.length; i++) {
        if (i === 0) {
            
        }
        else if (i % 2 === 0) {
            
        }
       else {
           /*Zebra stripe odd rows*/
            trElements[i].style.background = 'white';
            trElements[i].style.color = 'black';
            
            btnZebra.style.visibility = 'hidden';
            btnZebra2.style.visibility = 'visible';
        }                 
    }          
}

