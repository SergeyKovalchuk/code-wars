describe('Snail', function() {

    it('should return empty array when depth equals 0', function() {
        expect(snail([[]])).toEqual([]);
    });

    it('should return single-dimensional array when depth>0', function() {
        expect(snail([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);
        expect(snail([[1,2,3],[8,9,4],[7,6,5]])).toEqual([1,2,3,4,5,6,7,8,9]);
        expect(snail([[1,2,3,1],[4,5,6,4],[7,8,9,7],[7,8,9,7]])).toEqual([1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8]);
    });
});
