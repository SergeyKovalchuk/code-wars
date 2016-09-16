####Description:

This challenge is to find HERO who knows every from the matrix that provided in the upsaHero2016() function so it return upsa-profile name (HERO) just like in the examples. (the list of names in case of few results).
This matrix consist of the list of names (first row), the list that consist of big variety of skills and are going matrix (bitmap) of skills (1 - person have skill; 0 - doesn't have this skill). Element [0,0] is Heroes/skills.

####Example:

```js

matrixOfSkills = [['Heroes/skills', 'Siarhei', 'Ivan', 'Alexander', 'Dmitry', 'Nastassia'],
                  ['JS',             1,         1,      1,           1,        1],
                  ['CSS',            0,         1,      0,           0,        1],
                  ['HTML',           1,         1,      1,           1,        1],
                  ['nodeJS',         0,         1,      1,           0,        0],
                  ['Angular',        1,         1,      0,           0,        1],
                  ['c++',            1,         0,      1,           1,        0],
                  ['F#',             0,         1,      0,           0,        1]];

upsaHero2016( matrixOfSkills) // Ivan (because he knows 6 skills mare than anyone from list)
```
See [tests in upsa-hero-2016_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/upsa-hero-2016/upsa-hero-2016_test.js)

Good luck!
