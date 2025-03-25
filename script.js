let display = document.getElementById("display");

function appendNumber(number) {
  display.value = display.value === "0" ? number.toString() : display.value + number;
}

function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function appendSymbol(symbol) {
  display.value = display.value === "0" ? symbol : display.value + symbol;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1); // Hapus karakter terakhir
  } else {
    display.value = "0"; // Reset ke nol jika hanya ada satu karakter
  }
}

function chooseOperation(operation) {
  display.value = display.value === "0" ? operation : display.value + operation;
}

function compute() {
  try {
    const expression = display.value
      .replace(/sin\(/g, "Math.sin((Math.PI/180)*")
      .replace(/cos\(/g, "Math.cos((Math.PI/180)*")
      .replace(/tan\(/g, "Math.tan((Math.PI/180)*");
    display.value = eval(expression).toFixed(5);
  } catch {
    display.value = "Error";
  }
}

function computeSin() {
  display.value = display.value === "0" ? "sin(" : display.value + "sin(";
}

function computeCos() {
  display.value = display.value === "0" ? "cos(" : display.value + "cos(";
}

function computeTan() {
  display.value = display.value === "0" ? "tan(" : display.value + "tan(";
}
