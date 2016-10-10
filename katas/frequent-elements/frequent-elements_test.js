describe('most frequently occurring elements', function() {
    var forecast = {
        "temperature": [
            [15,17,19,21,21,21,20,16],
            [16,17,22,22,22,22,20,16],
            [12,17,19,20,20,20,20,18],
            [14,15,19,19,20,22,18,17],
            [15,17,24,24,24,20,20,20]
        ]
    };
    var resultArray = [21,22,20,19,20];

    it('should return array of the most frequently occurring elements in sub-arrays.', function() {
        expect(getMostFrequent(forecast)).toEqual(resultArray);
    });
});
