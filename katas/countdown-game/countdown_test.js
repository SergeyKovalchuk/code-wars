describe('Countdown Test Cases', function(){

  var exampleTestCases = {
    'GQEMAUVXY': ['GAME'],
    'TDWAYZROE': ['TODAY', 'TOWER', 'TRADE', 'WATER'],
    'EAEEAYITB': ['BEAT', 'BITE', 'BYTE'],
    'AKUIYOOLO': ['LOOK', 'YOLK'],
    'GVDTCAESU': ['CAGES', 'CAUSE', 'CAVES', 'DATES', 'GATES', 'GUEST', 'STAGE', 'USAGE']
  };

  it('Should return correct array', function() {
    for (var item in exampleTestCases){
      expect(longestWord(item)).toEqual(exampleTestCases[item]);
    }
  });

  it('Should return None for empty string', function() {
    expect(longestWord('')).toEqual(null);
  });

  it('Should return None for empty array', function() {
    expect(longestWord([])).toEqual(null);
  });
});
