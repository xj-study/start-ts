#### 要点

你可能想不到，typescript(以后用ts简称) 还真有那种支持多种类型的'类型'！

他叫 union types 。 

可以翻译为 联合类型 。

可以这么使用：

```ts
let val: number | string
val = 100
val = 'a string'

```

只需要使用 | 符号分隔，我们就声明一个联合类型了，非常简单。

显然，| 符号可以使用多次，如下所示：

```ts
let val2: number | string | null
val = 100
val = 'a string'
val = null
```

#### 尝试一下

接下来我们尝试一下一个比较有趣的事情。

实验代码如下：

```ts
foo('a string')
function foo(params:number | string) {
  let params2:number | string = 'a string'
  // ok
  console.log(params2.toUpperCase());
  // error
  console.log(params.toUpperCase());
}
```

我们来分析一下：

变量 parmas 与 params2 都是联合类型 number | string ，值都是 a string ，然后都调用了一下 string 类型的 toUpperCase 方法，比较有意思的是，变量 params2 调用成功了，而变量 params 却报错了！

是不是有一种被狗㕵的了感觉~

是时候来一波有价值的联想推测了！

核心点还是 ts 的类型推断，我们知道，当变量无法被推断出类型的情况下，就兜底为 any ，而函数 foo 编译的时候， 形参 params 是没有值的，不过，好在我们指定了类型。在值不确定的情况下，变量值的具体类型还是未知的，而由于我们指定了类型为 number 或 string ，请注意，形参的类型只能是 number 或 string 中的一种，是一种不确定态，类似那个啥的猫，在没有具体值的情况，我们永远不知道他到底是 number ，还是 string ，而在方法体中，我们却使用了 string 类型的专有方法 toUpperCase ，你猜 ts 会怎么想！

我猜测 ts 会比较严格的遵循‘不确定就报错’的原则处理~

所以，`params.toUpperCase()` 报错了。

然后来分析一下为什么变量 params2 可以顺利通过编译的原因。

其实通过上面分析形参 params 的思路，不难得出答案，因为 params2 已经有值了，也就意味着 ts 知道了 params2 的具体类型，params2 已经不是量子态了。

我们通过下述实验来验证自己的猜测：

```ts
let val3 : number | string;
// error
val3.toUpperCase
```

你以为 ts 的自动推断能力仅仅如此吗？他只会比你想像的更加强大，如下示例：

```ts
function far(params:number | string) {
  if(typeof params == 'string') {
    // ok
    console.log(params.toUpperCase());
  }
}
```

他还可以这样：

```ts
function faa(params :number | string) {
  if(typeof params == 'number') {
    // to-d0
  } else {
    // ok
    console.log(params.toUpperCase());
  }
}
```

#### 彩蛋

考虑到联合类型会很长，或者别的原因，ts 提供了一个好用的功能，如下所示：

```ts
type NS = number | string
let ns : NS
// ok
ns = 100
// ok
ns = 'a string'
// error
ns = true

```

是不是有一种很强大的感觉！




[返回](/README.md)






