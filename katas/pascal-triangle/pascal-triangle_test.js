describe('Pascal-triangle', function() {

    it('should return empty array when depth equals 0', function() {
        expect(pascalsTriangle(0)).toEqual([]);
    });

    it('should return single-dimensional array when depth>0', function() {
        expect(pascalsTriangle(4)).toEqual([1,1,1,1,2,1,1,3,3,1]);
        expect(pascalsTriangle(5)).toEqual([1,1,1,1,2,1,1,3,3,1,1,4,6,4,1]);
    });
});
