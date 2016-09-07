describe("Countdown Test Cases", function(){

  var exampleTestCases = {
    'GQEMAUVXY': ['GAME'],
    'TDWAYZROE': ['TODAY', 'TOWER', 'TRADE', 'WATER'],
    'EAEEAYITB': ['BEAT', 'BITE', 'BYTE'],
    'AKUIYOOLO': ['LOOK', 'YOLK'],
    'GVDTCAESU': ['CAGES', 'CAUSE', 'CAVES', 'DATES', 'GATES', 'GUEST', 'STAGE', 'USAGE']
  }
  for (var item in exampleTestCases){
    Test.assertSimilar(longestWord(item), exampleTestCases[item], "Should return correct array")
  }

  Test.assertSimilar(longestWord(""), null, "Should return None for empty string")
  Test.assertSimilar(longestWord("MKMKMKMKM"), null, "Should return None for empty array")
  Test.assertSimilar(longestWord("IIIWUGEZI"), null, "Should return None for empty array")
})
