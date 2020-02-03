# Foolin' With Booleans

### Introduction

```javascript
divingIntoBooleans = true;
```

### What You'll Learn

* You'll be flexing your value-returning `function` muscles.
* And you'll be trying your hand at:
  * Literal `boolean` values.
  * The unary `not` operator (`!`).
  * The binary `boolean` operators (`&&` and `||`).


### Tasks

![programmer joke: !false (it's funny because it's true)](https://storage.googleapis.com/replit/images/1569512326719_407dad6e2667dc94c76a8c0bcc18e25d.jpeg)

Let's make some `booleans`! **With `const`, if you please**...

* Create a variable named `iGetTheJoke` and set it equal to a boolean value that corresponds to whether or not the above joke is awesome.
* Create a variable called `havingFun` that holds the boolean value that corresponds to whether or not you are. In general, if not in this exercise. 
* Create a variable called `learning` that holds the boolean value that corresponds to whether or not you are. 
* Create a variable called `killingIt` and define it **in terms of the previous two variables** such that it is true if and only if both are. What this means is that if we changed the value of `learning` and `havingFun`, `killingIt` would automatically change to reflect it!


Now let's make some functions!

* Create a function named `returnFalse` that takes one parameter and _always_ returns `false` _no matter what the parameter is_!
* Create a function named `theOpposite` that takes one parameter that is a boolean and returns the opposite of it!
* Create a function named `both` that takes two parameters that are `booleans` and returns `true` if they're both `true`, and `false` otherwise.
* Create a function named `either` that takes in two parameters that are `booleans` and returns `true` if either is `true`, and `false` otherwise.
* Create a function named `firstOnly` that takes in two parameters and returns `true` only if the first parameter is `true` and the second parameter is `false`, otherwise returning `false`.
* Create a function named `secondOnly` that takes in two parameters and returns `true` only if the second parameter is `true` and the first parameter is `false`, otherwise returning `false`.
* Create a function named `neither` that takes in two parameters that are `booleans` and returns `false` if they're both `false`, and otherwise returns `true`.
* Create a function named `itsComplicated` that returns `true` if the first parameter is `false` **OR** if both the second and third are `true`. Otherwise it returns `false`.