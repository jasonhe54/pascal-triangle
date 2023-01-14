// //create window resize event listener
// window.addEventListener("resize", function() {
//     console.log("resize");
//     //get the width of the window
//     //get the height of the window
// });

function rescaleWindowToVP() {
    let width = window.innerWidth;
    let spanValueWidth_scaled = document.querySelector(".pascal-row-number").getBoundingClientRect().width; // scaled width of the span
    let numberOfSpanRows = document.querySelectorAll(".pascal-row").length; // number of rows in the triangle
    //get properties like margin, padding, border, etc.
    let spanValueMargin = parseInt(window.getComputedStyle(document.querySelector(".pascal-row-number")).getPropertyValue("margin").split("px")[0]);
    let theoreticalSpacePerSpan = spanValueWidth_scaled + (2*spanValueMargin);
    let rowOffset = 2; // this accounts for the 0s at the beginning and end of each row
    let theoreticalNumberOfSpansInLastRow = numberOfSpanRows + rowOffset;
    let theoreticalSpaceForLastRow = theoreticalNumberOfSpansInLastRow*theoreticalSpacePerSpan+10; 
    // +10 is just because why not? 
    // It's just to make the rescaling happen a little bit earlier than it would otherwise

    // console.log({
    //     width: width,
    //     scaling: ((width/theoreticalSpaceForLastRow)-0.2),
    //     spanValueWidth_scaled: spanValueWidth_scaled,
    //     numberOfSpanRows: numberOfSpanRows,
    //     spanValueMargin: spanValueMargin,
    //     theoreticalSpacePerSpan: theoreticalSpacePerSpan,
    //     rowOffset: rowOffset,
    //     theoreticalNumberOfSpansInLastRow: theoreticalNumberOfSpansInLastRow,
    //     theoreticalSpaceForLastRow: theoreticalSpaceForLastRow
    // })

    if (width <= theoreticalSpaceForLastRow) {
        document.querySelector("#pTriangle").style.transform = "scale("+((width/theoreticalSpaceForLastRow)-0.2)+")";
    } else if (width > theoreticalSpaceForLastRow) {
        document.querySelector("#pTriangle").style.transform = "scale(1)";
    }
}

let resizeWindowTimer = null;
window.onresize = function() {
    if (resizeWindowTimer != null)
        clearTimeout(resizeWindowTimer);
    resizeWindowTimer = setTimeout(rescaleWindowToVP(), 2000);
};