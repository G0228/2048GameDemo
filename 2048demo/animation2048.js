function showNumWithAnimation(i, j, randnum) {

    var numCell = $('#number-cell-' + i + '-' + j);

    numCell.css('background-color', getNumberBGColor(randnum));
    numCell.css('color', getNumberColor(randnum));
    numCell.text(randnum);

    numCell.animate({
        width: cellSideLength,
        height: cellSideLength,
        top: getPosTop(i, j),
        left: getPosLeft(i, j)
    }, 50)

}

function showMoveAnimation(fromx, fromy, tox, toy){

    var numberCell = $('#number-cell-' + fromx + '-' + fromy);
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy)
    }, 200)

}

function updateScore(score) {

    $('#score').text(score)

}