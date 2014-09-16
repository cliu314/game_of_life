6.170 Project 1: Phase 1
Clare Liu

Instructions:
To view the simulation, open game_of_life.html. I created 3 starting states and each time the page is loaded, a random starting state will be chosen, so refresh the page to see another pattern. My JavaScript code is in game_of_life.js. My QUnit tests are located in the qunit-example directory.  Go to test_proj1.html to view the results of the tests . The actual tests are located in tests_proj1.js

Grading Directions:
- Highlights: I used the each functional (line 183), which takes a function to run on each cell in the grid. The use of this functional prevents the repetition of nested for loops to access each element in the grid. I also like how I created separate functions for finding the number of live neighbors, updating the grid state, and updating the canvas, to make it easier to test intermediate steps in each generation.

- Help wanted: I think my getNeighbors function within getAllNeighbors() could be implemented in a  simpler and more efficient way because I am using nested for loops, so I have to make sure the array indices don�t go out of bounds. I also have to subtract 1 from the number of neighbors if the original cell is live because then it is counted as a neighbor.

I also don�t like how I had to pass in an instance of canvas to the Grid object because this makes it complicated to test the Grid functions individually and the model and view are not completely separated. However, the only other way I could think of to allow a Grid function to fill squares in the 2d context of a specific canvas was using global variables to hold the state of the canvas, which is also a bad idea.

Design Challenges:
- Grid representation:  The main design challenge was how to represent the grid. One option was to use a 2d array to store the state of all the cells, where 1 represents a live cell and 0 represents a dead cell. One advantage of this option is that it is very easy to access the state of a particular cell by just looking up the element in the array. However, this would require copying of the array or creating a new array when updating the cells for the next generation. The live cells for the next generation need to be determined before the grid is actually updated, so that the number of live neighbors for each cell isn�t affected when a previous cell is updated.

Another option was to create a Cell class that keeps track of whether each cell is dead or live and the number of live neighbors it has. I created a 2d array that holds size x size cell objects.  Using this approach allows us to first go through the array and update the number of live neighbors each cell has. We can then go through the array again to update the live/dead attribute because the neighbors were already calculated, so future calculations in the generation can�t be affected. I decided to use this approach because even though we have to go through the array of cells twice, no copies of the array need to be made. The code is also more understandable to others and allows more flexibility in adding more attributes for different versions of the game in the future if we have an array of cell objects instead of an array of 1�s and 0�s.

