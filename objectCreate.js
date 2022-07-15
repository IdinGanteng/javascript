// var bird = {
//     fly: true,
//     color: 'putih',
//   };
  
//   var burhan = Object.create(bird);
  
//   console.log(burhan.fly);
//   console.log(burhan.color);


var idin = {
    model: 'mullet',
    mata: 'mata keberkahhan',
  };
  
  var ayyub= Object.create(idin);
  
  console.log('gaya rambut: ' + idin.model + ', matanya: ' + idin.mata);
  console.log('gaya rambut: ' + ayyub.model + ', matanya: ' + ayyub.mata + '\n');
  
  // jika mengganti gaya rambut atau mata si idin, maka ayyub juga ikut ganti
  console.log('idin ganti gaya rambut \n')
  idin.model = 'mohawk';
  console.log('matanya juga ganti \n')
  
  console.log('gaya rambut: ' + idin.model + ', matanya: ' + idin.mata);
  console.log('gaya rambut: ' + ayyub.model + ', matanya: ' + ayyub.mata + '\n');
  
  // jika ayyub mengganti matanya, maka idin ngga ikut ganti karena idin punya pendirian
  console.log('ayyub pun sesat dan mengganti matanya \n')
  ayyub.mata = 'mata dajjal';
  
  console.log('gaya rambut: ' + idin.model + ', matanya: ' + idin.mata);
  console.log('gaya rambut: ' + ayyub.model + ', matanya: ' + ayyub.mata);