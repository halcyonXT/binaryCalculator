let HTMLInput = document.getElementById("userinput");
let HTMLOutput = document.getElementById("output");
let binaryValues = []
let index = -1;

for (let i=128; i >= 0; i--) {
    index++;
    binaryValues[index] = BigInt(Math.pow(2, i));
}

/*let trt = "p";
for (let i=0; i<=160; i++) {
    trt = trt.concat(binaryTable[i].toString())
}*/

const convToBinary = (numberInput) => {
    let binaryTable = [];
    if (isNaN(numberInput)) {
        return "Invalid input";
    }
    numberInput = BigInt(numberInput);
    for (let i=0; i <= 128; i++) {
        if (numberInput >= binaryValues[i]) {
            binaryTable[i] = 1;
            numberInput = numberInput - binaryValues[i];
        } else binaryTable[i] = 0;
    }
    return binaryTable;
}

const updateScreen = () => {
    let binary = convToBinary(HTMLInput.value);
    if (binary == "Invalid input") {
        HTMLOutput.innerText = `${binary}`;
        return;
    }
    let bar = 1;
    let barsplice = 0;
    let display = '';
    binary[0] = binary[0].toString()
    for (let i=1; i <= 160; i++) {
        if (binary[i] == 0 && binary[i+1] == 0 && binary[i+2] == 0 && binary[i+3] == 0) {
            if (binary[i+4] != 0 || binary[i+5] != 0 || binary[i+6] != 0 || binary[i+7] != 0) {
                break;
            } else {
                i += 3
                bar += 4
            }
        }
        /*if (i%5==0) {
            if (binary[i-1] == 0 && binary[i-2] == 0 && binary[i-3] == 0 && binary[i-4] == 0) {
                binary.splice(i-4, 4)
            } else {
                binary.splice(i, 0, " ");
            }
        }*/
        //binary[i] = binary[i].toString();
    }
    for (let i=bar; i<=160; i++) {
        barsplice++;
        if (barsplice%5==0) {
            binary.splice(i, 0, " ");
        }
    }
    /*if (binary[0] == "0") {
        binary.shift();
    }*/
    for (let i=bar; i<= binary.length-1; i++) {
        display = display.concat(binary[i]);
    }
    HTMLOutput.innerText = `${display}`;
}

HTMLInput.addEventListener("input", updateScreen, false);