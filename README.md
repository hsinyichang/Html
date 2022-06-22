# 目錄
* 開啟markdown(ctrl+k+v)

## 0413  
* 介紹區塊卡片製作 
##
## 0414  
* 表單輸入、表格、區塊(block inline-block inline)
##
## 0420
* 【套件】使用icon(從cdnjs網站找到 font-awsome 然後複製link)
* id 設為書籤、box背景圖片、box-sizing: border-box
* flex 排版問題  flex wrap  justify-content
* 做一個簡易網頁
##
## 0504  
* 介紹RWD響應式網頁  @media()
##
## 0505  
* float、clear float
##
## 0511  
* clear:both 、 clearfix::after
##
## 0512  
* javascript
* 網頁排版
* js  基礎語法  (console.log、prompt)
* 存提款練習
##
## 0518
* 介紹function()
* num1  option  num2  運算  resultP.innerText =myString1;
* 存提款使用function()
* 有無跳脫字元
* console.log(`hello ${name} 午安`);
* helloString = `hello ${name} 午安`;
* 有$變數時要加` `
##
## 0519
* func select(選擇器)+-*/運算
* func   .addEventListener 監聽事件(觸發時要執行什麼事件)
* 點餐系統練習
## 0525
* 講解BOM、let、const、var、confirm、字串變數...
* 介紹flag
* 跳脫字元、99乘法表 p class
* 日期 Date
## 0526
* 【套件】使用sweetalert2(從cdnjs網站找到limonte-sweetalert2 然後複製link)
* if else  練習
* 是否中樂透 金額 練習
* 會員身分  身分證字號 打折 練習
* 三元運算子練習
* Switch case 練習
## 0601
* 巢狀迴圈印星星(for 迴圈)
* 倒三角星星  作業
## 0602
* 九九乘法表練習
  * 字串轉型  補0  padStart()
  * php  的方法是 str_pad()
  * p class 換顏色
  * 作成table
* continue & break 練習
* while 練習
## 0608
* for迴圈
  * 全班學生成績加總與平均(國、英、數)
  * 若輸入人數大於3則不跑程式(break)
* while迴圈(Math.random()、.indexOf)
  * 樂透開獎號碼 49取6 不重複 .push() .indexOf()
  * 大胃王挑戰
* do while迴圈 
  * 遊樂場設施 (低消)
* 以上三個迴圈
  * 列出0-100內的奇數  
  * 輸入兩個數 計算0-1000 所有可被3&11除的數
## 0609
* ARRAY介紹
  * array.foreach 給值  若要給值則用push
  * array.push()增加元素到最後一個
  * array.pop()減少最後一個元素
  * array.shift()刪除第一個元素
  * array.unshift()增加元素到第一個
  * array.splice()刪除(指定數量位置)元素
  * array toString  陣列變字串
  * array concact 合併陣列
  * ... 分散運算子  也等於concact
  * indexOf() 搜尋字元  -1表示不存在
  * function 可改為箭頭函式  ex:((value)=>(value)*10)
  * map、filter、reduce
## 0615
* const Array
* for in 、 for of=>get value(只能用於array、Object要記得轉型Object.value)
* PHP 的 foreach
* object轉型為array 的for of 取值
* Object.entries(obj); key+value
* 練習一['a=>amy','b=>bob','c=>cat'] 字串相加
* 練習二使用foreach  +table
* 練習三 reduce 累加總 (total+value)
* function 呼叫練習(裡面放變數)
  * this(是呼叫上一層的)
## 0616
* Object.this
  * function 兩數相加 外面要用let 宣告一個變數來存回傳值作呈現
  * function 的簡化this 也是指向物件
  * 箭頭函式的this是指向window(無用)
* DOM
  * 用js  更改document 的內容
  * html 裡面必須要有東西 queryselector  才能抓的到東西(但只限第一筆)
  * const myH1=document.querySelector('h1');
  * console.log(myH1);
  * myH1.textContent='hi';
  * 變更顏色、文字   .style.color
  * querySelectorAll(抓取全部的)
  * 使用foreach 變更css
  * let sum=[...changeblue];//因這裡不是object 所以用...把每筆資料轉為array
  * setAttribute(設定屬性,內容)  設定屬性 a tag 更改網址  改變class屬性 .red  .green
  * getAttribute(抓屬性)
* EVENT 
  * button onclick、addEventlistener
    * addEventlistener('click',function(name){});
    * addEventlistener('click',name);  這裡的function不用加()，只要打出name就好
## 0622
* DOM
  * 建立子元素p
    * {const pElement = document.createElement('p');}
  * 建立text
    * {const textTextNode = document.createTextNode('hello 您好嗎 衷心感謝');}
  * 建立以上兩個的關聯
    * {pElement.appendChild(textTextNode);}
  * 再把建立的關聯加入到父元內
    * {const div1=document.getElementById('div1');
        div1.appendChild(pElement);}
  * 使用button建立新的p文字(function)
  * 刪除按鈕  點選文字刪除  增加文字序號
        