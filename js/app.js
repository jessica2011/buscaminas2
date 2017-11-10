var board = document.querySelector('.board-js')

var BOMB = '*',
    SHOW = 'X';

var matrixOrigin = [[1, 1, 1, ''],
                    [1, BOMB, 1, ''],
                    [1, 1, 2, 1],
                    ['', '', 1, BOMB]];

board.addEventListener('click', displayCell);

function displayCell (event){
    //para q las celdas no se muevan
    if(event.target.matches('td')){
        var value = getCell(event);

        event.target.textContent = value;

        if (value === BOMB){
            showMatrix('red');
        }
    }
}

function getCell (event){
    var row = parseInt(event.target.parentElement.dataset.row);

    var column = parseInt(event.target.parentElement.dataset.column);

    return matrixOrigin[row - 1][column - 1];

}

function showMatriz (color) {
    for (var i = 0; i < matrixOrigin.length; i++) {
        for (var j = 0; j < matrixOrigin[i].length; j++){
            if (matrixOrigin[i][j] === BOMB)

        }
    }
}
