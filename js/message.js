!function () {
    var view = document.querySelector('section.postMessage');
    var model = {
        init: function () {
            var APP_ID = 'xekLlucVRjXiyCFJqJR6uDm5-gzGzoHsz';
            var APP_KEY = 'XSDrYop2HDGDnXhCEI6izipQ';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            var query = new AV.Query('Message');
            var now = new Date();
            query.lessThanOrEqualTo('createdAt', now);//查询今天之前创建的 Todo
            query.limit(10);
            query.descending('createdAt');
            return query.find()
        },
        save: function (content, name) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                'content': content,
                'name': name
            })
        }
    };
    var contoller = {
        view: null,
        model: null,
        ulList: null,
        myForm: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;
            this.ulList = view.querySelector('ul');
            this.myForm = view.querySelector('form.messageForm');
            this.model.init();
            this.loadMessages();
            this.bindEvents();
        },
        loadMessages: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((element) => {
                    let li = document.createElement('li');
                    li.innerText = `${element.name}: ${element.content}`
                    this.ulList.appendChild(li)
                });
            });
        },
        bindEvents: function () {
            this.myForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveMessage();
            })
        },
        saveMessage: function () {
            var content = this.myForm.querySelector('input[name=content]').value
            var name = this.myForm.querySelector('input[name=name]').value || '匿名'
            if(!content){
                alert('请输入内容')
                return
            }
            this.model.save(content, name).then((object) => {
                let li = document.createElement('li');
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                this.ulList.prepend(li);
                this.myForm.querySelector('input[name=content]').value = '';
            }, function (error) {
                console.log(error)
            }).then(function () { }, function (error) {
                console.log(error)
            })
        }

    };
    contoller.init(view, model);
}.call()
