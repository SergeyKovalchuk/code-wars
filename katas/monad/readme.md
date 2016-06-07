####Description:

What's a monad?

Quote from Wikipedia:

'In functional programming, a monad is a structure that represents computations defined as sequences of steps. A type with a monad structure defines what it means to chain operations, or nest functions of that type together. This allows the programmer to build pipelines that process data in steps, in which each action is decorated with additional processing rules provided by the monad'.

For example in the picture the knight is in [6, 2]:
   1 2 3 4 5 6 7 8
8 | | | | | | | | |
7 | | | | | | | | |
6 | | | | | | | | |
5 | | | | | | | | |
4 | | | | |x| |x| |
3 | | | |x| | | |x|
2 | | | | | |*| | |
1 | | | |x| | | |x|

In one movement he can reach the next squares:
[ [ 8, 1 ], [ 8, 3 ], [ 4, 1 ], [ 4, 3 ], [ 7, 4 ], [ 5, 4 ] ]

This challenge is to write a function that will check whether it possible to reach destination in provided steps

####Example:

```js
canReach([6, 2], [8, 1], 1) === true
canReach([6, 2], [8, 2], 1) === false
canReach([6, 2], [8, 1], 2) === false
canReach([6, 2], [8, 2], 2) === true
canReach([6, 2], [6, 2], 0) === true
canReach([6, 2], [8, 1], 0) === false
```

See [tests in monad_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/monad/monad_test.js)

Good luck

#####[Original Kata](http://www.codewars.com/kata/monads-the-list-monad)
