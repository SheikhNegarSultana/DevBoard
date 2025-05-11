function setInnerText( id , value ){
    document.getElementById( id ).innerText = value;
}

function innerTextToValue(id){
    const value = parseInt(document.getElementById(id).innerText);
    return value;
}