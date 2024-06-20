let val: number | string
val = 100
val = 'a string'


foo('a string')
function foo(params:number | string) {
  let params2:number | string = 'a string'
  // ok
  console.log(params2.toUpperCase());
  // error
  // console.log(params.toUpperCase());
}


let val2: number | string | null
val = 100
val = 'a string'
val = null


let val3 : number | string;
// error
// val3.toUpperCase

function far(params:number | string) {
  if(typeof params == 'string') {
    // ok
    console.log(params.toUpperCase());
  }
}

function faa(params :number | string) {
  if(typeof params == 'number') {
    // to-d0
  } else {
    // ok
    console.log(params.toUpperCase());
  }
}

type NS = number | string
let ns : NS
// ok
ns = 100
// ok
ns = 'a string'
// error
// ns = true



