####Description:

This challenge is to write an algorithm that will identify valid presentation of IPv6 addresses (https://en.wikipedia.org/wiki/IPv6_address#Presentation). Input to the function is guaranteed to be a single string.
Note, that your task isn't to ensure, that "recommended representation" from that article is used. You should only check validity.

IPv6 is basically written as 8 blocks separated by :.
Each block contains 1-4 hex digits, leading zeroes are allowed, but ain't obligatory.
``
On top of that there are two extra variations, which can be applied both:
- one run (length > 0) of consecutive zero-blocks can be replaced with ::
2001:0DB8:0000:0000:0000:0000:1428:57ab
2001:0DB8::1428:57ab

- last two blocks can be written in IPv4 format, so-called "Dotted-quad notation"
 2001:0DB8::1428:57ab
 2001:0DB8::20.40.87.171

####Example:

```js
ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff //valid, full
2001:0DB8:0000:0000:0000:0000:1428:57ab //valid, full
2001:db8::1428:57ab   // valid, shorten form
::192.168.0.1         // valid, last 2 blocks written in ipv4 format
::1                   // valid, 0-run can touch the edge
1::                   // valid, 0-run can touch the edge
::                    // valid, address has all its bits set to 0
```

See [tests in ipv6-validator_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/ipv6-validator/ipv6-validator_test.js)

Good luck

#####[Original Kata](http://www.codewars.com/kata/5722d87c785220f5780013cf)
