/********************
 * YOUR CODE BELOW! *
 ********************/

const iGetTheJoke = true;
const havingFun = true;
const learning = true;
const killingIt = learning && havingFun;

function returnFalse() {
  return false;
}

function isOpposite(condition) {
  return !condition;
}

function both(condition1, condition2) {
  return condition1 && condition2;
}

function either(condition1, condition2) {
  return condition1 || condition2;
}

function firstOnly(condition1, condition2) {
  return condition1 && !condition2;
}

function secondOnly(condition1, condition2) {
  return !condition1 && condition2;
}

function neither(condition1, condition2) {
  return !condition1 && !condition2;
}

function itsComplicated(condition1, condition2, condition3) {
  return !condition1 || condition2 && condition3
}



/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}