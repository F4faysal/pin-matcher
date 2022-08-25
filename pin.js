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