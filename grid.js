function Grid(size, canvas){
    this.size = size;
    this.canvas = canvas;
    this.grid = null;
    Grid.prototype.initializeGrid = function(){
        this.grid = create2dArray(this.size, this.size);
    }

Grid.prototype.startGame = function(){
    var g = this;
    setInterval(function() {
        g.updateCells();
    }, 500)
}

Grid.prototype.pulsar = function(){
        // pulsar pattern
        this.grid[4][2] = 1;
        this.grid[5][2] = 1;
        this.grid[6][2] = 1;
        this.grid[10][2] = 1;
        this.grid[11][2] = 1;
        this.grid[12][2] = 1;
        this.grid[2][4] = 1;
        this.grid[2][5] = 1;
        this.grid[2][6] = 1;
        this.grid[7][4] = 1;
        this.grid[7][5] = 1;
        this.grid[7][6] = 1;
        this.grid[9][4] = 1;
        this.grid[9][5] = 1;
        this.grid[9][6] = 1;
        this.grid[14][4] = 1;
        this.grid[14][5] = 1;
        this.grid[14][6] = 1;
        this.grid[4][7] = 1;
        this.grid[5][7] = 1;
        this.grid[6][7] = 1;
        this.grid[10][7] = 1;
        this.grid[11][7] = 1;
        this.grid[12][7] = 1;

        this.grid[4][9] = 1;
        this.grid[5][9] = 1;
        this.grid[6][9] = 1;
        this.grid[10][9] = 1;
        this.grid[11][9] = 1;
        this.grid[12][9] = 1;
        this.grid[2][10] = 1;
        this.grid[2][11] = 1;
        this.grid[2][12] = 1;
        this.grid[7][10] = 1;
        this.grid[7][11] = 1;
        this.grid[7][12] = 1;
        this.grid[9][10] = 1;
        this.grid[9][11] = 1;
        this.grid[9][12] = 1;
        this.grid[14][10] = 1;
        this.grid[14][11] = 1;
        this.grid[14][12] = 1;
        this.grid[4][14] = 1;
        this.grid[5][14] = 1;
        this.grid[6][14] = 1;
        this.grid[10][14] = 1;
        this.grid[11][14] = 1;
        this.grid[12][14] = 1;

        this.updateCanvas();
    }

    Grid.prototype.getNeighbors = function(x, y) {
        var leftBound = Math.max(x - 1, 0);
        var rightBound = Math.min(x + 1, this.size - 1);
        var topBound = Math.max(y - 1, 0);
        var bottomBound = Math.min(y + 1, this.size - 1);

        var liveNeighbors = 0;

        if (this.grid[x][y] == 1){
            liveNeighbors--;
        }
        
        for (var i = leftBound; i <= rightBound; i++){
            for (var j = topBound; j <= bottomBound; j++){
                if (this.grid[i][j] == 1){
                    liveNeighbors++
                }
            }
        }
        return liveNeighbors;
    }

    Grid.prototype.updateCells = function() {

        var newGrid = new Array(this.size);

        for (var i = 0; i < this.size; i++){
            newGrid[i] = new Array(this.size);
        }

        for (var i = 0; i < this.size; i++){
            for (var j = 0; j < this.size; j++){
                newGrid[i][j] = 0;
            }
        }
        for (var i = 0; i < this.size; i++){
            for (var j = 0; j < this.size; j++){

                var liveNeighbors = this.getNeighbors(i, j, 20, this.grid);

                if (this.grid[i][j] == 1){
                    if (liveNeighbors == 2 || liveNeighbors == 3){
                        newGrid[i][j] = 1;
                    }
                    else {
                        newGrid[i][j] = 0;
                    }
                }
                else {
                    if (liveNeighbors == 3){
                        newGrid[i][j] = 1;
                    }
                }
            }
        }

        this.grid = newGrid;
        this.updateCanvas(this.grid, this.size);
    }

    Grid.prototype.updateCanvas = function() {
        for (var i = 0; i < this.size; i++){
            //var str = ""
            for (var j = 0; j < this.size; j++){
                if (this.grid[i][j] == 1){
                this.canvas.fill('black', i, j);
            }
            else {
                this.canvas.fill('white', i, j);
            }
            }
        }
        this.canvas.drawGrid();
    }
}

function create2dArray(x, y) {
        var arr = grid = new Array(x);

        for (var i = 0; i < x; i++){
            arr[i] = new Array(y);
        }

        for (var i = 0; i < x; i++){
            for (var j = 0; j < y; j++){
                arr[i][j] = 0;
            }
        }

        return arr;
}
function Canvas(id, size) {
    this.id = id;
    this.size = size;
    this.ctx = null;
    this.cellWidth = null;
    this.cellHeight = null;

    Canvas.prototype.createCanvas = function(){
        var canvas = document.getElementById(this.id);
        this.ctx = canvas.getContext('2d');

        this.cellWidth = canvas.width / this.size;
        this.cellHeight = canvas.height / this.size;

    }
    Canvas.prototype.fill = function(color, x, y){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight);
    }

    Canvas.prototype.drawGrid = function(){
            var iWidth = cnv.width;
            var iHeight = cnv.height;

            this.ctx.strokeStyle = 'black';
            this.ctx.strokeWidth = 1;

            this.ctx.beginPath();

            var iCount = null;
            var i = null;
            var x = null;
            var y = null;

            iCount = Math.floor(iWidth / size);

            for (i = 1; i <= iCount; i++) {
                x = (i * this.cellWidth);
                this.ctx.moveTo(x, 0);
                this.ctx.lineTo(x, cnv.height);
                this.ctx.stroke();
            }


            iCount = Math.floor(iHeight / size);

            for (i = 1; i <= iCount; i++) {
                y = (i * this.cellHeight);
                this.ctx.moveTo(0, y);
                this.ctx.lineTo(cnv.width, y);
                this.ctx.stroke();
            }

            this.ctx.closePath();

            return;
    }
}