var grid = [
    ['','',''],
    ['','',''],
    ['','',''],
];

function checkWinner(){
    const conditionX = 'XXX'
    const conditionO = 'OOO'
    //diaonal
    let dOne= grid[0][0] + grid[1][1] + grid[2][2]
    let dTwo= grid[0][2] + grid[1][1] + grid[2][0]

    if(dOne === conditionO || dTwo === conditionO){
        console.log('winner O d')
    }
    
    if(dOne === conditionX || dTwo === conditionX){
        console.log('winner X d')
    }

    for(var i = 0; i < grid.length; i++){
        //Horizontal
        if (grid[i].join('') === conditionO){
            console.log('winner O')
        }
        if (grid[i].join('') === conditionX){
            console.log('winner X')
        }
       
        let newBoard = [
            Array(3),
            Array(3),
            Array(3)
        ];

        for(var k = 0; k < grid[i].length; k++){
            newBoard[i][k] = grid[k][i]
        }

        //Horizontal
        if (newBoard[i].join('') === conditionO){
            console.log('winner O')
        }
        if (newBoard[i].join('') === conditionX){
            console.log('winner X')
        }

    }
}

var clickCounter = 0;


window.onload = function() {
    document.getElementById("identifyPlayer").innerHTML = playerFormatter('X');
  };



function onClick(event) {
    let player = determinePlayer();
    var eventId = getId(event)
    writeBoard(player, eventId)
    document.getElementById("identifyPlayer").innerHTML = playerFormatter(determineNextPlayer());
}

function writeBoard(player,eventId){
    if(grid[eventId[0]][eventId[1]]){
        return;
    }
    clickCounter = clickCounter + 1
    

    grid[eventId[0]][eventId[1]] = player
    document.getElementById(eventId).innerHTML = player;
    checkWinner();
}

function playerFormatter(player){
    return "It's " + player + " turn";
}

function determineNextPlayer(){
    if(clickCounter % 2 === 0){
        return 'X'
    }

    return 'O';
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

