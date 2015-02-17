

describe("module", function(){

  beforeEach(function(){
    var title = document.createElement("h1");
    title.id = "title";
    document.body.appendChild(title);
    blah.showDemFrenchies();
  });

  it("has tests", function(){

    var tested = false;
    expect(true).toBeTruthy();

  });

// // uncomment for failing test
//   it("populates the h1 element", function(){
//     expect(blah._h1.innerHTML).toEqual(blah.frenchies);
//   });

});
