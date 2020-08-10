var grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

function checkEqualStr(str) {
    if (str.length < 3) return '';
    //check str for all characters the same
    return /^(.)\1+$/.test(str) ? str[0] : '';
}

function checkEqualArray(arr) {
    return arr.filter((entry) => {
        return checkEqualStr(entry.join(''));
    })[0]
}

function checkWinner() {
    //diaonal
    let dOne = grid[0][0] + grid[1][1] + grid[2][2]
    let dTwo = grid[0][2] + grid[1][1] + grid[2][0]

    let newBoard = [
        Array(3),
        Array(3),
        Array(3)
    ];
    // i = i + 1 ===> i++
    for (var i = 0; i < grid.length; i++) {
        console.log(i)
        for (var k = 0; k < grid[i].length; k++) {
            console.log(k)
            newBoard[i][k] = grid[k][i];
        }
    }

    return [
        checkEqualArray(newBoard),
        checkEqualStr(dOne),
        checkEqualStr(dTwo),
        checkEqualArray(grid)
    ].flat().find(e => e)

}

var clickCounter = 0;


window.onload = function () {
    document.getElementById("identifyPlayer").innerHTML = playerFormatter('X');
};

function onClick(event) {
    let player = determinePlayer();
    var eventId = getId(event)
    writeBoard(player, eventId)
    document.getElementById("identifyPlayer").innerHTML = playerFormatter(determineNextPlayer());
}

function writeBoard(player, eventId) {
    if (grid[eventId[0]][eventId[1]]) {
        return;
    }
    clickCounter = clickCounter + 1
    grid[eventId[0]][eventId[1]] = player
    document.getElementById(eventId).innerHTML = player;
    let winner = checkWinner();
    if (winner) {
        alert('Winner is ' + winner);
        location.reload();
    }
}

function playerFormatter(player) {
    return "It's " + player + " turn";
}

function determineNextPlayer() {
    if (clickCounter % 2 === 0) {
        return 'X'
    }

    return 'O';
}

function determinePlayer() {
    if (clickCounter % 2 !== 0) {
        return 'O'
    }

    return 'X';
}

function getId(eventObject) {
    return eventObject['srcElement']['id'];
}

