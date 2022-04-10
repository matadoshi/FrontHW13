function Confirm(){
    if(document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor="white";
    }
    else{
        document.body.style.backgroundColor="black"
    }
}
function Prompt() {
  let text;
  let person = prompt("Please enter your age:","This here...")
  if (person<18) {
    text = "Yasinizi Duzgun Daxil Edin.";
  } else {
    text = "Ugurla register olundunuz";
  }
  document.body.innerHTML = text;
}