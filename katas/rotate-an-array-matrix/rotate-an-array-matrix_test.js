describe('Rotate an array matrix', function() {

    var matrix;

    beforeEach(function() {
        matrix = [[1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]];
    });

    it('should rotate clockwise', function() {
        expect(rotate(matrix, 'clockwise')).toEqual([[7, 4, 1], [8, 5, 2],  [9, 6, 3]]);
    });

    it('should rotate counter-clockwise', function() {
        expect(rotate(matrix, 'counter-clockwise')).toEqual([[3, 6, 9], [2, 5, 8], [1, 4, 7]]);
    });
});
