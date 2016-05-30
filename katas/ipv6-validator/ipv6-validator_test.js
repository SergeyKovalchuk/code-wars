describe('IP v6 validator', function() {

    it('should return true for valid inputs', function() {
        expect(ipv6Validator('ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff')).toBeTruthy();  // full
        expect(ipv6Validator('2001:0DB8:0000:0000:0000:0000:1428:57ab')).toBeTruthy();  // full
        expect(ipv6Validator('2001:db8::1428:57ab')).toBeTruthy();  // shorten form
        expect(ipv6Validator('::192.168.0.1')).toBeTruthy();    // last 2 blocks written in ipv4 format
        expect(ipv6Validator('::1')).toBeTruthy();  // 0-run can touch the edge
        expect(ipv6Validator('1::')).toBeTruthy();  // 0-run can touch the edge
        expect(ipv6Validator('::')).toBeTruthy();   // address has all its bits set to 0
    });

    it('should return false for invalid inputs', function() {
        expect(ipv6Validator('2001::25de::cade')).toBeFalsy();  // two runs
        expect(ipv6Validator('192.168.0.1:ffff:: ')).toBeFalsy();  // ipv4 block not at the end
        expect(ipv6Validator('2001::0.1')).toBeFalsy(); // ipv4 block should have exactly 4 parts
        expect(ipv6Validator('2001::256.0.0.1')).toBeFalsy();   // invalid ipv4 value
        expect(ipv6Validator('2001::010.0.0.1')).toBeFalsy();   // leading zeroes in ipv4
        expect(ipv6Validator('0:0:0:0:0:0.0.0.1')).toBeFalsy(); // 5 + 2 != 8
        expect(ipv6Validator('0:0:0:0:0:0:0:0.0.0.1')).toBeFalsy(); // 7 + 2 != 8
        expect(ipv6Validator('2001:db8:0:0::0:0:0:0')).toBeFalsy(); // 0-run in the middle imply at least one block, resulting in at least 9 blocks in total => invalid
    });
});
