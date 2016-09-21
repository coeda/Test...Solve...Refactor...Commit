function squareRootGenerator(){
  let module = {};

  module.squared = function(number){
    return Math.sqrt(number);
  };

  module.sums = function(number){
    let sums = 0;
    for (var i = 1; i <= number; i++) {
      sums += module.squared(i);
    }

    return (Math.round( 100 * (sums)) / 100);
  };

  return module;
}
module.exports = squareRootGenerator;