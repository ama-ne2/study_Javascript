const leftText = document.getElementById("leftText");
const rightText = document.getElementById("rightText");
const btn = document.getElementById("btn");
const result =document.getElementById("result");



btn.onclick = () =>{
    result.value = leftText.value + rightText.value;
}