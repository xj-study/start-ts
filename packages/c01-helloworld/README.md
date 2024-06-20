#### 安装

```
npm i -g @antfu/ni
ni -g typescript
```

[关于 ni](https://github.com/antfu-collective/ni)

#### 本波要点

我们可以通过 typescript 编译器将 ts 代码编译为 js 代码。

进入当前目录，执行 tsc 指令之后，将会生成 app.js 文件：

```
tsc app.ts
```

之后运行 app.js ：

```
node app.js
```

我们还可以同时编译多个 ts 文件：

```
tsc app.ts sum.ts
```

那么如果我们的 ts 文件导入了其他 ts 文件，ts 编译器会编译导入的文件吗？

实验一下：

``` ts

import { sum } from './sum'

let result: number = sum(10, 20)
console.log(result)

```

如上述代码所示，执行 tsc 指令之后：

```
tsc sumTest.ts
```

导入的 sum.ts 文件也被编译了。

#### tsc 的一些尝试

我们来使用一下 --watch 参数：

```
tsc --watch watchTest.ts
```

然后，我们修改一下 watchTest.ts 文件，我们发现 tsc 能检查到我们的修改，并自动编译。


通常我们希望代码 build 的时候，能够把代码中的注释都清理掉，tsc 很不巧的提供了这个功能：

```
tsc --removeComments removeCommentsTest.ts
```



[返回](/README.md)

