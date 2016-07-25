describe('factorial', function() {

    it('should return factorial', function() {
        expect(factorial(5)).toEqual(120);
        expect(factorial(0)).toEqual(1);
    });
});
