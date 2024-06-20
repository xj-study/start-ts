// object
let obj1 = {}
// error
// obj1.x = 0;

// ok
obj1.hasOwnProperty('x')
obj1.constructor

let obj2 = { x: 0 }
// ok
obj2.x = 100

let obj3: { x: number }
// ok
obj3.x = 100

let user: {
  name: string
  age: number
  sex: number
}
user.name = 'a name'
user.age = 20
user.sex = 1

function display(user: { name: string; age: number; sex: number }) {
  console.log(user.name, user.age, user.sex ? '男' : '女')
}

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

class Student {
  name: string
  age: number
  sex: number
}
let stu = new Student()
stu.name = 'student a'
stu.age = 18
stu.sex = 0
function showStudent(student: Student) {
  console.log(student.name, student.age)
}
