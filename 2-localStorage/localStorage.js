const localStorage = {
    // 判断浏览器是否支持localStorage
    isLocalStorage: !window.localStorage
}

// 设置localStorage(新增或者修改)
localStorage.setLocalStorage = function(name,value){
    if(this.isLocalStorage){
        console.warn('!浏览器不支持localStorage!')
        return false
    }

    // 当类型为object时，必须转化为字符串，否则读取时会出错
    typeof(value) !== 'object'|| (value = JSON.stringify(value))

    // 设置值（官方推荐）
    window.localStorage.setItem(name,value)

    // 设置值的其他方法
    /*window.localStorage[name]=1
    window.localStorage.name=1*/
}

// 删除localStorage
localStorage.delLocalStorage = function(name){
    if(this.isLocalStorage){
        console.warn('!浏览器不支持localStorage!')
        return false
    }

    window.localStorage.removeItem(name)
}

// 读取localStorage
localStorage.getLocalStorage = function(name){
    if(this.isLocalStorage){
        console.warn('!浏览器不支持localStorage!')
        return false
    }

    // 使用getItem方法读取值（官方推荐）
    let value = window.localStorage.getItem(name)
    // return JSON.parse(value) || value
    try{
        return JSON.parse(value)
    }catch{
        return value
    }
    // 读取值的其他方法
    /*return window.localStorage[name]
    return window.localStorage.name*/
}

// 获取localStorage中键
localStorage.getLocalStorageKey = function(){
    if(this.isLocalStorage){
        console.warn('!浏览器不支持localStorage!')
        return false
    }

    const arr = []
    const storage = window.localStorage
    let len = storage.length

    for(let i=0;i<len;i++){
        arr.push(storage.key(i))
    }

    return arr
}

// export default localStorage