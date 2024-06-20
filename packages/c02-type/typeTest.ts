// string
let str: string = 'type string'
console.log(str)

let str1 = 'type string 1'
console.log(str1)

// Type 'number' is not assignable to type 'string'.
// str1 = 10

// null
let nll
nll = 'is a string'
nll = 1

// array

// 初始化空数组
let arr = []
arr.push(100)
arr.push('a string')


// 初始化有值数组
let arr2 = [1]
arr2.push(100)
// arr2.push('a string')

let arr3 = [1, 'a string']
arr3.push(100)
arr3.push('another string')
// arr3.push(true)
// arr3.push({})


// 给数据组项指定类型
let typeArr: number[] = []
typeArr.push(100)
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// typeArr.push('a string') 