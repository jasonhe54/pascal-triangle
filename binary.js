function createBinary(num) {
    if (isNaN(num)) {
        throw new Error('createBinary(number): Parameter is not a number');
    };
    let number = parseInt(num); // if not an int, convert to int
    let binary = number.toString(2);
    return binary;
};

function oddNum_binaryPOC() {
    let inputNumber = document.getElementById("binaryPOC_Input").value;
    let binary = createBinary(inputNumber);
    console.log(`Binary of ${inputNumber}: ${binary}`);
    let numberOf1s;
    if (!binary.match(/1/g)) { // if inputNumber = 0.
        numberOf1s = 0; 
    } else {
        numberOf1s = binary.match(/1/g).length;
    }
    console.log(`Number of 1s in binary: ${numberOf1s}`);
    let numberOfOdds = Math.pow(2, numberOf1s);
    let outputdiv = document.getElementById("binaryPOCOutput");
    outputdiv.innerHTML = `<span id="binaryPOCOutput_BinaryRep" class="noCSS">Binary Representation: ${binary}</span><br><span id="binaryPOCOutput_NumberOf1s" class="noCSS">Number of 1s: ${numberOf1s}</span><br><span id="binaryPOCOutput_NumberOfOddNums" class="noCSS">Number of Odds: 2<sup>${numberOf1s}</sup> = ${numberOfOdds}</span>`;
};