function chessBoard() {
    let newTable = document.createElement('table');

    letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''],
        figuresBlack1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;',
            '&#9820;',
            '8'
        ],
        figuresWhite1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;',
            '&#9814;',
            '1'
        ],
        figuresBlack2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;',
            '&#9823;', '7'
        ],
        figuresWhite2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;',
            '&#9817;', '2'
        ];

    for (let item = 0, line = 9; item < 10, line >= 0; item++, line--) {
        let newTr = newTable.insertRow(item);
        for (let column = 0; column < 10; column++) {
            let newTd = newTr.insertCell(column);
            switch (item) {
                case 0:
                    newTd.innerText = letters[column];
                    break;
                case 1:
                    newTd.innerHTML = figuresBlack1[column];
                    break;
                case 2:
                    newTd.innerHTML = figuresBlack2[column];
                    break;
                case 7:
                    newTd.innerHTML = figuresWhite2[column];
                    break;
                case 8:
                    newTd.innerHTML = figuresWhite1[column];
                    break;
                case 9:
                    newTd.innerText = letters[column];
                    break;
                default:
                    if (column === 0 || column === 9) {
                        newTd.innerHTML = line;
                    }
                    break;
            }
        }
    }
    document.body.append(newTable);
};

chessBoard();
