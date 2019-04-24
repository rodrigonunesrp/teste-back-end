function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    saveLocalStorage(uuid);
    return uuid;
}

function saveLocalStorage(uuid){
    window.localStorage.setItem('uuid', uuid);
    console.log(create_UUID());
}

function init(){
    var uuid = window.localStorage.getItem('uuid') || create_UUID();
}

init();

