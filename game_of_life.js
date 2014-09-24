// class to represent a cell
function Cell(x, y){
    this.x = x;
    this.y = y;
    this.neighbors = 0;  // number of cell (x,y)'s live neighbors
    this.live = 0;
}

// class to represent the grid. A grid is composed of cells
function Grid(size){
    var that = this;
    this.size = size;
    // initializes a grid of dead cells with dimensions size
    that.grid = new Array(size);

    for (var i = 0; i < size; i++){
        this.grid[i] = new Array(size);
    }

    for (var i = 0; i < size; i++){
        for (var j = 0; j < size; j++){
            this.grid[i][j] = new Cell(i, j);
        }
    }

    // creates a live cell at position (x,y) in the grid
    Grid.prototype.createLiveCell = function(x, y){
        this.grid[x][y].live = 1;
    }

    // creates a dead cell at position (x,y) in the grid
    Grid.prototype.createDeadCell = function(x, y){
        this.grid[x][y].live = 0;
    }  

    // perform the next step of the simulation
    Grid.prototype.evolve = function(){
        this.getAllNeighbors();
        updateCells();
        updateCanvas();
    }

    // applies function f to all cells in grid g
    var each = function(f){
        for (var i = 0; i < size; i++){
            for (var j = 0; j < size; j++){
                f(i, j);
            }
        }
    }

    // calculates the number of live neighbors each cell has and updates the neighbors field of Cell
    Grid.prototype.getAllNeighbors = function(){
        // calculates number of neighbors for cell (x, y)
        var getNeighbors = function(x, y) {
            var leftBound = Math.max(x - 1, 0);
            var rightBound = Math.min(x + 1, that.size - 1);
            var topBound = Math.max(y - 1, 0);
            var bottomBound = Math.min(y + 1, that.size - 1);

            var cell = that.grid[x][y];

            var liveNeighbors = 0;

            // prevent cell (x,y) from being counted as a neighbor
            if (cell.live == 1){
                liveNeighbors--;
            }
 
            for (var i = leftBound; i <= rightBound; i++){
                for (var j = topBound; j <= bottomBound; j++){
                    if (that.grid[i][j].live == 1){
                        liveNeighbors++
                    }
                }
            }
            cell.neighbors = liveNeighbors;
        }
        each(getNeighbors);
    }

    // calculates the next state of the grid based on each cell's neighbors
    var updateCells = function() {
        // determines whether cell should be live or dead, based on the number of neighbors
        var updateCell = function(x, y) {
            var cell = that.grid[x][y];
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
        each(updateCell);
    }

   // updates the canvas on the html page to show result of each evolution
    var updateCanvas = function() {
        // fills cell (x,y) on grid g with black or white
        var fillCell = function(x, y) {
            var cell = that.grid[x][y];
            if (cell.live == 1){
                that.getCellFromCoordinates(y,x).addClass("live");
            }
            else {
                that.getCellFromCoordinates(y,x).removeClass("live");
            }
        }
        each(fillCell);
    }

    // get the div corresponding to cell (x,y)
    Grid.prototype.getCellFromCoordinates = function(x, y){
        return $("#maingrid").children().eq(x).children().eq(y);
    }

    // make all cells dead
    Grid.prototype.clearGrid = function(){
        // makes cell (x,y) dead
        var clear = function(x, y) {
            that.grid[x][y].live = 0;
        }
        each(clear);
        updateCanvas();
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

        updateCanvas();
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

        updateCanvas();
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
        
        updateCanvas();
    }

    // initialize the grid to create the pentadecathlon pattern
    Grid.prototype.pentadecathlon = function(){
        this.createLiveCell(11,19);
        this.createLiveCell(12,19);
        this.createLiveCell(13,18);
        this.createLiveCell(13,20);
        this.createLiveCell(14,19);
        this.createLiveCell(15,19);
        this.createLiveCell(16,19);
        this.createLiveCell(17,19);
        this.createLiveCell(18,18);        
        this.createLiveCell(18,20);
        this.createLiveCell(19,19);
        this.createLiveCell(20,19);

        updateCanvas();
    }
}

function createDisplay(grid){
    // time between steps in milliseconds
    var interval;
    // keeps track of whether the mouse is being dragged currently
    var dragging = false;

    var maindiv = $("#maingrid");

    // create a grid of rows of divs to represent cells
    for (var i = 0; i < grid.size; i++){
        var row = document.createElement("div");
        row.className = "row";
        maindiv.append(row);

        for (var j = 0; j < grid.size; j++){
            var cell = document.createElement("div");
            cell.className = "cell"
            row.appendChild(cell);
        }
    }

    // when a cell is clicked, toggle it's state (live/dead)
    $(".cell").on("click", function(){
        var row = $(this).index();
        var col = $(this).parent().index();

        if ($(this).hasClass("live")){
            grid.createDeadCell(row, col);
            $(this).removeClass("live");
        }
        else {
            grid.createLiveCell(row, col);
            $(this).addClass("live");
        }
    });

    // dragging starts when the mouse is pressed down
    $(".cell").on("mousedown", function(){
        dragging = true;
    })

    // dragging stops when the mouse is finished clicking
    $(".cell").on("mouseup", function(){
        dragging = false;
    })

    // dragging should be turned off if the mouse leaves the grid
    $("#maingrid").on("mouseleave", function(){
        dragging = false;
    })

    // if mouse is being dragged and it enters a cell, make the cell live
    $(".cell").on("mouseenter", function(){
        if (dragging){
            var row = $(this).index();
            var col = $(this).parent().index();

            grid.createLiveCell(row, col);
            $(this).addClass("live");   
        }
    });

    // when the start button is clicked, start the simulation
    $("#start").on("click", function(){
        var speed = $("#speed").val();
        interval = setInterval(function() {
            grid.evolve();
        }, speed)

        // disable start button and speed control, enable stop button
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("speed").disabled = true;
    });

    // when the stop button is clicked, stop the simulation
    $("#stop").on("click", function(){
        clearInterval(interval);

        // disable stop button, enable start button and speed control
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("speed").disabled = false;
    });

    // when the step button is clicked, do one step of the simulation
    $("#step").on("click", function(){
        grid.evolve();
    });

    // when the clear button is clicked, make every cell dead
    $("#clear").on("click", function(){
        grid.clearGrid();

        for (var i = 0; i < grid.size; i++){
            for (var j = 0; j < grid.size; j++){
                grid.getCellFromCoordinates(j,i).removeClass("live"); 
            }
        }
    });

    $("#speed").on("change", function(){
        var speed = $("#speed").val();
        document.getElementById("speed_display").innerHTML = speed;
    });


    // PATTERNS
    $("#pulsar").on("click", function(){
        grid.pulsar();
    });


    $("#gun").on("click", function(){
        grid.gun();
    });


    $("#octagon2").on("click", function(){
        grid.octagon2();
    });

    $("#pentadecathlon").on("click", function(){
        grid.pentadecathlon();
    });

    // create a random pattern of live cells
    $("#random").on("click", function(){
        for (var i = 0; i < grid.size; i++){
            for (var j = 0; j < grid.size; j++){
                if (Math.random() < 0.4){
                    grid.getCellFromCoordinates(j,i).addClass("live"); 
                    grid.createLiveCell(i,j);
                }
            }
        }
    });
}




