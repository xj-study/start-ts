#### 要点

除了基本数据类型，以及数组，最普遍使用的就应该是对象了，我们来看一下对象该怎么使用：

```ts
let obj1 = {}
// error
obj1.x = 0
```

当我们给变量赋值一个空对象时，就不能像 js 那样，随意增加属性了。

对象明显跟数组有点不太一样，ts 自动推断时，他根据赋值的对象，就已经推断出了对象合法存在的属性，若是一个空对象，除了继承自 Object.prototype 上的属性外，其它的属性都是不合法的。如下代码所示：

```ts
// ok
obj1.hasOwnProperty('x')
// ok
obj1.constructor
```

而定义一个对象的的类型是很简单的，如下所示：

```ts
let obj2 = { x: 0 }
// ok
obj2.x = 100

let obj3: { x: number }
// ok
obj3.x = 100
```

上述方式都可以经过 ts 编译。

#### 尝试一下

现在我们来点复杂的应用，代码如下所示：

```ts
let user: {
  name: string
  age: number
  sex: number
}
user.name = 'a name'
user.age = 20
user.sex = 1
```

先不考虑 user 为空报错问题，只要能通过编译，说明语法是没问题的。

这时若还有一个方法，如下所示：

```ts
function display(user: { name: string; age: number; sex: number }) {
  console.log(user.name, user.age, user.sex ? '男' : '女')
}
```

大家有没有发现 user 的类型定义很重复，完全有必要将重复的地方抽离利用呀！

怎么办呢？

我们可以用到 type !

实现如下所示：

```ts
type User = {
  name: string
  age: number
  sex: number
}

let user2: User
user2.name = 'a name'
user2.age = 20
user2.sex = 1

function display2(user: User) {
  console.log(user.name, user.age, user.sex ? '男' : '女')
}
```

有没有一种清爽的感觉！

当然，除了 type 语法，针对上面的情况，我们还可以用类来组织代码。

[返回](/README.md)
