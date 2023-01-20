document.getElementById("NumberOfRowsForm").addEventListener("submit", function(e) {
    // prevent the form from submitting
    e.preventDefault();
    // get the value of the input
    let numberOfRows = document.getElementById("NumberOfRows_SettingInput").value;
    // clear the input field
    document.getElementById("NumberOfRows_SettingInput").value = "";
    // create the triangle
    createTriangle(numberOfRows);
});

// document.getElementById("TriangleScaleForm").addEventListener("submit", function(e) {
//     // prevent the form from submitting
//     e.preventDefault();
//     // get the value of the input
//     let scaleValue = document.getElementById("TriangleScale_SettingInput").value;
//     // clear the input field
//     document.getElementById("NumberOfRows_SettingInput").value = "";
//     document.getElementById("pTriangle").style.transform = "scale("+scaleValue+")";
//     document.getelementById("TriangleScale_Current").innerText = scaleValue;
// });