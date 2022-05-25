// let result=document.getElementById("result");
//抓元件  文字內容改掉
//let宣告變數 可以變化
//const 宣告變數 不可變化
// result.innerText="hello first change text";
//改元件內容文字

const resultP=document.getElementById("result");
const num1Input=document.getElementById("num1");
const num2Input=document.getElementById("num2");
const myform=document.getElementById("myform");
const optionInput=document.getElementById('option');
resultP.innerText="hello first change text";



console.log(resultP);
console.log(num1Input);
console.log(num2Input);
console.log(myform);


// 當這個myform表單內的submit送出
// 練習一   抓到num1  num2的value

myform.addEventListener('submit',function(e){//加入事件(按下submit後所會執行function內容)
    e.preventDefault();//submit不送出表單,先列結果
    console.log(e);
    console.log(num1Input.value);
    console.log(num2Input.value);
    let num1=parseInt(num1Input.value);
    let num2=parseInt(num2Input.value);
    let option=optionInput.value;

    let resultNum=0;//先宣告結果為0
    switch (option) {
        case "+":
            resultNum = num1 + num2 ;        
            break;
        case "-":
            resultNum = num1 - num2 ;        
            break;
        case "*":
            resultNum = num1 * num2 ;        
            break;
        case "/":
            resultNum = num1 / num2 ;        
            break;
    
        default:
            break;
    }

    console.log(resultNum);
    mystring1=(`${num1}${option}${num2}=${resultNum}`);
    // ``這個符號在esc下面
    
    resultP.innerText=mystring1;
    //submit get value
})

// 練習二
// num1 111
// num2 222
// option +
// result 111 + 222 = 333
// + - * /
// + - * / 顯示結果出來

// 練習三
// option input text -> select


