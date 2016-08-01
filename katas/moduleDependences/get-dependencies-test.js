describe('module dependencies', function() {
  var testTree;
  
  beforeEach(function() {
      loremIpsum = {
        "name": "lorem-ipsum",
        "version": "0.1.1",
        "dependencies": {
          "optimist": {
            "version": "0.3.7",
            "dependencies": {
              "wordwrap": {
                "version": "0.0.2"
              }
            }
          },
          "inflection": {
            "version": "1.2.6"
          }
        }
      },
      lorem = {
            "dependencies": {
              "wordwrap": {
                "version": "0.0.2",
              }
            }
      }
  });
  
  it('should return correct array of dependencies in descending order', function() {
      expect(getDependencies(loremIpsum)).toEqual([ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2']);
  });
  
  it('should return latest version of dependency'), function() {
      expect(getDependencies(loremIpsum)).toEqual([ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2']);
  });
});
