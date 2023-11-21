
const button = document.querySelector('#button');

button.addEventListener('click', function(){
    
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let km = document.getElementById('kilometer');
    let eta = document.getElementById('eta');
    
    console.log(name, surname, km, eta);

    let price = km.value * 0.21;
    let scount = 'prezzo standard'

    if(eta.value < 18){
        price -= (price * 20) / 100;
        scount = 'hai diritto ad uno sconto del 20%'
    } else if(eta.value > 65){
        price -= (price * 40) / 100;
        scount = 'hai diritto ad uno sconto del 40%'
    }

    console.log(price);

    document.getElementById('welcome').innerHTML = price.toFixed(2);
    document.getElementById('subtitle').innerHTML += scount;

})