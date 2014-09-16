// class to represent a cell
function Cell(x, y){
    this.x = x;
    this.y = y;
    this.neighbors = 0;  // number of cell (x,y)'s live neighbors
    this.live = 0;
}

// class to represent the grid. A grid is composed of cells
function Grid(size, canvas){
    this.size = size;
    this.canvas = canvas; // instance of canvas to draw on
    this.grid = null;

    // initializes a grid of dead cells with dimensions size
    Grid.prototype.initializeGrid = function(){
        this.grid = new Array(this.size);

        for (var i = 0; i < this.size; i++){
            this.grid[i] = new Array(this.size);
        }

        for (var i = 0; i < this.size; i++){
            for (var j = 0; j < this.size; j++){
                this.grid[i][j] = new Cell(i, j);
            }
        }
    }

    // creates a live cell at position (x,y) in the grid
    Grid.prototype.createLiveCell = function(x, y){
        this.grid[x][y].live = 1;
    }

    // starts the game of life
    Grid.prototype.startGame = function(){
        var g = this;
        setInterval(function() {
            g.getAllNeighbors();
            g.updateCells();
            g.updateCanvas();
        }, 500)
    }   

    Grid.prototype.evolve = function(){
        this.getAllNeighbors();
        this.updateCells();
    }

    // initializes the grid to create the pulsar pattern
    Grid.prototype.pulsar = function(){
        this.createLiveCell(4,2);
        this.createLiveCell(5,2);
        this.createLiveCell(6,2);
        this.createLiveCell(10,2);
        this.createLiveCell(11,2);
        this.createLiveCell(12,2);
        this.createLiveCell(2,4);
        this.createLiveCell(2,5);
        this.createLiveCell(2,6);
        this.createLiveCell(7,4);
        this.createLiveCell(7,5);
        this.createLiveCell(7,6);
        this.createLiveCell(9,4);
        this.createLiveCell(9,5);
        this.createLiveCell(9,6);
        this.createLiveCell(14,4);
        this.createLiveCell(14,5);
        this.createLiveCell(14,6);
        this.createLiveCell(4,7);
        this.createLiveCell(5,7);
        this.createLiveCell(6,7);
        this.createLiveCell(10,7);
        this.createLiveCell(11,7);
        this.createLiveCell(12,7);

        this.createLiveCell(4,9);
        this.createLiveCell(5,9);
        this.createLiveCell(6,9);
        this.createLiveCell(10,9);
        this.createLiveCell(11,9);
        this.createLiveCell(12,9);
        this.createLiveCell(2,10);
        this.createLiveCell(2,11);
        this.createLiveCell(2,12);
        this.createLiveCell(7,10);
        this.createLiveCell(7,11);
        this.createLiveCell(7,12);
        this.createLiveCell(9,10);
        this.createLiveCell(9,11);
        this.createLiveCell(9,12);
        this.createLiveCell(14,10);
        this.createLiveCell(14,11);
        this.createLiveCell(14,12);
        this.createLiveCell(4,14);
        this.createLiveCell(5,14);
        this.createLiveCell(6,14);
        this.createLiveCell(10,14);
        this.createLiveCell(11,14);
        this.createLiveCell(12,14);

        this.updateCanvas();
    }

    // initializes the grid to create the gun pattern
    Grid.prototype.gun = function(){
        this.createLiveCell(1,5);
        this.createLiveCell(1,6);
        this.createLiveCell(2,5);
        this.createLiveCell(2,6);
        this.createLiveCell(11,5);
        this.createLiveCell(11,6);        
        this.createLiveCell(11,7);
        this.createLiveCell(12,4);
        this.createLiveCell(12,8);
        this.createLiveCell(13,3);
        this.createLiveCell(13,9);
        this.createLiveCell(14,3);
        this.createLiveCell(14,9);
        this.createLiveCell(15,6);
        this.createLiveCell(16,4);
        this.createLiveCell(16,8);
        this.createLiveCell(17,5);
        this.createLiveCell(17,6);        
        this.createLiveCell(17,7);
        this.createLiveCell(18,6);
        this.createLiveCell(21,3);
        this.createLiveCell(21,4);
        this.createLiveCell(21,5);
        this.createLiveCell(22,3);
        this.createLiveCell(22,4);
        this.createLiveCell(22,5);
        this.createLiveCell(23,2);
        this.createLiveCell(23,6);        
        this.createLiveCell(25,1);
        this.createLiveCell(25,2);
        this.createLiveCell(25,6);
        this.createLiveCell(25,7);
        this.createLiveCell(35,3);
        this.createLiveCell(35,4);
        this.createLiveCell(36,3);
        this.createLiveCell(36,4);

        this.updateCanvas();
    }

    // initializes the grid to create the octagon2 pattern
    Grid.prototype.octagon2 = function(){
        this.createLiveCell(9,2);
        this.createLiveCell(10,2);
        this.createLiveCell(8,3);
        this.createLiveCell(11,3);
        this.createLiveCell(7,4);
        this.createLiveCell(12,4);
        this.createLiveCell(6,5);
        this.createLiveCell(13,5);        
        this.createLiveCell(6,6);
        this.createLiveCell(13,6);
        this.createLiveCell(7,7);
        this.createLiveCell(12,7);
        this.createLiveCell(8,8);
        this.createLiveCell(11,8);
        this.createLiveCell(9,9);
        this.createLiveCell(10,9);
        
        this.updateCanvas();
    }

    // initializes grid with a random pattern
    Grid.prototype.randomPattern = function(){
        var num = Math.floor(Math.random()*3) + 1;
        if (num == 1){
            this.pulsar();
        }
        if (num == 2){
            this.octagon2();
        }
        if (num == 3){
            this.gun();
        }
    }

    // applies function f to all cells in grid g
    Grid.prototype.each = function(g, f){
        for (var i = 0; i < this.size; i++){
            for (var j = 0; j < this.size; j++){
                f(g, i,j);
            }
        }
    }

    // calculates the number of live neighbors each cell has and updates the neighbors field of Cell
    Grid.prototype.getAllNeighbors = function(){
        var g = this;

        // calculates number of neighbors for cell (x, y)
        var getNeighbors = function(g, x, y) {
            var leftBound = Math.max(x - 1, 0);
            var rightBound = Math.min(x + 1, g.size - 1);
            var topBound = Math.max(y - 1, 0);
            var bottomBound = Math.min(y + 1, g.size - 1);

            var cell = g.grid[x][y];

            var liveNeighbors = 0;

            // prevent cell (x,y) from being counted as a neighbor
            if (cell.live == 1){
                liveNeighbors--;
            }
 
            for (var i = leftBound; i <= rightBound; i++){
                for (var j = topBound; j <= bottomBound; j++){
                    if (g.grid[i][j].live == 1){
                        liveNeighbors++
                    }
                }
            }
            cell.neighbors = liveNeighbors;
        }
        this.each(g, getNeighbors);
    }

    // calculates the next state of the grid based on each cell's neighbors
    Grid.prototype.updateCells = function() {
        var g = this;

        // determines whether cell should be live or dead, based on the number of neighbors
        var updateCell = function(g, x, y) {
            var cell = g.grid[x][y];
            if (cell.live == 1){
                if (cell.neighbors == 2 || cell.neighbors == 3){
                    cell.live = 1;
                }
                else {
                    cell.live = 0;
                }
            }
            else {
                if (cell.neighbors == 3){
                    cell.live = 1;
                }
            }
        }
        this.each(g, updateCell);
    }

    // updates the canvas on the html page to show result of each evolution
    Grid.prototype.updateCanvas = function() {
        var g = this;

        // fills cell (x,y) on grid g with black or white
        var fillCell = function(g, x, y) {
            var cell = g.grid[x][y];
            if (cell.live == 1){
                g.canvas.fill('black', x, y);
            }
            else {
                g.canvas.fill('white', x, y);
            }

        }
        this.each(g, fillCell);
        this.canvas.drawGridLines();
    }

}

// Canvas class that contains all drawing functions needed
function Canvas(id, size) {
    this.id = id;
    this.size = size;
    this.ctx = null;
    this.cellWidth = null;
    this.cellHeight = null;

    var canvas = document.getElementById(this.id);
    this.ctx = canvas.getContext('2d');

    this.width = canvas.width;
    this.height = canvas.height;
    this.cellWidth = canvas.width / this.size;
    this.cellHeight = canvas.height / this.size;

    // fills cell (x, y) with color color
    Canvas.prototype.fill = function(color, x, y){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight);
    }

    // draws grid lines
    Canvas.prototype.drawGridLines = function(){

        this.ctx.strokeStyle = 'black';
        this.ctx.strokeWidth = 1;

        this.ctx.beginPath();

        var x;
        var y;

        for (var i = 1; i <= this.size; i++) {
            x = (i * this.cellWidth);
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.height);
            this.ctx.stroke();
        }

        for (var i = 1; i <= this.size; i++) {
            y = (i * this.cellHeight);
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.stroke();
        }

        this.ctx.closePath();
    }
}