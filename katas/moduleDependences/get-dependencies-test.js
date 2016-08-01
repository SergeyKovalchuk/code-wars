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
                "version": "1.0.2",
              }
            }
      },
      loremEmpty = {
            "dependencies": {
              "wordwrap": {
              }
            }
      }
  });
  
  it('should return correct array of dependencies in descending order', function() {
    expect(getDependencies(loremIpsum)).toEqual([ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2']);
  });
  
  it('should return latest version of dependency'), function() {
    expect(getDependencies(lorem)).toEqual([ 'wordwrap@1.0.2']);
  });
  
  it('should have the same character @'), function() {
    var result = getDependencies(lorem);
    expect(result[0].slice(-6,-5)).toEqual('@');
  });
  
  it('should return empty array if module doesn\'t have dependencies'), function() {
    expect(getDependencies(loremEmpty)).toEqual([]);
  });
});
