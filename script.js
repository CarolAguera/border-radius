function borderRadius(e) {
  let box = document.getElementsByClassName("box");
  let result = document.getElementsByClassName("result");
  box[0].style.borderRadius = `${e}px`;
  return result[0].innerHTML = `Border-Radius Total: ${box[0].style.borderRadius = `${e}px`}`;
}
function borderBottomLeftRadius(e) {
  let box = document.getElementsByClassName("box");
  box[0].style.borderBottomLeftRadius = `${e}px`;
}
function borderTopLeftRadius(e) {
  let box = document.getElementsByClassName("box");
  box[0].style.borderTopLeftRadius = `${e}px`;
}
function borderBottomRightRadius(e) {
  let box = document.getElementsByClassName("box");
  box[0].style.borderBottomRightRadius = `${e}px`;
}
function borderTopRightRadius(e) {
  let box = document.getElementsByClassName("box");
  box[0].style.borderTopRightRadius = `${e}px`;
}
function copiarTexto() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
  return copyText.value;
}