let HTMLInput = document.getElementById("userinput");
let HTMLOutput = document.getElementById("output");
let binaryValues = []
let index = -1;

for (let i=128; i >= 0; i--) {
    index++;
    binaryValues[index] = Math.pow(2, i);
}

/*let trt = "p";
for (let i=0; i<=160; i++) {
    trt = trt.concat(binaryTable[i].toString())
}*/

const convToBinary = (number) => {
    let binaryTable = [];
    number = Number(number);
    let writeIndex = 0;
    if (number == NaN) {
        return "Invalid input";
    }
    for (let i=0; i <= 128; i++) {
        if (number >= binaryValues[i]) {
            binaryTable[i] = 1;
            number = number - binaryValues[i];
        } else binaryTable[i] = 0;
    }
    return binaryTable;
}

const updateScreen = () => {
    let binary = convToBinary(HTMLInput.value);
    let display = '';
    binary[0] = binary[0].toString()
    for (let i=1; i <= 160; i++) {
        if (i%5==0) {
            binary.splice(i, 0, " ");
        }
        binary[i] = binary[i].toString();
    }
    if (binary[0] == "0") {
        binary.shift();
    }
    for (let i=0; i<= binary.length-1; i++) {
        display = display.concat(binary[i]);
    }

    HTMLOutput.innerText = `${display}`;
}

HTMLInput.addEventListener("input", updateScreen, false);