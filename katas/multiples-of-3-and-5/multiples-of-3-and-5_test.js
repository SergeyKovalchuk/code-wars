describe('multiples of 3 and 5', function() {

    it('should return multiples of 3 and 5', function() {
        expect(multiplesOf3And5(10)).toEqual(23);
        expect(multiplesOf3And5(19)).toEqual(78);
        expect(multiplesOf3And5(200)).toEqual(9168);
    });
});
