## Vid 0: 11/12/2022

**Today's Progress**:

- Introduction to programming.
- EcmaScript
- How to execute javascript

**Introduction to programming:**
<br>Programming is nothing but a conversation with computer or just giving the instructions to computer in the proper format that coomputer can understand and he is doing what you are telling to do.

What kind of Things the computer can able to to?
<br> In the initial time computer are meant for f=doing mathematical calculations. But now a days computer are good at sharing information to the across the globe like videos, messages, knowledge etc.

**EcmaScript**
<br>EcmaScript is a standarad for the javascript that helps to run on any browsers,
So javascript and EcmaScript are used interchangeably.

**How to execute JavaScript?**

1. Execute in the browser.
2. Using runtime environment by using node.js (outside the browser)
3. Inside the Html file using script tag.

## Vid 1: 12/12/2022

**Today's Progress**:

- What are variables?
  <br>Variables is just a container that store the referrence of a value, means the value stored in memory and the address will store in that variable container.

  The value of the variable can be changed during the runtime its called dynamically typed language and other is statically typed language once the variable initialized it cant be changed.

  ```
  let a = 7;
  ----------
  7 is a literal
  a is a identifier
  = is a assignment operator
  combining its called decalring variable.
  ```

- Ruled for choosing variable names:<br>
  - letters, digits, underscores and $dollar sign allowed
  - must begin with a $, \_ or a letter
  - javascript reserved words cannot be use an variable name
  - variable names are case sensitive.

## Vid 2: 14/12/2022

**Today's Progress**:

let, var & const

**Points:**<br>

1. var is used in pre ES6(Ecmascript 6)
2. var is globally scoped while let and const are blocked declared
3. let can be updated but can not be redeclared
4. const can neither be updated nor redeclared
5. var variables are initialized with undefined whereas let and const variable are not initialized
6. const must be initialized during declaration unlike var and let.

## Vid 3: 15/12/2022

**Today's Progress**:
Primitive data types and non primitive data types

what are data types?
the value that hold by a variable to in human way what we call that value type are called data types

like bottle hold water, so water is a data type

- what is primitive data types?
  <br>the data type that are built in javascript, is called primitive data types

- **Types of primitive data types:**

1. Null
2. Number
3. Symbol
4. String
5. Boolean
6. BigInt
7. Underfined

- Non primitive data type are a object, what is object? object is a container that holds a data in a key value pair.

```
let a = null;
let b = 345;
let c = 'ashwin';
let d = Symbol('Hi i am a symbol');
let e = true;
let f = BigInt('985');
let g = underfined;

console.log(a, b, c, d, f, g)
console.log(typeof f) //typeof helps to find out which type of data type are holding by f vriable.

const item = {
    'name':'ashwin',
    'salary':12000,
    'is_employed':true,
}

console.log(item['name']);
```
