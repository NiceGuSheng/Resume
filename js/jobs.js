!function () {
    let canvasImg = document.querySelector('#canvasImg');
    let bookmarksImg = document.querySelector('#bookmarksImg');
    let bannerImg = document.querySelector('#bannerImg');
    let wechatAppImg = document.querySelector('#wechatAppImg');
    pro1.onclick = function () {
        barPro.className = "bar-inner1"
        canvasImg.classList.remove('hid');
        bookmarksImg.classList.remove('hid');
        musicImg.classList.remove('hid');
        wechatAppImg.classList.remove('hid');
        vueClientImg.classList.remove('hid');
        weiAppImg.classList.remove('hid');
        document.querySelector('#musicImg img').classList.remove('active');
        document.querySelector('#canvasImg img').classList.remove('active');
        document.querySelector('#wechatAppImg img').classList.remove('active');
    }
    pro2.onclick = function () {
        barPro.className = "bar-inner2"
        canvasImg.classList.remove('hid');
        bookmarksImg.classList.add('hid');
        musicImg.classList.remove('hid');
        wechatAppImg.classList.remove('hid');
        vueClientImg.classList.remove('hid');
        weiAppImg.classList.add('hid');
        document.querySelector('#canvasImg img').classList.add('active');
        document.querySelector('#musicImg img').classList.add('active');
        document.querySelector('#wechatAppImg img').classList.add('active');
    }
    pro3.onclick = function () {
        barPro.className = "bar-inner3"
        canvasImg.classList.add('hid');
        bookmarksImg.classList.remove('hid');
        musicImg.classList.add('hid');
        wechatAppImg.classList.add('hid');
        wechatAppImg.classList.add('hid');
        vueClientImg.classList.add('hid');
        weiAppImg.classList.remove('hid');
        document.querySelector('#musicImg img').classList.remove('active');
        document.querySelector('#canvasImg img').classList.remove('active');
        document.querySelector('#wechatAppImg img').classList.remove('active');
 
    }
    document.querySelector('#musicImg img').onclick = function () {
        window.open("http://39.97.33.178/miaomiao", "_blank")
    }
    document.querySelector('#bookmarksImg img').onclick = function () {
        window.open("https://nicegusheng.github.io/Snack-Game/%E8%B4%AA%E5%90%83%E8%9B%87.html", "_blank")
    }
    document.querySelector('#wechatAppImg img').onclick = function () {
        window.open("https://github.com/NiceGuSheng/weChatSmallApp", "_blank")
    }
    document.querySelector('#canvasImg img').onclick = function () {
        window.open("https://nicegusheng.github.io/take-out-sell/dist/#/goods", "_blank")
    }
    document.querySelector('#vueClientImg img').onclick = function () {
        window.open("https://nicegusheng.github.io/sandbox/sandbox_web_My.html", "_blank")
    }
    document.querySelector('#weiAppImg img').onclick = function () {
        window.open("https://nicegusheng.github.io/WeiJingSuo/", "_blank")
    }
}.call();
