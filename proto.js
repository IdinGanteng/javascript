var x = {
    a: 2,
    m: function(c) {
      return this.a + this.b + c;
    }
  };
  
  var y = {
    b: 2,
    __proto__: x,
  };
  
  var z = {
    __proto__: y,
  };
  
  console.log(y.m(7));
  console.log(z.m(20));