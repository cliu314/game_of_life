
// test that the correct boundaries are being calculated when finding neighbors for cells on the left edge of the grid
test("testing left edge neighbors", function() {
	var grid = new Grid(3);
	grid.createLiveCell(0,1);
	grid.createLiveCell(0,2);
	grid.createLiveCell(0,0);


	// find live neighbors for each live cell
	grid.getAllNeighbors();

	// tests that neighbors are correct
	var n = grid.grid[0][1].neighbors;
	equal(n, 2);

	var n2 = grid.grid[0][0].neighbors;
	equal(n2, 1);

	var n3 = grid.grid[0][2].neighbors;
	equal(n3, 1);

	var n4 = grid.grid[1][0].neighbors;
	equal(n4, 2);

	var n5 = grid.grid[1][1].neighbors;
	equal(n5, 3);

	var n6 = grid.grid[1][2].neighbors;
	equal(n6, 2);

	var n7 = grid.grid[2][0].neighbors;
	equal(n7, 0);

	var n8 = grid.grid[2][1].neighbors;
	equal(n8, 0);

	var n9 = grid.grid[2][2].neighbors;
	equal(n9, 0);
});

// test that game applies update rules correctly
test("testing left edge update", function() {
	var grid = new Grid(3);
	grid.createLiveCell(0,1);
	grid.createLiveCell(0,2);
	grid.createLiveCell(0,0);

	grid.evolve();

	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 1);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);

	grid.evolve();

	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 0);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});

// test that the correct boundaries are being calculated when finding neighbors for cells on the right edge
test("testing right edge neighbors", function() {
	var grid = new Grid(3);

	grid.createLiveCell(2,1);
	grid.createLiveCell(2,2);
	grid.createLiveCell(2,0);

	grid.getAllNeighbors();

	var n = grid.grid[0][0].neighbors;
	equal(n, 0);

	var n2 = grid.grid[0][1].neighbors;
	equal(n2, 0);

	var n3 = grid.grid[0][2].neighbors;
	equal(n3, 0);

	var n4 = grid.grid[1][0].neighbors;
	equal(n4, 2);

	var n5 = grid.grid[1][1].neighbors;
	equal(n5, 3);

	var n6 = grid.grid[1][2].neighbors;
	equal(n6, 2);

	var n7 = grid.grid[2][0].neighbors;
	equal(n7, 1);

	var n8 = grid.grid[2][1].neighbors;
	equal(n8, 2);

	var n9 = grid.grid[2][2].neighbors;
	equal(n9, 1);
});

test("testing right edge update", function() {
	var grid = new Grid(3);

	grid.createLiveCell(2,1);
	grid.createLiveCell(2,2);
	grid.createLiveCell(2,0);

	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 1);
	equal(grid.grid[2][2].live, 0);

	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 0);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});

// test that the correct boundaries are being calculated when finding neighbors for cells on the top edge
test("testing top edge neighbors", function() {
	var grid = new Grid(5);
	grid.createLiveCell(0,0);
	grid.createLiveCell(1,0);
	grid.createLiveCell(2,0);

	grid.getAllNeighbors();

	var n = grid.grid[0][0].neighbors;
	equal(n, 1);

	var n2 = grid.grid[0][1].neighbors;
	equal(n2, 2);

	var n3 = grid.grid[0][2].neighbors;
	equal(n3, 0);

	var n4 = grid.grid[1][0].neighbors;
	equal(n4, 2);

	var n5 = grid.grid[1][1].neighbors;
	equal(n5, 3);

	var n6 = grid.grid[1][2].neighbors;
	equal(n6, 0);

	var n7 = grid.grid[2][0].neighbors;
	equal(n7, 1);

	var n8 = grid.grid[2][1].neighbors;
	equal(n8, 2);

	var n9 = grid.grid[2][2].neighbors;
	equal(n9, 0);
});

test("testing top edge update", function() {
	var grid = new Grid(3);
	grid.createLiveCell(0,0);
	grid.createLiveCell(1,0);
	grid.createLiveCell(2,0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 1);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 0);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});

// test that the correct boundaries are being calculated when finding neighbors for cells on the bottom edge
test("testing bottom edge neighbors", function() {
	var grid = new Grid(5);

	grid.createLiveCell(0,2);
	grid.createLiveCell(1,2);
	grid.createLiveCell(2,2);

	grid.getAllNeighbors();
	var n = grid.grid[0][0].neighbors;
	equal(n, 0);

	var n2 = grid.grid[0][1].neighbors;
	equal(n2, 2);

	var n3 = grid.grid[0][2].neighbors;
	equal(n3, 1);

	var n4 = grid.grid[1][0].neighbors;
	equal(n4, 0);

	var n5 = grid.grid[1][1].neighbors;
	equal(n5, 3);

	var n6 = grid.grid[1][2].neighbors;
	equal(n6, 2);

	var n7 = grid.grid[2][0].neighbors;
	equal(n7, 0);

	var n8 = grid.grid[2][1].neighbors;
	equal(n8, 2);

	var n9 = grid.grid[2][2].neighbors;
	equal(n9, 1);
});

test("testing bottom edge update", function() {
	var grid = new Grid(3);

	grid.createLiveCell(0,2);
	grid.createLiveCell(1,2);
	grid.createLiveCell(2,2);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 1);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 0);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});


// test behavior of a simple oscillator
test("testing blinker", function() {
	var grid = new Grid(3);
	grid.createLiveCell(0,1);
	grid.createLiveCell(1,1);
	grid.createLiveCell(2,1);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 1);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 1);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 1);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 1);
	equal(grid.grid[2][2].live, 0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 1);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 1);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});