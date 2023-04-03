function writeCards(listOfNames, eventName){
    const newArray= []
    for(let i=0; i < listOfNames.length; i++){
        let message   
        message = `Thank you, ${listOfNames[i]}, for the wonderful ${eventName} gift!`
        newArray[i] = message     
    }
    return newArray
}
function countDown(number){
    while (number!= -1){
        console.log(number)
        number--
    }
}
