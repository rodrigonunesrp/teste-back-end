window.onload = function(){

    function createGUID(){
        var dt = new Date().getTime();
        var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        saveLocalStorage(guid);
        return guid;
    }

    function saveLocalStorage(guid){
        window.localStorage.setItem('guid', guid);
    }

    function saveMonitoringData(guid){
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3000/v1/users", true);
        
        // Add the required HTTP header for form data POST requests
        xhttp.setRequestHeader('Content-Type', 'application/json', 'Accept', 'application/json');
    
        var d = new Date();
        var ds = d.toString().split(' ');
        var valid_date = ds[3] +'-'+ ("0" + d.getMonth() + 1).slice(-2) +'-'+ ds[2] +' '+ ds[4] +' '+ ds[5].split('T')[1];
        data = {
            user: {
                guid: guid
            },
            user_access: {
                url: window.location.href,
                created_at: valid_date
            }
        };
        xhttp.send(JSON.stringify(data));
    }
    
    function init(){
        var guid = window.localStorage.getItem('guid') || createGUID();
        console.log(guid);
        
        var form = document.forms.namedItem("contactForm");
        if (form != null) 
            form.guid.value = guid;
        
        saveMonitoringData(guid);
    }

    init("contactForm");

}