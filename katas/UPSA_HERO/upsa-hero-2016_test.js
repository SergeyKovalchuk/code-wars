describe('upsa hero function', function() {

    matrixOfSkills = [['Heroes/skills', 'Siarhei', 'Ivan', 'Alexander', 'Dmitry', 'Nastassia'],
                      ['JS',             1,         1,      1,           1,        1],
                      ['CSS',            0,         1,      0,           0,        1],
                      ['HTML',           1,         1,      1,           1,        1],
                      ['nodeJS',         0,         1,      1,           0,        0],
                      ['Angular',        1,         1,      0,           0,        1],
                      ['c++',            1,         0,      1,           1,        0],
                      ['F#',             0,         1,      0,           0,        1]];

    it('should return hero\'s name correctly', function() {
        expect(upsaHero2016(matrixOfSkills)).toEqual('Ivan');
    });
});
