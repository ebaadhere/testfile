let display = document.getElementById('display');
function appendToDisplay(v) {
    display.value+=v
}
function clearDisplay() {
    display.value="";
}
function calculateResult() {
try {
    display.value=eval(display.value)
} catch (error) {
    display.value="error"
}
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}