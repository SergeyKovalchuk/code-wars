describe('count the characters', function() {

    it('should return zero when word doesn\'t contain character', function() {
        expect(countChar('abc', 'd')).toEqual(0);
    });

    it('should return number of characters in word', function() {
        expect(countChar('telescope', 'e')).toEqual(2);
        expect(countChar('habrahabr', 'a')).toEqual(3);
    });

    it('should return number of characters in sentence', function() {
        expect(countChar('What is Lorem Ipsum?', 's')).toEqual(2);
        expect(countChar('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 's')).toEqual(5);
    });

    it('should be case insensitive', function() {
        expect(countChar('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 'i')).toEqual(3);
    });

    it('should count special characters', function() {
        expect(countChar('Where can I get some?', '?')).toEqual(1);
    });
});
