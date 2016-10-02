####Description:

This challenge is to write a method that folds a given array of integers by the middle x-times.
If the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.
A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\
                    4/            4|          4\
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*

####Example:

```js
foldAnArray([1,2,3,4,5], 1); //returns [6,6,3]
foldAnArray([1,2,3,4,5], 2); //returns [9,6]
```

See [tests in fold-an-array_test.js](https://github.com/AlexVvx/code-wars/tree/master/katas/fold-an-array/fold-an-array_test.js)

Good luck

#####[Original Kata](http://www.codewars.com/kata/fold-an-array)
