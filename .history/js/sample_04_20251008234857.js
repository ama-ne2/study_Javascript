const leftText = document.getElementById("leftText");
const rightText = document.getElementById("rightText");
const btn = document.getElementById("btn");
const result =document.getElementById("result");



btn.onclick = () =>{
    const leftNum = Number(leftText.value);
    const rightNum = Number(rightText.value);

    result.value = leftNum + rightNum;
}