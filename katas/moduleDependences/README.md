## Module Dependencies

Write recursive function that return all  dependencies (and sub-dependencies) in unique module, sort dependencies in alphabet order. 
Dependencies should be displayed as * @ * version dependency, eg. `Inflection @ 1.2.6`.

Extra Task -> * @ * allows multiple versions of the same module, but duplicates (identical versions) must be removed.

## Arguments

* `tree` : tree of dependencies.  In Example section you can see the structure.

## Example

// See the example

```javascript

var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

```
## Conditions

* You can't use `for`/`while`.

## Base

// Your work is to implement something like in Example in JavaScript.
// With this purpose, I have defined the getDependencies function.

```js
function getDependencies(tree) {
 // ... your code here.
 // NOTE: you can add some new arguments to function
}

module.exports = getDependencies
```

## Recourses

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys
