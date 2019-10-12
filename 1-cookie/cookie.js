const cookie = {};

//设置cookie
cookie.setCookie = function(name,value,time){
    let strSec = cookie.getSec(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + strSec*1);
    document.cookie = name + "="+ encodeURI(value) + ";expires=" + exp.toUTCString();
}
//设定cookie生存时间
cookie.getSec = function(str){
    let str1=str.substring(1,str.length)*1;
    let str2=str.substring(0,1);
    if (str2==="s")
    {
        return str1*1000;
    }
    else if (str2==="h")
    {
        return str1*60*60*1000;
    }
    else if (str2==="d")
    {
        return str1*24*60*60*1000;
    }
}
//读取cookie
cookie.getCookie = function(name){
    let reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    let arr=document.cookie.match(reg);
    if(arr)
        return decodeURI(arr[2]);
    else
        return null;
}
//删除cookie
cookie.delCookie = function(name){
    let exp = new Date();
    exp.setTime(exp.getTime() - 1 );
    let cval = cookie.getCookie(name);
    if(cval != null){
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
    }
}

// export default cookie
