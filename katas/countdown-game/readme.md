# Task

Implement longestWord function that for given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters. The preloaded array words contains a bunch of uppercase words (generate please and provide in your answer) that you will have to loop through. Only return the longest word; if there is more than one, return the words of the same lengths in alphabetical order. If there are no words that can be made from the letters given, return null.

# Interesting Detail

Countdown is a British game show with number and word puzzles. The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile. The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters - letters can not be used more than once unless there is another of the same character.

# ExtraTask

Given an uppercase n letter string. Use es6+ syntax.

## Example

```js
letters = "ZZZZZZZZZ"
longest word = longestWord(letters) // None

letters = "POVMERKIA",
longest word = longestWord(letters) // ["VAMPIRE"]

letters = "DVAVPALEM"
longest word = longestWord(letters) // ["VAMPED", "VALVED", "PALMED"]
```

## Arguments

* letters: string that contain 9 letters(n in ExtraTask)

## Conditions

* Do not use any for/while loops or Array#forEach.
* Do not create any unnecessary functions e.g. helpers.

See tests in [countdown_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/countdown-game/countdown_test.js)
[Codewars task](http://www.codewars.com/kata/countdown-longest-word)

## Boilerplate
```js
function longestWord(letters) {
  //return longest word(s)
}
```
