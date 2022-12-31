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

## Vid 4: 17/12/2022

**Today's Progress**:
Practice set of chapter 1

## Vid 5: 17/12/2022

**Today's Progress**:

### Operators and expressions

A fragment of code that produces a value is called an expressions.
Every value that is written on js is an expression.

For ex 77 and 'ashwin' --> it did not throw an any error

Operators are just a symbols that helps to perform operations on values, variables and data types.

7 + 5 = 12
(7 and 5 are operand, + and = sign are the operator and 12 is the output)

Every operator are generate somekind of result.

**Types of Operators**

1. Aruthmetic operators<br>
   This operators are helps to perform mathematical operations

```
+  Addition
- subtraction
* multiplication
/ division (return quotient)
% modulas (return remainder)
** exponential (a ^ b)
++ increamental
-- decreamental
```

2. Assignment operator<br>
   Helps to store values in a variable
   like right hand side value in a left hand side variable.

```
=  (x = 20)
below assignment operators are called augmented assignment operators
+=  x = x + 5
-=  x = x - 5
/=  x = x / 5
*=  x = x * 5
%=  x = x % 5
**=  x = x ** 5
```

3. Comparision operators<br>
   This operators helps to compare two values and it returns the boolean type data type (true or false)

```
== equal to (only checks by comparing values)
!= not equal value
=== checks value and also type
!== not equal value or not equal type
> greater than
< less than
>= greater than or equal to
<= less than or equal to
? ternary operator
```

4. logical operators<br>
   this operators works on two or more comparision operators, true and true or false or true

```
&& and
|| or
!  not
```

5. type

```
typeof <value>
```

6. bitwise<br>
   this operators perform bit by bit operations on numbers.

**Comments in js**

sometimes we want a text that dont want to be executed, in code we call a comments

```
// single line comments

/* multiline comment */
```

## Vid 6: 18/12/2022

**Today's Progress**:

Conditional Expressions

So Conditional expressions are used to anticipate the conditions, or create a flow of a program.

like

```
if (something happens) {
   //do something
} else {
   // do other thing
}
```

So there are several types of conditional expressions in javascript<br>

**Types of conditional expression**

1. if statement
2. if...else statement
3. if ...else if...else statement

### if statement

if there is only single condition to check based on true there used an if statement.

syntax:

```
if (condition){
   // execute this code
}
```

### if...else statement

if you want to check more than condition then use if else statement.

syntax:

```
if (condition){
   // execute this code
} else {
   //execute this code
}
```

### if...else if statement

if there is multiple conditions to check then use if...else if statement

syntax:

```
if (age>70){
   console.log('a valid age')
} else if (age > 10 && age < 15){
   console.log('but you are a kid can't drive'.)
} else if (age > 18){
   console.log('not a kid')
}else {
   console.log('Invalid age.')
}
```

**Ternary Operator**

single line if else statement that evealuates block of code

let condition = (age > 18) ?'drive':'not drive')

console.log('You can', condition)

## Vid 7: 18/12/2022

**Today's Progress**:

Chapter 2: Question set

## Vid 8: 20/12/2022

**Today's Progress**:

For loops in javascript

Loops are just the programming power that helps to do the things in a repetative manner until the condition is false.

### Types of loops in javascript

1. for loop --> loop a block of code number of times.
2. for in loop --> loops through the keys of an object
3. for of loop --> loops through the values through an object
4. while loop --> loops a block based on a specific condition
5. Do while loop --> while variant which runs atlease once

The for loop:<br>
**Syntax**

```
for (statement 1; statement2; statement3){
   // code to be executed
}
```

- statement one executed one time
- statement 2 is the condition based on which the loops runs(loop body is executed)
- statement 3 is executed everytime the loop body executed.

The for in loop:<br>
Syntax:

```
for(key in object){
   // do with keys
}
```

The for of loop:<br>
Syntax:

```
for(variable of iterable){
   //do something with iterable
}
```

// Disclaimer: var is a global scoped and let is a blocked scope, if you use 'let' in for loop and if you try to access outside the for loop it throws an exception but oppsite is with var

## Vid 9: 21/12/2022

**Today's Progress**:

While loops

It a loop that check the condition first then execute it.
Note: if the condition never false then loop goes into infinite
Syntax:

```
while(condition){
   //code to be executed
}
```

Do while loop
In this loop the loop executed once and then it checks condition.

syntax:

```
do{
   //code to be executed
}while(condition)
```

## Vid 10: 25/12/2022

**Today's Progress**:

Functions in javascript

What are the functions?
Functions are just a block of code that helps to avoid rewrite the logic again and again, just write it once and call the logic whenever you want.

Syntax:

```
function <function_name>(parameter:optional){
   //your logic
}
```

Ex.

```
function hello(){
   console.log('Hello world');
}

// with parameter
function greet(name){
   console.log('Hello', name);
   //here name work like a local variable
}
```

after creating it must be invoke

```
greet('ashwin');
```

Arrow functions in javascript

```
const sum = (a, b) => {
    return a + b
}

let a = 20;
let b = 50;

console.log(sum(a + b))
```

## Vid 11: 26/12/2022

**Today's Progress**:

Chapter 3: practice set

## Vid 12: 27/12/2022

**Today's Progress**:

Introduction to strings

String are the collection of characters
In simple words string are the data types in javascripts that gives the power to manipulate the text in javascript.

Syntax:

```
let name = "ashwin";

console.log(name.length) // name.length helps to print the character length
```

- you can use single and double quote to create a string.

```
name = 'yuvraj'
```

**Template literals**

template literals means write a string using backticks (\`\`)

- main reason is you can write a string in a both ways.
  ex

```
let sentence = `the name"s is ashwin`
```

- we can directly insert a variable inside template literal, this is called string interpolation.

```
let name1 = 'ashwin'
let name2 = 'rohan'

let sentence = `${name1} and ${name2} both are colleauges.`

output:
Ashwin and rohan both are colleagues.
```

_Escape sequence characters_

The following are the escape sequence characters:

1. \n "new line"
2. \t "for a four space or a single tab"
3. \r "for carriage return"
4. \ "for telling interpreter to avoid after this slash"

## Vid 13: 28/12/2022

**Today's Progress**:
String methods in javascript

## Vid 14: 29/12/2022

**Today's Progress**:

Chapter 4 practice set

## Vid 15: 30/12/2022

**Today's Progress**:
Arrays in the javascript

Collection of more than a one objects that holds by a single variable.

ex.
let a = [1 , false, 'name', {age: 28}]

## Vid 16: 31/12/2022

**Today's Progress**:

Arrays methods in js
