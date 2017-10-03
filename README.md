# Eslint
Eslint代码规范

## node.js命令安装和执行
```cnpm install -g eslint  //全局安装eslint
   yarn add eslint  //本地项目添加eslint
   eslint --init    //初始化一个.eslintrc.js隐藏文件.
   eslint index.js
   node index.js
   ```
   
 ### eslint初始化文件的配置与隐射
 如下配置
 ```
? How would you like to configure ESLint? Answer questions about your style

? Are you using ECMAScript 6 features? Yes

? Are you using ES6 modules? Yes

? Where will your code run? Browser

? Do you use CommonJS? No

? Do you use JSX? No

? What style of indentation do you use? Tabs

? What quotes do you use for strings? 

? What line endings do you use? Windows

? Do you require semicolons? No

? What format do you want your config file to be in? JavaScript
```
映射为
```
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [  //缩进
            "error",
            "tab"
        ],
        "linebreak-style": [ //换行符
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
```




   
