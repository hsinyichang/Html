const item1 = document.getElementById('item1');
const item1Num = document.getElementById('item1Num');
const item1Price = document.getElementById('item1Price');

const item2 = document.getElementById('item2');
const item2Num = document.getElementById('item2Num');
const item2Price = document.getElementById('item2Price');

const item3 = document.getElementById('item3');
const item3um = document.getElementById('item3Num');
const item3rice = document.getElementById('item3Price');
// button 1.click / button submit ->form
const myForm = document.getElementById('myForm');
// const myBtn = document.getElementById('myBtn');
//以上先宣告變數  抓資料


//抓完資料後設定button觸發事件
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let item1Val = parseInt(item1.value);
    let item1NumVal = parseInt(item1Num.value);
    let item1Result = item1Val * item1NumVal ;//總價=單價*數量
    item1Price.value = item1Result;
    // console.log('item1Val',item1Val);

    let item2Val = parseInt(item2.value);
    let item2NumVal = parseInt(item2Num.value);
    let item2Result = item2Val * item2NumVal ;//總價=單價*數量
    item2Price.value = item2Result;

    let item3Val = parseInt(item3.value);
    let item3NumVal = parseInt(item3Num.value);
    let item3Result = item3Val * item3NumVal ;//總價=單價*數量
    item3Price.value = item3Result;
    sum=item1Result+item2Result+item3Result;//總價

    result.innerText=`${sum}`;//最後總價
}
)