# 留言板

## CSS实现留言板效果

![img](/images/html/css/code/message/10001.png)

- 原文地址：https://mp.weixin.qq.com/s/WYeLyPayQigIGSoKVqF-3A

- 图标地址：https://www.iconfont.cn/

HTML代码：

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>【每日一练】27—CSS实现留言板效果</title>
   </head>
  <body>
    <section>
      <div class="container">
        <div class="contactinfo">
          <div>
            <h2>联系方式</h2>
            <ul class="info">
              <li>
                <span><img src="location.png"></span>
                <span>地球-世界-中国-上海-闵行区-东川路</span>
              </li>
              <li>
                <span><img src="mail.png"></span>
                <span>13127757553@163.com</span>
              </li>
              <li>
                <span><img src="call.png"></span>
                <span>13127757553</span>
              </li>
            </ul>
          </div>
          <ul class="sci">
            <li><a href="http://www.webqdkf.com"><img src="1.png"></a></li>
            <li><a href="http://www.webqdkf.com"><img src="2.png"></a></li>
            <li><a href="http://www.webqdkf.com"><img src="3.png"></a></li>
            <li><a href="http://www.webqdkf.com"><img src="4.png"></a></li>
            <li><a href="http://www.webqdkf.com"><img src="5.png"></a></li>
          </ul>
        </div>
        <div class="contactForm">
          <h2>留言联系</h2>
          <div class="formBox">
            <div class="inputBox w50">
              <input type="text" name="" required>
              <span>昵称</span>
            </div>
            <div class="inputBox w50">
              <input type="text" name="" required>
              <span>姓名</span>
            </div>
            <div class="inputBox w50">
              <input type="text" name="" required>
              <span>邮箱地址</span>
            </div>
            <div class="inputBox w50">
              <input type="text" name="" required>
              <span>联系电话</span>
            </div>
            <div class="inputBox w100">
              <textarea name="" required></textarea>
              <span>有什么问题请留言，我会尽快给你回复</span>
            </div>
            <div class="inputBox w100">
              <input type="submit" value="提交">
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
```

CSS代码：

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins' ,sans-serif;
}
section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #112d42;
}
section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #00a6bc;
}
section .container {
    position: relative;
    min-width: 1100px;
    min-height: 550px;
    display: flex;
    z-index: 1000;
}
section .container .contactinfo {
    position: absolute;
    top: 40px;
    width: 350px;
    height: calc(100% - 80px);
    background: #0f3959;
    z-index: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
}
section .container .contactinfo h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
}
section .container .contactinfo .info {
    position: relative;
    margin: 20px 0;
}
section .container .contactinfo .info li {
    position: relative;
    list-style: none;
    display: flex;
    margin: 20px 0;
    cursor: pointer;
    align-items: flex-start;
}
section .container .contactinfo .info li span:nth-child(1) {
    width: 30px;
    min-width: 30px;
}
section .container .contactinfo .info li span:nth-child(1) img {
    max-width: 100%;
    filter: invert(1);
    opacity: 0.5;
}

section .container .contactinfo .info li span:nth-child(2) {
    color: #fff;
    margin-left: 10px;
    font-weight: 300;
    opacity: 0.5;
}
section .container .contactinfo .info li:hover span:nth-child(1) img,
section .container .contactinfo .info li:hover span:nth-child(2) {
    opacity: 1;
}
section .container .contactinfo .sci {
    position: relative;
    display: flex;
}
section .container .contactinfo .sci li {
    list-style: none;
    margin-right: 15px;
}
section .container .contactinfo .sci li a {
    text-decoration: none;
}
section .container .contactinfo .sci li a img {
    filter: invert(1);
    opacity: 0.5;
}
section .container .contactinfo .sci li:hover a img {
    opacity: 1;
}
section .container .contactForm {
    position: absolute;
    padding: 70px 50px;
    background: #fff;
    margin-left: 150px;
    padding-left: 250px;
    width: calc(100% - 150px);
    height: 100%;
    box-shadow: 0 50px 50px rgba(0,0,0,0.5);
}
section .container .contactForm h2 {
    color: #0f3959;
    font-size: 24px;
    font-weight: 500;
}
section .container .contactForm .formBox {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
}
section .container .contactForm .formBox .inputBox {
    position: relative;
    margin: 0 0 35px 0;
}
section .container .contactForm .formBox .inputBox.w50 {
    width: 47%;
}
section .container .contactForm .formBox .inputBox.w100 {
    width: 100%;
}
section .container .contactForm .formBox .inputBox input,
section .container .contactForm .formBox .inputBox textarea {
    width: 100% !important;
    padding: 5px 0;
    resize: none;
    font-size: 18px;
    font-weight: 300;
    color: #333;
    border: none;
    border-bottom: 1px solid #777;
    outline: none;
}
section .container .contactForm .formBox .inputBox textarea {
    min-height: 120px;
}
section .container .contactForm .formBox .inputBox span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 300;
    color: #333;
    transition: 0.3s;
    pointer-events: none;
}
section .container .contactForm .formBox .inputBox input:focus ~ span,
section .container .contactForm .formBox .inputBox textarea:focus ~ span,
section .container .contactForm .formBox .inputBox input:valid ~ span,
section .container .contactForm .formBox .inputBox textarea:valid ~ span {
    transform: translateY(-20px);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #ff568c;
}
section .container .contactForm .formBox .inputBox input[type="submit"] {
    position: relative;
    cursor: pointer;
    background: #0f3959;
    color: #fff;
    border: none;
    max-width: 150px;
    padding: 12px;
}
section .container .contactForm .formBox .inputBox input[type="submit"]:hover {
    background: #ff568c;
}
```

