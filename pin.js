function getPin(){
    const pin = genaratPin();
    const pinString = pin +'';
    if (pinString.length  === 4 ){
        return pin ;
    }
    else{

        return getPin();
    }
}

function genaratPin (){
    const random = Math.round(Math.random()*10000) ;
    return random ;
}


document.getElementById('generate-pin-btn').addEventListener('click', function(){
    const pin = getPin();
    const viewPin = document.getElementById('form-control');
    viewPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    
    const number = event.target.innerText ;
    const fild =  document.getElementById('cal-form-control')
    const privaseNuber = fild.value ;
    if (isNaN(number)){
        if (number === 'C' ){
            fild.value = '';
            }
        else if(number === '<') {
            const  digit = privaseNuber.split('');
            digit.pop();
            const remaintDigit = digit.join('')
            console.log(remaintDigit)
        }

    }
    else{
      
      const carrentNumber = privaseNuber + number; 
      fild.value = carrentNumber;
    }
    
 

    
  
})