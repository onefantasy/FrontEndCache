## 前端缓存

### 一、cookie

#### 1. 概述

	Cookie 是服务器保存在浏览器的一小段文本信息，一般大小不能超过4KB。
	
#### 2. 应用场景
- 对话（session）管理：保存登录、购物车等需要记录的信息。
- 个性化信息：保存用户的偏好，比如网页的字体大小、背景色等等。
- 追踪用户：记录和分析用户行为。


#### 3. cookie的组成
- Cookie 的名字
- Cookie 的值（真正的数据写在这里面）
- 到期时间（超过这个时间会失效）
- 所属域名（默认为当前域名）
- 生效的路径（默认为当前网址）

#### 4. document.cookie
- document.cookie属性用于读写当前网页的 Cookie。
- 创建cookie
```javascript
	document.cookie = name + "="+ value + ";expires=" + exp.toUTCString();
```
- 读取cookie
	+ document.cookie 读取的时候，会返回所有的cookie，每个cookie之间用 ‘；’ 分割，需要自己手动进行获取
- 删除cookie
	+ 基本思路就是让cookie的expires属性的值设定为过去的时间，让cookie过期即可。

### 二、localStorage

#### 1. 概述

localStorage 是H5提供的一种客户端存储数据的新方法，保存数据的时间没有限制，直到手动删除为止。localStorage的存储空间比cookie更大，但是需要注意的是，localStorage只能存储string格式的数据，localStorage遵循同源策略。


#### 2. 使用方法
- 首先需要判断当前浏览器是否支持localStorage 
```javascript
	if(!window.localStorage){
        console.warn('!浏览器不支持localStorage!')
        return false
    }
```
- 设置localStorage
```javascript
	// 第一种方法
	window.localStorage[name] = value
	// 第二种方法
	window.localStorage.name = value
	// 第三种方法(推荐)
	window.localStorage.setItem(name,value)
```
- 读取localStorage
```javascript
	// 推荐使用以下方法
	 window.localStorage.getItem(name)
```
- 删除localStorage
```javascript
	// 删除某个localStorage
	window.localStorage.removeItem(name)
	// 清空所有的localStorage
	window.lcoalStorage.clear()
```

### 三、sessionStorage

#### 1. 概述

 sessionStorage和localStorage的区别在于，sessionStorage里面存储的数据在会话结束时会被删除，而locaStorage里面的数据是永久存储的直到手动删除为止，其他地方也是类似与localStorage。

 #### 2. 使用方法
- 首先需要判断当前浏览器是否支持sessionStorage 
```javascript
	if(!window.sessionStorage){
        console.warn('!浏览器不支持sessionStorage!')
        return false
    }
```
- 设置sessionStorage
```javascript
	window.sessionStorage.setItem(name,value)
```
- 读取localStorage
```javascript
	 window.sessionStorage.getItem(name)
```
- 删除localStorage
```javascript
	// 删除某个sessionStorage
	window.sessionStorage.removeItem(name)
	// 清空所有的sessionStorage
	window.sessionStorage.clear()
```