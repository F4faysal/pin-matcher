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
            fild.value = remaintDigit ;
        }
    }
    else{
      const carrentNumber = privaseNuber + number; 
      fild.value = carrentNumber;
    }
})

document.getElementById('varify-pin').addEventListener('click', function(){
    const displayPin = document.getElementById('form-control');
    const cartentPin = displayPin.value;
    const typeNumberFild = document.getElementById('cal-form-control');
    const typeNumber = typeNumberFild.value;

    const pinSuscessMessage =  document.getElementById('ipn-suscess');
    const pinFaildMessage =  document.getElementById('pin-faild');
    if (typeNumber===cartentPin){
       
        pinSuscessMessage.style.display = 'block';
        pinFaildMessage.style.display = 'none';
    }
    else{
        
        pinFaildMessage.style.display = 'block';
        pinSuscessMessage.style.display = 'none';

    }

})