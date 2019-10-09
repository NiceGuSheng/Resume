!function () {
    function findCloset() {
        let specialTags = document.querySelectorAll("[data-x]");
        let minIndex = 0;
        let currentTop = window.scrollY;
        for (var i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - currentTop) < Math.abs(specialTags[minIndex].offsetTop - currentTop)) {
                minIndex = i;
            }
        }
        if (window.scrollY > 0) {
            if (minIndex > 1) {
                specialTags[minIndex - 1].classList.remove('offset');
            }
        }
        specialTags[minIndex].classList.remove('offset');
        var targetId = specialTags[minIndex].id;
        var a = document.querySelector('a[href="#' + targetId + '"]');
        var li = a.parentNode;
        var child = li.parentNode.children;
        for (var i = 0; i < child.length; i++) {
            child[i].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }


    let specialTags = document.querySelectorAll('[data-x]')

    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    setTimeout(function () {
        loading.classList.remove('active')
    }, 1000)
    setTimeout(function () {
        findCloset()
    }, 1000);
    window.onscroll = function () {
        if (window.scrollY > 0) {
            headInner.classList.add('active');
        }
        else {
            headInner.classList.remove('active');
        }
        findCloset();
    }
}.call();

