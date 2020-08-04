var grid = [
    ['','',''],
    ['','',''],
    ['','',''],
];

var clickCounter = 0;

function onClick(event) {
    let player = determinePlayer();
    clickCounter = clickCounter + 1
    var eventId = getId(event)
    console.log(grid)
    writeBoard(player, eventId)
}

function writeBoard(player,eventId){
    if(grid[eventId[0]][eventId[1]]){
        return;
    }

    grid[eventId[0]][eventId[1]] = player
    document.getElementById(eventId).innerHTML = player;



}

function determinePlayer(){

    if(clickCounter % 2 !== 0){
        return 'O'
    }

    return 'X';
}

function getId(eventObject){
    return eventObject['srcElement']['id'];
}

