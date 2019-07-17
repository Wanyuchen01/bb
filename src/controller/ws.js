const Base = require('./base.js');

module.exports=class extends Base{
    openAction(){
        this.emit('open','连接成功');
    }
    closeAction(){
       this.broadcast('close','连接关闭');
    }
    messageAction(){
        this.wsData.data.time = think.datetime(new Date(), 'HH:mm:ss')
        this.broadcast('message',this.wsData.data);
    }
    onlineAction(){
        const id = this.wsData.data.id;
        userList.push(id);
        this.broadcast('online',`游客${id}上线`);
    }
    offlineAction(){
        const id = this.wsData.data.id;
        userList = userList.filter(userId => userId !==id);~
        this.broadcast('offline', `游客${id}下线`);
    }
};