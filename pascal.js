// function createTriangles() {
//     // create a pascal triangle inside the DIV with the id "pTriangle" automatically without manually specifying each row
//     let array = [];
//     let generatedRows;
//     for (let i = 0; i > 5; i++) { //i is the row number, with 0 being the first row.
        
//     }
// }

function createTriangles(numOfRows = 15) {
    // create a pascal triangle inside the DIV with the id "pTriangle" automatically without manually specifying each row
    var triangle = []; // basically the array of the entire triangle. Each index if a row, and each index in the row is a column.
    let generatedRows; // this is later used to store the HTML code for the triangle
    let documentTriangle = document.getElementById("pTriangle"); // this is the triangle div element in the HTML document
    for (let row = 0; row < numOfRows; row++) { //row is the row number, with 0 being the first row.
        triangle[row] = []; // create a new row in the array and set it to an empty array (because a row starts empty)
        for (let column = 0; column <= row; column++) { 
            // this is the column number, with 0 being the first column and creating a new column if the column number is less than or equal to the row number
            // this is because the number of columns in a row is equal to the row number. 
            // For example:  
            // row 1 has 1 column     (1)
            // row 2 has 2 columns   (1 1)
            // row 3 has 3 columns  (1 2 1)
            // row 4 has 4 columns (1 3 3 1)
            // etc... so on an so forth
            if (column === 0 || column === row) {
                // if it's the first or last column, then set the value to 1 (see the example above for the idea)
                triangle[row][column] = 1;
            } else {
                // if not, then set the value of the current column to the sum of the two columns above it (row above, column to the left and row above, column to the right)
                triangle[row][column] = triangle[row-1][column-1] + triangle[row-1][column];
            };
        };
    };
    
    // console.log(JSON.parse(JSON.stringify(triangle))); 
    // seems like console.log logs the end result so not at the time of execution
    // SO Refs: 
    // https://stackoverflow.com/a/48969647
    // https://stackoverflow.com/q/7389069
    if (documentTriangle.dataset.show0s === "true") {
        for (let i = 0; i < triangle.length; i++) {
            triangle[i].unshift(0);
            triangle[i].push(0);
        };
    }
    // console.log(triangle);



    generatedRows = triangle.map(function(rows) {
        // this basically converts the triangle array into another array called "generatedRows" with the HTML code for each row
        // div is a block element, so it will automatically create a new line for each row, don't need to worry about spacing mostly
        return '<div class="pascal-row"><span class="pascal-row-number">'+rows.join('</span><span class="pascal-row-number">')+'</span></div>';
        // return '<div class="pascal-row"><span class"pascal-row-object">'+rows.join(" ")+'</span></div>';
    });
    // console.log(generatedRows);
    //just logging to make sure it actually works while building this
    documentTriangle.innerHTML = generatedRows.join("");
    //this basically puts the generatedRows array as HTML code into the DIV with the id "pTriangle" and joins it with nothing in between each row since it's already in a div
    document.getElementById("NumberOfRows_Current").innerText = numOfRows;
};

function showHide0s() {
    let button = document.getElementById("showHide0sBtn");
    let triangle = document.getElementById("pTriangle");
    if (triangle.dataset.show0s === "true") { // currently showing 0s
        triangle.dataset.show0s = "false";
        button.innerText = "Show 0s in Pascal's Triangle";
        let numberOfRows = document.getElementById("NumberOfRows_Current").innerText; // this just ensures that the triangle still has the same number of rows, also the only other things that's actually allowing the next function to run.
        createTriangles(numberOfRows);
    } else if (triangle.dataset.show0s === "false") { // currently hiding 0s
        triangle.dataset.show0s = "true";
        button.innerText = "Hide 0s in Pascal's Triangle";
        let numberOfRows = document.getElementById("NumberOfRows_Current").innerText; // this just ensures that the triangle still has the same number of rows, also the only other things that's actually allowing the next function to run.
        createTriangles(numberOfRows);
    };
}

window.onload = function() {
    createTriangles(15);
    // rescaleWindowToVP();
};