contract('Attribute', function(accounts) {
  var location = "localhost";
  it("Set  the location string, and get ", function(done) {
    var attribute = Attribute.deployed();

    //set the location
    return attribute.setLocation(location).then(function(tx) {
      
      //get the location
      return attribute.getLocation.call().then(function(setLoc) {
        console.log(setLoc);
        assert.equal(setLoc, location);
        done();
      }).catch(function(e) {
        console.log(e);
        assert.isTrue(false);
        done();
      });
      
    }).catch(function(e) {
      console.log(e);
      assert.isTrue(false);
      done();
    });
  });
});
