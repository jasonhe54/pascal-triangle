document.getElementById("NumberOfRowsForm").addEventListener("submit", function(e) {
    // prevent the form from submitting
    e.preventDefault();
    // get the value of the input
    let numberOfRows = document.getElementById("NumberOfRows_SettingInput").value;
    // clear the input field
    document.getElementById("NumberOfRows_SettingInput").value = "";
    // create the triangle
    createTriangles(numberOfRows);
});