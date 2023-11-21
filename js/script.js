
const button = document.querySelector('#button');
let scount = document.getElementById('subtitle').innerText;

button.addEventListener('click', function(){
    
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let km = document.getElementById('kilometer');
    let eta = document.getElementById('eta');
    
    console.log(name, surname, km, eta);

    let price = km.value * 0.21;

    if(eta.value < 18){
        price -= (price * 20) / 100;
        scount = 'hai diritto ad uno sconto del 20%'
    } else if(eta.value > 65){
        price -= (price * 40) / 100;
        scount = 'hai diritto ad uno sconto del 40%'
    }

    console.log(price);

    document.getElementById('welcome').innerHTML = price.toFixed(2);
    document.getElementById('subtitle').innerText = 'Enjoy your ticket and your trip! ' + scount;

})