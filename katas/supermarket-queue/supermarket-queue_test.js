describe('the supermarket queue', function() {

    it('should return sum of the times when n=1', function() {
        expect(queueTime([5,3,4], 1)).toEqual(12);
    });

    it('should calculate total time in a proper way when n not equal to 1', function() {
        expect(queueTime([10,2,3,3], 2)).toEqual(10);
    });
});
