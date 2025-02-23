const display = document.getElementById("display");
function ondisplay(input){
display.value +=input;
}
function cleardisplay(){
display.value = "";
}
function calculate(){
display.value = eval(display.value);
}