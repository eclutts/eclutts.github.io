class threes_board {
    constructor(board_state) {
        this.board_state = board_state;
    }
    move_up = function() {
        let q = false;
        for (let i = 1; i < this.board_state.length; i++) {
            for (let j = 0; j < this.board_state[0].length; j++) {
                let goto = this.board_state[i-1][j];
                let here = this.board_state[i][j];
                if(goto == 0) {
                    q = true;
                    goto = here;
                    here = 0;
                } else if ((here + goto == 3) && (here != 0)) {
                    q = true;
                    goto = 3;
                    here = 0;
                } else if ((here == goto) && here >= 3) {
                    q = true;
                    goto++;
                    here = 0;
                }
                this.board_state[i-1][j] = goto;
                this.board_state[i][j] = here;
            }
        }
        return q;
    }
    move_down = function() {
        let q = false;
        for (let i = 2; i >= 0; i--) {
            for (let j = 0; j < this.board_state[0].length; j++) {
                let goto = this.board_state[i+1][j];
                let here = this.board_state[i][j];
                if(goto == 0) {
                    q = true;
                    goto = here;
                    here = 0;
                } else if ((here + goto == 3) && (here != 0)) {
                    q = true;
                    goto = 3;
                    here = 0;
                } else if ((here == goto) && here >= 3) {
                    q = true;
                    goto++;
                    here = 0;
                }
                this.board_state[i+1][j] = goto;
                this.board_state[i][j] = here;
            }
        }
        return q;
    }
    move_left = function() {
        let q = false;
        for (let i = 0; i < this.board_state.length; i++) {
            for (let j = 1; j < this.board_state.length; j++) {
                let goto = this.board_state[i][j-1];
                let here = this.board_state[i][j];
                if(goto == 0) {
                    q = true;
                    goto = here;
                    here = 0;
                } else if ((here + goto == 3) && (here != 0)) {
                    q = true;
                    goto = 3;
                    here = 0;
                } else if ((here == goto) && here >= 3) {
                    q = true;
                    goto++;
                    here = 0;
                }
                this.board_state[i][j-1] = goto;
                this.board_state[i][j] = here;
            }
        }
        return q;
    }
    move_right = function() {
        let q = false;
        for (let i = 0; i < this.board_state.length; i++) {
            for (let j = 2; j >= 0; j--) {
                let goto = this.board_state[i][j+1];
                let here = this.board_state[i][j];
                if(goto == 0) {
                    q = true;
                    goto = here;
                    here = 0;
                } else if ((here + goto == 3) && (here != 0)) {
                    q = true;
                    goto = 3;
                    here = 0;
                } else if ((here == goto) && here >= 3) {
                    q = true;
                    goto++;
                    here = 0;
                }
                this.board_state[i][j+1] = goto;
                this.board_state[i][j] = here;
            }
        }
        return q;
    }



}



class threes_game {
    constructor(...board_state) {
        if (board_state == 0) {
            // Initializes default board_state (6 random are assigned values 1 to 3)
            board_state = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
            let arr = [];
            for(let i = 0; i < 6; i++) {
                let a = Math.floor(Math.random() * 16);
                while (arr.includes(a)) {
                    a += 1;
                    a %= 16;
                }
                arr.push(a);
            }

            let oneChance = 6;
            let twoChance = 13;
            for(let i = 0; i < 6; i++) {
                let odds = Math.floor(Math.random() * 20);
                if (odds < oneChance) {
                    board_state[Math.floor(arr[i] / 4)][arr[i] % 4] = 1;
                    oneChance -= 2;
                    twoChance -= 1;
                } else if(odds > twoChance) {
                    board_state[Math.floor(arr[i] / 4)][arr[i] % 4] = 2;
                    oneChance += 1;
                    twoChance += 2;
                } else {
                    board_state[Math.floor(arr[i] / 4)][arr[i] % 4] = 3;
                    oneChance += 1;
                    twoChance -= 1;
                }
            }
        }
        this.board = new threes_board(board_state)
    }

    move_up = function() {
        let q = this.board.move_up()
        if (q) {
            let arr = findAllIndex(this.board.board_state[3], 0)
            this.board.board_state[3][arr[Math.floor(Math.random()*arr.length)]] = this.get_nextval()
        }
        return this.check_lost()
    }

    move_down = function() {
        let q = this.board.move_down()
        if (q) {
            let arr = findAllIndex(this.board.board_state[0], 0)
            this.board.board_state[0][arr[Math.floor(Math.random()*arr.length)]] = this.get_nextval()
        }
        return this.check_lost()
    }

    move_left = function() {
        let q = this.board.move_left()
        if (q) {
            let arr = findAllIndex(arr_column(this.board.board_state, 3), 0)
            this.board.board_state[arr[Math.floor(Math.random()*arr.length)]][3] = this.get_nextval()
        }
        return this.check_lost()
    }

    move_right = function() {
        let q = this.board.move_right()
        if (q) {
            let arr = findAllIndex(arr_column(this.board.board_state, 0), 0)
            this.board.board_state[arr[Math.floor(Math.random()*arr.length)]][0] = this.get_nextval()
        }
        return this.check_lost()
    }

    check_lost = function() {
        if (Math.min(this.board.board_state.map(x => Math.min(x))) == 0) {
            return false
        }

        for (let i = 0; i < this.board.board_state.length; i++) {
            for (let j = 0; j < this.board.board_state.length; j++){
                if (i != 3) {
                    if (this.board.board_state[i][j] == this.board.board_state[i+1][j] && this.board.board_state[i][j] >= 3) {
                        return false;
                    } else if (this.board.board_state[i][j] + this.board.board_state[i+1][j] == 3) {
                        return false;
                    }
                }
                if (j != 3) {
                    if (this.board.board_state[i][j] == this.board.board_state[i][j+1] && this.board.board_state[i][j] >= 3) {
                        return false;
                    } else if (this.board.board_state[i][j] + this.board.board_state[i][j+1] == 3) {
                        return false;
                    }
                }
            }
        }
        return true;


    }

    get_nextval = function() {
        return 3
    }


}

const arr_column = (arr, n) => arr.map((x) => x[n])

function findAllIndex(arr, val) {
    let tbr = []
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == val) {
            tbr.push(i)
        }
    }
    return tbr
}