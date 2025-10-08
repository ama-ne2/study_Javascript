const leftText = document.getElementById("leftText");
const rightText = document.getElementById("rightText");
const btn = document.getElementById("btn");
const result =document.getElementById("result");
const ope = document.getElementById("ope");


btn.onclick = () =>{
    const leftNum = Number(leftText.value);
    const rightNum = Number(rightText.value);
    if(ope.value){
        leftNum + rightNum;
        result.value = leftNum + rightNum;
    }
    else if(ope.value){
        leftNum - rightNum
        result.value = leftNum - rightNum;
    }
}