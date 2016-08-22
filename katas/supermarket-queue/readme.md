####Description:

This challenge is to write a function to calculate the total time required for all the customers to check out.
The function has two input variables:
- customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
- n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

####Example:

```js
queueTime([5,3,4], 1); // Returns 12 because when n=1, the total time is just the sum of the times

queueTime([10,2,3,3], 2); // Returns 10 because here n=2 and the 2nd, 3rd, and 4th people in the queue finish before the 1st person has finished.
```

See [tests in supermarket-queue_test.js](https://github.com/AlexVvx/code-wars/tree/master/katas/supermarket-queue/supermarket-queue_test.js)

Good luck

#####[Original Kata](http://www.codewars.com/kata/the-supermarket-queue)
