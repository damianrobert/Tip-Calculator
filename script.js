let container = document.querySelector('#container')

function fixDecimal(decimal){
    decimal = Math.ceil(decimal * 100) / 100;
    decimal = decimal.toFixed(2)
    return "$" + decimal
}

function splitPeople(value){
    if(value === 1) return value + " person"
    return value + " people"
}


function update(){
    let bill = Number(document.querySelector('#yourBill').value)
    let tipPercent = Number(document.querySelector('#tipInput').value)
    let splitInput  = Number(document.querySelector('#splitInput').value)
    console.log({bill, tipPercent, splitInput})
    document.getElementById('tipPercent').innerHTML = tipPercent + "%"
    document.getElementById('splitValue').innerHTML = splitPeople(splitInput)
    let tipValue = bill * (tipPercent / 100)
    let totalWithTip = bill + tipValue;
    let billEach = (bill + tipValue) / splitInput
    let tipEach = tipValue / splitInput

    document.getElementById('tipValue').innerHTML = fixDecimal(tipValue)
    document.getElementById('totalWithTip').innerHTML = fixDecimal(totalWithTip)
    document.getElementById('billEach').innerHTML = fixDecimal(billEach)
    document.getElementById('tipEach').innerHTML = fixDecimal(tipEach)
    
}

container.addEventListener('input', update)