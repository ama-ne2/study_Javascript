console.log("a");

const age = parseInt(prompt("年齢入力"));


/*

a==b 同じ
a!=b 同じじゃない
a>b そのまま
a<b そのまま
a>=b 以上
a<=b 以下

if(条件){
    条件がtlueの場合の処理を書く
}else{
    条件が違うかった場合の処理
}

*/

if(age == 18){
    console.log("私と同じ！");
}else if(age <= 12){
    console.log("ばぶー");
    
}

console.log(age);
