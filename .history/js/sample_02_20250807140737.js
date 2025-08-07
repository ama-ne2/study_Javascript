console.log("a");

const age = parseInt(prompt("年齢入力"));


/*

a==b 同じ
a!=b 同じじゃない
a>b 
a<b 未満
a>=b 以上
a<=b 以下
&& 〇〇かつ

if(条件){
    条件がtlueの場合の処理を書く
}else{
    条件が違うかった場合の処理
}

*/

if(age == 18){
    console.log("私と同じ！");
}else if(age <= 12 && age>=0){
    console.log("ばぶー");
}else if(age >= 13 && age<=100){
    console.log("ご立派！");
}else if(age>0 && age<101){
    console.log("you are human?");
    
}

// console.log(age);
