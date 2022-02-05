# 安装
```
npm install @suemor-tools
```


## 导入
```js
const suemor = require('@suemor-tools')
```

## 格式化时间
```js
console.log(suemor.dateFormat(new Date()));
```

## 转义 HTML 中的特殊字符
```js
const htmlStr = '<h1 title="abc">这个<span>123&nbsp;</span></h1>'
const str = suemor.htmlEscape(htmlStr)
console.log(str);
```

## 还原 HTML 中的特殊字符
```js
const str2 = suemor.htmlUnEscape(str)
console.log(str2);
```

## 开源协议
ISC
