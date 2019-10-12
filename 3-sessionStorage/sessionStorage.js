const sessionStorage = {
    // 判断浏览器是否支持sessionStorage
    isSessionStorage: !window.sessionStorage
}

// 设置sessionStorage(新增或者修改)
sessionStorage.setSessionStorage = function(name,value){
    if(this.isSessionStorage){
        console.warn('!浏览器不支持sessionStorage!')
        return false
    }

    // 当类型为object时，必须转化为字符串，否则读取时会出错
    typeof(value) !== 'object'|| (value = JSON.stringify(value))

    // 设置值（官方推荐）
    window.sessionStorage.setItem(name,value)

    // 设置值的其他方法
    /*window.sessionStorage[name]=1
    window.sessionStorage.name=1*/
}

// 删除sessionStorage
sessionStorage.delSessionStorage = function(name){
    if(this.isSessionStorage){
        console.warn('!浏览器不支持sessionStorage!')
        return false
    }

    window.sessionStorage.removeItem(name)
}

// 读取sessionStorage
sessionStorage.getSessionStorage = function(name){
    if(this.isSessionStorage){
        console.warn('!浏览器不支持sessionStorage!')
        return false
    }

    // 使用getItem方法读取值（官方推荐）
    let value = window.sessionStorage.getItem(name)
    // return JSON.parse(value) || value
    try{
        return JSON.parse(value)
    }catch{
        return value
    }
    // 读取值的其他方法
    /*return window.sessionStorage[name]
    return window.sessionStorage.name*/
}

// 获取sessionStorage中键
sessionStorage.clearSessionStorageKey = function(){
    if(this.isSessionStorage){
        console.warn('!浏览器不支持sessionStorage!')
        return false
    }

    window.sessionStorage.clear()
}

// export default sessionStorage