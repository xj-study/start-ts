#### 本波要点

相信熟悉 javascript 的同学，对其基本类型会非常了解，

number, 
string,
boolean,
undefined,
null,
等

typescript 作为 javascript 的超集，他给 javascript 添加了众多语言特性！

比如：类型注解及编译时类型检查。

而在使用了 typescript 之后，其类型检查特性让我们有一种在写 java 的感觉！

许许多多写 javascript 自由野惯了的同学，估计会不太喜欢这个特性。

但架不住 typescript 应用广泛，大部分开源项目使用他，很多公司也在使用他。

在这种背景下，那我们就很有必要拿下他了。

而类型注解及类型检查特性非常重要，

若我们想对变量的类型来个类型注解，那肯定需要掌握 typescript 有哪些数据类型，以及如何给变量指定类型了。

#### 尝试一下

如何给变量增加类型注解呢？

很简单，如下所示：

```ts
// string
let str : string = 'type string'   // 显示指定
console.log(str);

let str1 = 'type string 1'   // 自动推断

console.log(str1)
```

我们可以明确的给变量指定类型，但这不是必需的，typescript 会尝试自动推断代码中的类型。

来验证一下自动类型推断：

``` ts
let str1 = 'type string 1'   // 自动推断

// Type 'number' is not assignable to type 'string'.
// Error
str1 = 10

```

当我们为 str1 赋值为 10 时，编译器报错了，报错信息可查看代码注释。

虽然报错了，但是 javascript 代码还是顺利生成了。

既然编译器识别到我们的代码不够严谨，那极有可能是代码出现了不正经的用法，

我们完全有理由相信，代码是不健壮的，应该阻止 typescript 生成 javascript 代码，

此时，我们只需要增加 `--noEmitOnError` 参数，如下所示：

```
tsc --noEmitOnError typeTest.ts
```

当代码报错时， javascript 代码文件就不会生成了，不得不说 typescript 想的很周到。

让我们来看看下面这种用法：

```ts
let nll;
nll = 'is a string';
nll = 1

```

当我们声明一个变量，在不初始化的情况下，还不指定数据类型，猜猜 typescript 会如何推断数据类型呢？

不仅如此，我们还先后给他赋值了 string 及 number 类型的值。

编译器应该是会报错的吧！

然而，这代码很顺利的编译通过了，没有报错！

因为 typescript 提供了一个很神奇的类型，`any` !

他让你使用 typescript 跟使用 javascript 一样自由！

当我们没有指定类型，且 typescript 不能从上下文推断他时，编译器就会默认指定 any 类型。

虽然 any 对喜欢使用 javascript 的同学来说，是一个意外之喜，但是，我们还是不要四处使用，毕竟 any 不会经过类型检查！

不用类型检查的话，为什么要用 typescript 呢？

#### 继续尝试

基本的几个类型没什么好尝试的，我们来看看怎么给数组加上指定类型。

先不指定，如下所示：

```ts
let arr = []
arr.push(100)
arr.push('a string')
```

在不指定数组 arr 项的类型时，数组 arr 里可以插入不同类型的值，其实也就意味着 typescript 认为数组 arr 中的项类型为 any ，与前面不指定类型的变量示例类似，稍微有点区别的是，变量 arr 我们初始化为一个空数组，typescript 就此推断变量 arr 是一个数组，只是无法进一步推断数组项的类型。

据此推测，我们进行如下实验：

```ts
let arr2 = [1]
// ok
arr2.push(100)
// error
arr2.push('a string')
```

若我们正在使用的是 vscode ，相信 vscode 已经有错误提示了。

我们已经无法往 arr2 中插入一项类型为 string 的值了。

很显然，typescript 已经自动推断出变量 arr2 是一个项类型为 number 的数组了。

若我们初始化的时候，数组存在多个值，类型还不一样，情况会如何呢？

```ts
let arr3 = [1, 'a string']
arr3.push(100)
arr3.push('another string')
```

如上述代码所示，程序运行正常，typescript 没有报错。

我们试着来推测一下，typescript 发现赋值数组中的值存在多个类型，那就有点不太好弄了呀，干脆整成 any 得了！可能会真的这么干！

那我们就还检验一下：

```ts
let arr3 = [1, 'a string']
// ok
arr3.push(100)
// ok
arr3.push('another string')
// error
arr3.push(true)
// error
arr3.push({})
```

我们往数组 arr3 中，再插入两条其它类型的值，比如 boolean, 对象等。

然而很不幸的是，后面两行代码报错了！

竟然不是类型 any ，很让人纳闷呀！

typescript 竟然存在只支持 number 和 string 类型的类型，这是什么玩意？


[返回](/README.md)





































