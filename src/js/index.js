function onClick(event) {
    var eventId = getId(event)
    console.log(eventId)
    document.getElementById(eventId).style="background-color: red"
}

function getId(eventObject){
    return eventObject['srcElement']['id'];
}

var grid = ['azul','verde','amarelo']

console.log(grid[1])