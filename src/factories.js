app.factory('AdditionFactory', function() {
  var factory = {};
  var ops = [];
  factory.generate = function(digitsNumber, prop, firstDigit, opNumber) {
    ops = [];
    var flags = [];
    var f = firstDigit == 1 ? 0 : 10;
    var x,y,z, elements;
    for (i= 0; ops.length < opNumber; i++) {
      if(digitsNumber == 3) {
        x = Math.floor(Math.random() * 11) + f;
        y = Math.floor(Math.random() * 9) + 1;
        z = Math.floor(Math.random() * 9) + 1;
        while (x + y + z > 20) {
          x = Math.floor(Math.random() * 11) + f;
          y = Math.floor(Math.random() * 9) + 1;
          z = Math.floor(Math.random() * 9) + 1;
        }
        if(flags[x + '' + y + '' + z]) continue;
        if(flags[x + '' + z + '' + y]) continue;
        if(flags[y + '' + z + '' + x]) continue;
        if(flags[y + '' + x + '' + z]) continue;
        if(flags[z + '' + x + '' + y]) continue;
        if(flags[z + '' + y + '' + x]) continue;
        flags[x + '' + y + '' + z] = true;
        if(prop == 'result') {
          elements = ['show', 'show', 'show', 'hide'];
        } else {
          elements = ['show', 'show', 'show', 'show'];
          elements[Math.floor(Math.random() * 3)] = 'hide';
        }
        ops.push({x: x, y: y, z: z, res: x+y+z, elements: elements});
      } else {
        x = Math.floor(Math.random() * 9) + 1 + f;
        y = Math.floor(Math.random() * 9) + 1;
        while (x + y > 20) {
          x = Math.floor(Math.random() * 9) + 1 + f;
          y = Math.floor(Math.random() * 9) + 1;
        }
        if(flags[x + '' + y]) continue;
        if(flags[y + '' + x]) continue;
        flags[x + '' + y] = true;
        if(prop == 'result') {
          elements = ['show', 'show', 'hide'];
        } else {
          elements = ['show', 'show', 'show'];
          elements[Math.floor(Math.random() * 2)] = 'hide';
        }
        ops.push({x: x, y: y, res: x+y, elements: elements});
      }
    }
    return ops;
  };
  factory.generateSecond = function(digitsNumber, prop, kind, firstDigit, secondDigit, thirdDigit, opNumber) {
    ops = [];
    var flags = [];
    var x, y, z;
    var elements, conditions;
    if(kind == '1') {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        y = secondDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        z = thirdDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        var parsedX = (""+x).split('');
        var parsedY = (""+y).split('');
        var parsedZ = (""+z).split('');
        conditions = {
          2 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]),
          3 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1])
        }
        while ((x + y + z > 100) || conditions[digitsNumber] < 10) {
          x = firstDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          y = secondDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          z = thirdDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          var parsedX = (""+x).split('');
          var parsedY = (""+y).split('');
          var parsedZ = (""+z).split('');
          conditions = {
            2 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]),
            3 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1])
          }
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          if(flags[y + '' + x]) continue;
          flags[x + '' + y] = true;
        } else {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        }
        if(prop == 'result') {
          elements = digitsNumber == 3 ? ['show', 'show', 'show', 'hide'] : ['show', 'show', 'hide'];
        } else {
          elements = digitsNumber == 3 ? ['show', 'show', 'show', 'show'] : ['show', 'show', 'show'];
          var r = digitsNumber == 3 ? 3 : 2;
          elements[Math.floor(Math.random() * r)] = 'hide';
        }
        ops.push({x: x, y: y, z: z, res: x+y+z, res2: x+y, elements: elements});
      }
    } else if (kind == '2') {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        y = secondDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        z = thirdDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        var parsedX = (""+x).split('');
        var parsedY = (""+y).split('');
        var parsedZ = (""+z).split('');
        conditions = {
          2 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]),
          3 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1])
        }
        while ((x + y + z > 100) || conditions[digitsNumber] > 9) {
          x = firstDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          y = secondDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          z = thirdDigit == 1 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          var parsedX = (""+x).split('');
          var parsedY = (""+y).split('');
          var parsedZ = (""+z).split('');
          conditions = {
            2 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]),
            3 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1])
          }
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          if(flags[y + '' + x]) continue;
          flags[x + '' + y] = true;
        } else {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        }
        if(prop == 'result') {
          elements = digitsNumber == 3 ? ['show', 'show', 'show', 'hide'] : ['show', 'show', 'hide'];
        } else {
          elements = digitsNumber == 3 ? ['show', 'show', 'show', 'show'] : ['show', 'show', 'show'];
          var r = digitsNumber == 3 ? 3 : 2;
          elements[Math.floor(Math.random() * r)] = 'hide';
        }
        ops.push({x: x, y: y, z: z, res: x+y+z, res2: x+y, elements: elements});
      }
    } else {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 1 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        y = secondDigit == 1 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        z = thirdDigit == 1 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        while (x + y + z > 100) {
          x = firstDigit == 1 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          y = secondDigit == 1 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          z = thirdDigit == 1 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          if(flags[y + '' + x]) continue;
          flags[x + '' + y] = true;
        } else {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        }
        if(prop == 'result') {
          elements = digitsNumber == 3 ? ['show', 'show', 'show', 'hide'] : ['show', 'show', 'hide'];
        } else {
          elements = digitsNumber == 3 ? ['show', 'show', 'show', 'show'] : ['show', 'show', 'show'];
          var r = digitsNumber == 3 ? 3 : 2;
          elements[Math.floor(Math.random() * r)] = 'hide';
        }
        ops.push({x: x, y: y, z: z, res: x+y+z, res2: x+y, elements: elements});
      }
    }
    return ops;
  };
  factory.generateThird = function (digitsNumber, prop, kind, firstDigit, secondDigit, thirdDigit, fourthDigit, opNumber) {
    ops = [];
    var flags = [];
    var x, y, z, t;
    var parsedX, parsedY, parsedZ, parsedT, conditions;
    var elements = function () {
      var el;
      if(prop == 'result') {
        switch(digitsNumber) {
          case "2":
            el = ['show', 'show', 'hide'];
            break;
          case "3":
            el = ['show', 'show', 'show', 'hide'];
            break;
          case "4":
            el = ['show', 'show', 'show', 'show', 'hide'];
            break;
        }
      } else {
        switch(digitsNumber) {
          case "2":
            el = ['show', 'show', 'show'];
            el[Math.floor(Math.random() * 2)] = 'hide';
            break;
          case "3":
            el = ['show', 'show', 'show', 'show'];
            el[Math.floor(Math.random() * 3)] = 'hide';
            break;
          case "4":
            el = ['show', 'show', 'show', 'show', 'show'];
            el[Math.floor(Math.random() * 4)] = 'hide';
            console.log(el);
            break;
        }
      }
      return el;
    };
    var push = function (arr) {
      while(arr.length < 3) {
        arr.unshift('0');
      }
    };
    var buildRandomNumber = function (digit) {
      var r;
      switch (digit) {
        case '1':
          r = Math.floor(Math.random() * 9) + 1;
          break;
        case '2':
          r = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          break;
        case '3':
          r = Math.floor(Math.random() * (999 - 100 + 1) + 100);
          break;
      }
      return r;
    }
    if(kind == '1') {
      for(i=0; ops.length < opNumber; i++) {
        x = buildRandomNumber(firstDigit);
        y = buildRandomNumber(secondDigit);
        z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
        t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
        parsedX = (""+x).split('');
        parsedY = (""+y).split('');
        parsedZ = (""+z).split('');
        parsedT = (""+t).split('');
        conditions = {
          2 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]),
          3 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1]),
          4 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1]) + parseInt(parsedT[parsedT.length - 1])
        }
        while((x+y+z+t > 999) || conditions[digitsNumber]  < 10){
          x = buildRandomNumber(firstDigit);
          y = buildRandomNumber(secondDigit);
          z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
          t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
          parsedX = (""+x).split('');
          parsedY = (""+y).split('');
          parsedZ = (""+z).split('');
          parsedT = (""+t).split('');
          conditions = {
            2 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]),
            3 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1]),
            4 : parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1]) + parseInt(parsedT[parsedT.length - 1])
          }
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          if(flags[y + '' + x]) continue;
          flags[x + '' + y] = true;
        } else if(digitsNumber == 3) {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        } else {
          if(flags[x + '' + y + '' + z + '' + t]) continue;
          if(flags[x + '' + y + '' + t + '' + z]) continue;
          if(flags[x + '' + z + '' + y + '' + t]) continue;
          if(flags[x + '' + z + '' + t + '' + y]) continue;
          if(flags[x + '' + t + '' + y + '' + z]) continue;
          if(flags[x + '' + t + '' + z + '' + y]) continue;
          if(flags[y + '' + x + '' + z + '' + t]) continue;
          if(flags[y + '' + x + '' + t + '' + z]) continue;
          if(flags[y + '' + z + '' + x + '' + t]) continue;
          if(flags[y + '' + z + '' + t + '' + x]) continue;
          if(flags[y + '' + t + '' + x + '' + z]) continue;
          if(flags[y + '' + t + '' + z + '' + x]) continue;
          if(flags[z + '' + y + '' + x + '' + t]) continue;
          if(flags[z + '' + y + '' + t + '' + x]) continue;
          if(flags[z + '' + x + '' + y + '' + t]) continue;
          if(flags[z + '' + x + '' + t + '' + y]) continue;
          if(flags[z + '' + t + '' + y + '' + x]) continue;
          if(flags[z + '' + t + '' + x + '' + y]) continue;
          if(flags[t + '' + y + '' + z + '' + x]) continue;
          if(flags[t + '' + y + '' + x + '' + z]) continue;
          if(flags[t + '' + z + '' + y + '' + x]) continue;
          if(flags[t + '' + z + '' + x + '' + y]) continue;
          if(flags[t + '' + x + '' + y + '' + z]) continue;
          if(flags[t + '' + x + '' + z + '' + y]) continue;
          flags[x + '' + y + '' + z + '' + t] = true;
        }
        ops.push({x: x, y: y, z: z, t: t, res: x+y+z+t, res2: x+y+z, res3: x+y, elements: elements(digitsNumber)});
      }
    } else if(kind == '2') {
      for(i=0; ops.length < opNumber; i++) {
        x = buildRandomNumber(firstDigit);
        y = buildRandomNumber(secondDigit);
        z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
        t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
        parsedX = (""+x).split('');
        parsedY = (""+y).split('');
        parsedZ = (""+z).split('');
        parsedT = (""+t).split('');
        push(parsedX);
        push(parsedY);
        push(parsedZ);
        push(parsedT);
        while((x+y+z+t > 999) || (parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length -1]) + parseInt(parsedT[parsedT.length - 1]) > 9) || (parseInt(parsedX[parsedX.length - 2]) + parseInt(parsedY[parsedY.length - 2]) + parseInt(parsedZ[parsedZ.length -2]) + parseInt(parsedT[parsedT.length - 2]) > 9) || (parseInt(parsedX[parsedX.length - 3]) + parseInt(parsedY[parsedY.length - 3]) + parseInt(parsedZ[parsedZ.length -3]) + parseInt(parsedT[parsedT.length - 3]) > 9)){
          x = buildRandomNumber(firstDigit);
          y = buildRandomNumber(secondDigit);
          z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
          t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
          parsedX = (""+x).split('');
          parsedY = (""+y).split('');
          parsedZ = (""+z).split('');
          parsedT = (""+t).split('');
          push(parsedX);
          push(parsedY);
          push(parsedZ);
          push(parsedT);
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          flags[x + '' + y] = true;
        } else if(digitsNumber == 3) {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        } else {
          if(flags[x + '' + y + '' + z + '' + t]) continue;
          if(flags[x + '' + y + '' + t + '' + z]) continue;
          if(flags[x + '' + z + '' + y + '' + t]) continue;
          if(flags[x + '' + z + '' + t + '' + y]) continue;
          if(flags[x + '' + t + '' + y + '' + z]) continue;
          if(flags[x + '' + t + '' + z + '' + y]) continue;
          if(flags[y + '' + x + '' + z + '' + t]) continue;
          if(flags[y + '' + x + '' + t + '' + z]) continue;
          if(flags[y + '' + z + '' + x + '' + t]) continue;
          if(flags[y + '' + z + '' + t + '' + x]) continue;
          if(flags[y + '' + t + '' + x + '' + z]) continue;
          if(flags[y + '' + t + '' + z + '' + x]) continue;
          if(flags[z + '' + y + '' + x + '' + t]) continue;
          if(flags[z + '' + y + '' + t + '' + x]) continue;
          if(flags[z + '' + x + '' + y + '' + t]) continue;
          if(flags[z + '' + x + '' + t + '' + y]) continue;
          if(flags[z + '' + t + '' + y + '' + x]) continue;
          if(flags[z + '' + t + '' + x + '' + y]) continue;
          if(flags[t + '' + y + '' + z + '' + x]) continue;
          if(flags[t + '' + y + '' + x + '' + z]) continue;
          if(flags[t + '' + z + '' + y + '' + x]) continue;
          if(flags[t + '' + z + '' + x + '' + y]) continue;
          if(flags[t + '' + x + '' + y + '' + z]) continue;
          if(flags[t + '' + x + '' + z + '' + y]) continue;
          flags[x + '' + y + '' + z + '' + t] = true;
        }
        ops.push({x: x, y: y, z: z, t: t, res: x+y+z+t, res2: x+y+z, res3: x+y, elements: elements(digitsNumber)});
      }
    } else {
      for(i=0; ops.length < opNumber; i++) {
        x = buildRandomNumber(firstDigit);
        y = buildRandomNumber(secondDigit);
        z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
        t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
        while (x+y+z+t > 999) {
          x = buildRandomNumber(firstDigit);
          y = buildRandomNumber(secondDigit);
          z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
          t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          if(flags[y + '' + x]) continue;
          flags[x + '' + y] = true;
        } else if(digitsNumber == 3) {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        } else {
          if(flags[x + '' + y + '' + z + '' + t]) continue;
          if(flags[x + '' + y + '' + t + '' + z]) continue;
          if(flags[x + '' + z + '' + y + '' + t]) continue;
          if(flags[x + '' + z + '' + t + '' + y]) continue;
          if(flags[x + '' + t + '' + y + '' + z]) continue;
          if(flags[x + '' + t + '' + z + '' + y]) continue;
          if(flags[y + '' + x + '' + z + '' + t]) continue;
          if(flags[y + '' + x + '' + t + '' + z]) continue;
          if(flags[y + '' + z + '' + x + '' + t]) continue;
          if(flags[y + '' + z + '' + t + '' + x]) continue;
          if(flags[y + '' + t + '' + x + '' + z]) continue;
          if(flags[y + '' + t + '' + z + '' + x]) continue;
          if(flags[z + '' + y + '' + x + '' + t]) continue;
          if(flags[z + '' + y + '' + t + '' + x]) continue;
          if(flags[z + '' + x + '' + y + '' + t]) continue;
          if(flags[z + '' + x + '' + t + '' + y]) continue;
          if(flags[z + '' + t + '' + y + '' + x]) continue;
          if(flags[z + '' + t + '' + x + '' + y]) continue;
          if(flags[t + '' + y + '' + z + '' + x]) continue;
          if(flags[t + '' + y + '' + x + '' + z]) continue;
          if(flags[t + '' + z + '' + y + '' + x]) continue;
          if(flags[t + '' + z + '' + x + '' + y]) continue;
          if(flags[t + '' + x + '' + y + '' + z]) continue;
          if(flags[t + '' + x + '' + z + '' + y]) continue;
          flags[x + '' + y + '' + z + '' + t] = true;
        }
        ops.push({x: x, y: y, z: z, t: t, res: x+y+z+t, res2: x+y+z, res3: x+y, elements: elements()});
      }
    }
    return ops;
  }
  factory.generateFourth = function (digitsNumber, prop, kind, firstDigit, secondDigit, thirdDigit, fourthDigit, opNumber) {
    ops = [];
    var flags = [];
    var x, y, z, t;
    var parsedX, parsedY, parsedZ, parsedT;
    var elements = function () {
      var el;
      if(prop == 'result') {
        switch(digitsNumber) {
          case "2":
            el = ['show', 'show', 'hide'];
            break;
          case "3":
            el = ['show', 'show', 'show', 'hide'];
            break;
          case "4":
            el = ['show', 'show', 'show', 'show', 'hide'];
            break;
        }
      } else {
        switch(digitsNumber) {
          case "2":
            el = ['show', 'show', 'show'];
            el[Math.floor(Math.random() * 2)] = 'hide';
            break;
          case "3":
            el = ['show', 'show', 'show', 'show'];
            el[Math.floor(Math.random() * 3)] = 'hide';
            break;
          case "4":
            el = ['show', 'show', 'show', 'show', 'show'];
            el[Math.floor(Math.random() * 4)] = 'hide';
            break;
        }
      }
      return el;
    };
    var push = function (arr) {
      while(arr.length < 3) {
        arr.unshift('0');
      }
    };
    var buildRandomNumber = function (digit) {
      var r;
      switch (digit) {
        case '1':
          r = Math.floor(Math.random() * 9) + 1;
          break;
        case '2':
          r = Math.floor(Math.random() * (99 - 10 + 1) + 10);
          break;
        case '3':
          r = Math.floor(Math.random() * (999 - 100 + 1) + 100);
          break;
        case '4':
          r = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
          break;
      }
      return r;
    }
    if(kind == '1') {
      for(i=0; ops.length < opNumber; i++) {
        x = buildRandomNumber(firstDigit);
        y = buildRandomNumber(secondDigit);
        z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
        t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
        parsedX = (""+x).split('');
        parsedY = (""+y).split('');
        parsedZ = (""+z).split('');
        parsedT = (""+t).split('');
        while((x+y+z+t > 9999) || (parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length - 1]) + parseInt(parsedT[parsedT.length - 1]) < 10)){
          x = buildRandomNumber(firstDigit);
          y = buildRandomNumber(secondDigit);
          z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
          t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
          parsedX = (""+x).split('');
          parsedY = (""+y).split('');
          parsedZ = (""+z).split('');
          parsedT = (""+t).split('');
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          flags[x + '' + y] = true;
        } else if(digitsNumber == 3) {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        } else {
          if(flags[x + '' + y + '' + z + '' + t]) continue;
          if(flags[x + '' + y + '' + t + '' + z]) continue;
          if(flags[x + '' + z + '' + y + '' + t]) continue;
          if(flags[x + '' + z + '' + t + '' + y]) continue;
          if(flags[x + '' + t + '' + y + '' + z]) continue;
          if(flags[x + '' + t + '' + z + '' + y]) continue;
          if(flags[y + '' + x + '' + z + '' + t]) continue;
          if(flags[y + '' + x + '' + t + '' + z]) continue;
          if(flags[y + '' + z + '' + x + '' + t]) continue;
          if(flags[y + '' + z + '' + t + '' + x]) continue;
          if(flags[y + '' + t + '' + x + '' + z]) continue;
          if(flags[y + '' + t + '' + z + '' + x]) continue;
          if(flags[z + '' + y + '' + x + '' + t]) continue;
          if(flags[z + '' + y + '' + t + '' + x]) continue;
          if(flags[z + '' + x + '' + y + '' + t]) continue;
          if(flags[z + '' + x + '' + t + '' + y]) continue;
          if(flags[z + '' + t + '' + y + '' + x]) continue;
          if(flags[z + '' + t + '' + x + '' + y]) continue;
          if(flags[t + '' + y + '' + z + '' + x]) continue;
          if(flags[t + '' + y + '' + x + '' + z]) continue;
          if(flags[t + '' + z + '' + y + '' + x]) continue;
          if(flags[t + '' + z + '' + x + '' + y]) continue;
          if(flags[t + '' + x + '' + y + '' + z]) continue;
          if(flags[t + '' + x + '' + z + '' + y]) continue;
          flags[x + '' + y + '' + z + '' + t] = true;
        }
        ops.push({x: x, y: y, z: z, t: t, res: x+y+z+t, res2: x+y+z, res3: x+y, elements: elements()});
      }
    } else if(kind == '2') {
      for(i=0; ops.length < opNumber; i++){
        x = buildRandomNumber(firstDigit);
        y = buildRandomNumber(secondDigit);
        z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
        t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
        parsedX = (""+x).split('');
        parsedY = (""+y).split('');
        parsedZ = (""+z).split('');
        parsedT = (""+t).split('');
        push(parsedX);
        push(parsedY);
        push(parsedZ);
        push(parsedT);
        while((x+y+z+t > 9999) || (parseInt(parsedX[parsedX.length - 1]) + parseInt(parsedY[parsedY.length - 1]) + parseInt(parsedZ[parsedZ.length -1]) + parseInt(parsedT[parsedT.length - 1]) > 9) || (parseInt(parsedX[parsedX.length - 2]) + parseInt(parsedY[parsedY.length - 2]) + parseInt(parsedZ[parsedZ.length -2]) + parseInt(parsedT[parsedT.length - 2]) > 9) || (parseInt(parsedX[parsedX.length - 3]) + parseInt(parsedY[parsedY.length - 3]) + parseInt(parsedZ[parsedZ.length -3]) + parseInt(parsedT[parsedT.length - 3]) > 9) || (parseInt(parsedX[parsedX.length - 4]) + parseInt(parsedY[parsedY.length - 4]) + parseInt(parsedZ[parsedZ.length -4]) + parseInt(parsedT[parsedT.length - 4]) > 9)){
          x = buildRandomNumber(firstDigit);
          y = buildRandomNumber(secondDigit);
          z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
          t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
          parsedX = (""+x).split('');
          parsedY = (""+y).split('');
          parsedZ = (""+z).split('');
          parsedT = (""+t).split('');
          push(parsedX);
          push(parsedY);
          push(parsedZ);
          push(parsedT);
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          flags[x + '' + y] = true;
        } else if(digitsNumber == 3) {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        } else {
          if(flags[x + '' + y + '' + z + '' + t]) continue;
          if(flags[x + '' + y + '' + t + '' + z]) continue;
          if(flags[x + '' + z + '' + y + '' + t]) continue;
          if(flags[x + '' + z + '' + t + '' + y]) continue;
          if(flags[x + '' + t + '' + y + '' + z]) continue;
          if(flags[x + '' + t + '' + z + '' + y]) continue;
          if(flags[y + '' + x + '' + z + '' + t]) continue;
          if(flags[y + '' + x + '' + t + '' + z]) continue;
          if(flags[y + '' + z + '' + x + '' + t]) continue;
          if(flags[y + '' + z + '' + t + '' + x]) continue;
          if(flags[y + '' + t + '' + x + '' + z]) continue;
          if(flags[y + '' + t + '' + z + '' + x]) continue;
          if(flags[z + '' + y + '' + x + '' + t]) continue;
          if(flags[z + '' + y + '' + t + '' + x]) continue;
          if(flags[z + '' + x + '' + y + '' + t]) continue;
          if(flags[z + '' + x + '' + t + '' + y]) continue;
          if(flags[z + '' + t + '' + y + '' + x]) continue;
          if(flags[z + '' + t + '' + x + '' + y]) continue;
          if(flags[t + '' + y + '' + z + '' + x]) continue;
          if(flags[t + '' + y + '' + x + '' + z]) continue;
          if(flags[t + '' + z + '' + y + '' + x]) continue;
          if(flags[t + '' + z + '' + x + '' + y]) continue;
          if(flags[t + '' + x + '' + y + '' + z]) continue;
          if(flags[t + '' + x + '' + z + '' + y]) continue;
          flags[x + '' + y + '' + z + '' + t] = true;
        }
        ops.push({x: x, y: y, z: z, t: t, res: x+y+z+t, res2: x+y+z, res3: x+y, elements: elements()});
      }
    } else {
      for(i=0; ops.length < opNumber; i++) {
        x = buildRandomNumber(firstDigit);
        y = buildRandomNumber(secondDigit);
        z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
        t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
        while (x+y+z+t > 9999) {
          x = buildRandomNumber(firstDigit);
          y = buildRandomNumber(secondDigit);
          z = digitsNumber >= 3 ? buildRandomNumber(thirdDigit) : 0;
          t = digitsNumber == 4 ? buildRandomNumber(fourthDigit) : 0;
        }
        if(digitsNumber == 2) {
          if(flags[x + '' + y]) continue;
          flags[x + '' + y] = true;
        } else if(digitsNumber == 3) {
          if(flags[x + '' + y + '' + z]) continue;
          if(flags[x + '' + z + '' + y]) continue;
          if(flags[y + '' + z + '' + x]) continue;
          if(flags[y + '' + x + '' + z]) continue;
          if(flags[z + '' + x + '' + y]) continue;
          if(flags[z + '' + y + '' + x]) continue;
          flags[x + '' + y + '' + z] = true;
        } else {
          if(flags[x + '' + y + '' + z + '' + t]) continue;
          if(flags[x + '' + y + '' + t + '' + z]) continue;
          if(flags[x + '' + z + '' + y + '' + t]) continue;
          if(flags[x + '' + z + '' + t + '' + y]) continue;
          if(flags[x + '' + t + '' + y + '' + z]) continue;
          if(flags[x + '' + t + '' + z + '' + y]) continue;
          if(flags[y + '' + x + '' + z + '' + t]) continue;
          if(flags[y + '' + x + '' + t + '' + z]) continue;
          if(flags[y + '' + z + '' + x + '' + t]) continue;
          if(flags[y + '' + z + '' + t + '' + x]) continue;
          if(flags[y + '' + t + '' + x + '' + z]) continue;
          if(flags[y + '' + t + '' + z + '' + x]) continue;
          if(flags[z + '' + y + '' + x + '' + t]) continue;
          if(flags[z + '' + y + '' + t + '' + x]) continue;
          if(flags[z + '' + x + '' + y + '' + t]) continue;
          if(flags[z + '' + x + '' + t + '' + y]) continue;
          if(flags[z + '' + t + '' + y + '' + x]) continue;
          if(flags[z + '' + t + '' + x + '' + y]) continue;
          if(flags[t + '' + y + '' + z + '' + x]) continue;
          if(flags[t + '' + y + '' + x + '' + z]) continue;
          if(flags[t + '' + z + '' + y + '' + x]) continue;
          if(flags[t + '' + z + '' + x + '' + y]) continue;
          if(flags[t + '' + x + '' + y + '' + z]) continue;
          if(flags[t + '' + x + '' + z + '' + y]) continue;
          flags[x + '' + y + '' + z + '' + t] = true;
        }
        ops.push({x: x, y: y, z: z, t: t, res: x+y+z+t, res2: x+y+z, res3: x+y, elements: elements()});
      }
    }
    return ops;
  }
  return factory;
});

app.factory('SubFactory', function () {
  var factory = {};
  var ops = [];
  factory.generate = function(firstDigit, secondDigit, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var elements = ['show', 'show', 'hide'];
    if (firstDigit == 2 && secondDigit == 1) {
      for (i=0; ops.length < opNumber; i++) {
        x = Math.floor(Math.random() * 11) + 10;
        y = Math.floor(Math.random() * 9) + 1;
        if(flags[x + '' + y]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, res: x-y, elements: elements});
      }
    } else if (firstDigit == 2 && secondDigit == 2) {
      for (i=0; ops.length < opNumber; i++) {
        x = Math.floor(Math.random() * 11) + 10;
        y = Math.floor(Math.random() * 11) + 10;
        while(x < y) {
          x = Math.floor(Math.random() * 11) + 10;
          y = Math.floor(Math.random() * 11) + 10;
        }
        if(flags[x + '' + y]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, res: x-y, elements: elements});
      }
    } else {
      for (i=0; ops.length < opNumber; i++) {
        x = Math.floor(Math.random() * 9) + 1;
        y = Math.floor(Math.random() * 9) + 1;
        while(x < y) {
          x = Math.floor(Math.random() * 9) + 1;
          y = Math.floor(Math.random() * 9) + 1;
        }
        if(flags[x + '' + y]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, res: x-y, elements: elements});
      }
    }
    return ops;
  };
  factory.generateSecond = function (prop, kind, firstDigit, secondDigit, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var elements = function () {
      var el;
      switch(prop) {
        case 'diff':
          el = ['show', 'show', 'hide'];
          break;
        case 'dim':
          el = ['hide', 'show', 'show'];
          break;
        case 'sub':
          el = ['show', 'hide', 'show'];
          break;
        case 'assorted':
          el = ['show', 'show', 'show'];
          el[Math.floor(Math.random() * 2)] = 'hide';
          break;
      }
      return el;
    }
    if (kind == '1') {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
        while (parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-1]) < parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-1])) {
          x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
          y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
        }
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    } else if (kind == '2') {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
        while (parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-1]) >= parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-1]) && firstDigit != 1) {
          x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
          y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
        }
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    } else {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : Math.floor(Math.random() * 9) + 1;
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : Math.floor(Math.random() * 9) + 1;
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    }
    return ops;
  };
  factory.generateThird = function (prop, kind, firstDigit, secondDigit, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var elements = function () {
      var el;
      switch(prop) {
        case 'diff':
          el = ['show', 'show', 'hide'];
          break;
        case 'dim':
          el = ['hide', 'show', 'show'];
          break;
        case 'sub':
          el = ['show', 'hide', 'show'];
          break;
        case 'assorted':
          el = ['show', 'show', 'show'];
          el[Math.floor(Math.random() * 2)] = 'hide';
          break;
      }
      return el;
    }
    if (kind == '1') {
      for (i=0; ops.length < opNumber; i++) {
        x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        while (parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-1]) < parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-1]) || parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-2]) < parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-2])) {
          x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
          y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        }
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    } else if (kind == '2') {
      for (i=0; ops.length < opNumber; i++) {
        x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        while (parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-1]) >= parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-1]) || parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-2]) >= parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-2])) {
          x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
          y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        }
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    } else {
      for (i=0; ops.length < opNumber; i++) {
        x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    }
    return ops;
  };
  factory.generateFourth = function(prop, kind, firstDigit, secondDigit, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var elements = function () {
      var el;
      switch(prop) {
        case 'diff':
          el = ['show', 'show', 'hide'];
          break;
        case 'dim':
          el = ['hide', 'show', 'show'];
          break;
        case 'sub':
          el = ['show', 'hide', 'show'];
          break;
        case 'assorted':
          el = ['show', 'show', 'show'];
          el[Math.floor(Math.random() * 2)] = 'hide';
          break;
      }
      return el;
    }
    var getY = function () {
      var numb;
      switch (secondDigit) {
        case '2':
          numb = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
          break;
        case '3':
          numb = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
          break;
        case '4':
          numb = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
          break;
      }
      return numb;
    }
    if(kind == '1') {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 4 ? Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        y = getY();
        while (parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-1]) < parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-1]) || parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-2]) < parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-2]) || parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-3]) < parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-3])) {
          x = firstDigit == 4 ? Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
          y = getY();
        }
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    } else if (kind == '2') {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 4 ? Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        y = getY();
        while (parseInt((""+Math.max(x, y)).split('')[(""+Math.max(x, y)).split('').length-1]) >= parseInt((""+Math.min(x, y)).split('')[(""+Math.min(x, y)).split('').length-1])) {
          x = firstDigit == 4 ? Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
          y = getY();
        }
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    } else {
      for (i=0; ops.length < opNumber; i++) {
        x = firstDigit == 4 ? Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 : Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        y = getY();
        if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
        flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
        ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: elements()});
      }
    }
    return ops;
  };
  return factory;
});

app.factory('MultiFactory', function () {
  var factory = {};
  var ops = [];
  factory.generateSecond = function (opNumber) {
    ops = [];
    var flags = [];
    var x,y;
    for(i=0; ops.length < opNumber; i++) {
      x = Math.floor(Math.random() * 10) + 1;
      y = Math.floor(Math.random() * 5) + 1;
      if(flags[x + '' + y]) continue;
      if(flags[y + '' + x]) continue;
      flags[x + '' + y] = true;
      ops.push({x: x, y: y, res: x*y, elements: ['show', 'show', 'hide']});
    }
    return ops;
  }
  factory.generateThird = function(firstDigit, secondDigit, opNumber) {
    ops = [];
    var flags = [];
    var x,y, split, z1, z2;
    for(i=0; ops.length < opNumber; i++) {
      x = firstDigit == 3 ? Math.floor(Math.random() * (999 - 100 + 1)) + 100 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
      y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
      while (x*y > 1000) {
        x = firstDigit == 3 ? Math.floor(Math.random() * (999 - 100 + 1)) + 100 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1)) + 10 : Math.floor(Math.random() * 9) + 1;
      }
      if(flags[x + '' + y]) continue;
      if(flags[y + '' + x]) continue;
      flags[x + '' + y] = true;
      split = (""+y).split("");
      z1 = split[1] == 0 ? '00' : x * split[1];
      z2 = x * split[0];
      ops.push({x: x, y: y, z1: z1, z2: z2, res: x*y, elements: ['show', 'show', 'hide']});
    }
    return ops;
  };
  factory.generateFourth = function (opNumber) {
    ops = [];
    var flags = [];
    var x, y, split, z1, z2;
    for(i=0; ops.length < opNumber; i++) {
      x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      y = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
      if(flags[x + '' + y]) continue;
      if(flags[y + '' + x]) continue;
      flags[x + '' + y] = true;
      split = (""+y).split("");
      z1 = split[1] == 0 ? '000' : x * split[1];
      z2 = x * split[0];
      ops.push({x: x, y: y, z1: z1, z2: z2, res: x*y, elements: ['show', 'show', 'hide']});
    }
    return ops;
  }
  return factory;
});

app.factory('DivisionFactory', function () {
  var factory = {};
  var ops = [];
  factory.generateSecond = function (opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    for (i=0; ops.length < opNumber; i++) {
      x = Math.floor(Math.random() * (20 - 2 + 1) + 2);
      y = Math.floor(Math.random() * (9 - 2 + 1) + 2);
      while ((x/y) % 1 != 0) {
        x = Math.floor(Math.random() * (20 - 2 + 1) + 2);
        y = Math.floor(Math.random() * (9 - 2 + 1) + 2);
      }
      if(flags[x + '' + y]) continue;
      if(flags[y + '' + x]) continue;
      flags[x + '' + y] = true;
      ops.push({x: x, y: y, z: parseInt(x/y) * y, res: parseInt((x/y)), elements: ['show', 'show', 'hide', 'hide', 'hide']});
    }
    return ops;
  };
  factory.generateThird = function (prop, kind, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var elements = function () {
      var el;
      switch (prop) {
        case 'division':
          el = ['show', 'show', 'hide', 'hide', 'hide'];
          break;
        case 'divided':
          el = ['hide', 'show', 'show', 'show', 'hide'];
          break;
        case 'divisior':
          el = ['show', 'hide', 'show', 'show', 'hide'];
          break;
      }
      return el;
    }
    if(kind == 'remainder') {
      for(i=0; ops.length < opNumber; i++) {
        x = Math.floor(Math.random() * (99 - 10 + 1) + 10);
        y = Math.floor(Math.random() * (9 - 2 + 1) + 2);
        while ((x/y) % 1 == 0) {
          x = Math.floor(Math.random() * (99 - 10 + 1) + 10);
          y = Math.floor(Math.random() * (9 - 2 + 1) + 2);
        }
        if(flags[x + '' + y]) continue;
        if(flags[y + '' + x]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, z: parseInt(x/y) * y, res: parseInt((x/y)), elements: elements()});
      }
    } else if (kind == 'wo-remainder') {
      for(i=0; ops.length < opNumber; i++){
        x = Math.floor(Math.random() * (99 - 10 + 1) + 10);
        y = Math.floor(Math.random() * (9 - 2 + 1) + 2);
        while ((x/y) % 1 != 0) {
          x = Math.floor(Math.random() * (99 - 10 + 1) + 10);
          y = Math.floor(Math.random() * (9 - 2 + 1) + 2);
        }
        if(flags[x + '' + y]) continue;
        if(flags[y + '' + x]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, z: parseInt(x/y) * y, res: parseInt((x/y)), elements: elements()});
      }
    } else {
      for(i=0; ops.length < opNumber; i++){
        x = Math.floor(Math.random() * (99 - 10 + 1) + 10);
        y = Math.floor(Math.random() * (9 - 2 + 1) + 2);
        if(flags[x + '' + y]) continue;
        if(flags[y + '' + x]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, z: parseInt(x/y) * y, res: parseInt((x/y)), elements: elements()});
      }
    }
    return ops;
  }
  factory.generateFourth = function (prop, kind, firstDigit, secondDigit, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var elements = function () {
      var el;
      switch (prop) {
        case 'division':
          el = ['show', 'show', 'hide', 'hide', 'hide'];
          break;
        case 'divided':
          el = ['hide', 'show', 'show', 'show', 'hide'];
          break;
        case 'divisior':
          el = ['show', 'hide', 'show', 'show', 'hide'];
          break;
      }
      return el;
    }
    if(kind == 'remainder') {
      for(i=0; ops.length < opNumber; i++) {
        x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : (firstDigit == 3 ? Math.floor(Math.random() * (999 - 100 + 1) + 100) : Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : Math.floor(Math.random() * (9 - 2 + 1) + 2);
        while (((x/y) % 1 == 0) || ((""+parseInt((x/y))).length > 2) || (y > x)) {
          x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : (firstDigit == 3 ? Math.floor(Math.random() * (999 - 100 + 1) + 100) : Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));
          y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : Math.floor(Math.random() * (9 - 2 + 1) + 2);
        }
        if(flags[x + '' + y]) continue;
        if(flags[y + '' + x]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, z: parseInt(x/y) * y, res: parseInt((x/y)), elements: elements()});
      }
    } else if (kind == 'wo-remainder') {
      for(i=0; ops.length < opNumber; i++){
        x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : (firstDigit == 3 ? Math.floor(Math.random() * (999 - 100 + 1) + 100) : Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : Math.floor(Math.random() * (9 - 2 + 1) + 2);
        while (((x/y) % 1 != 0) || ((""+parseInt((x/y))).length > 2) || (y > x)) {
          x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : (firstDigit == 3 ? Math.floor(Math.random() * (999 - 100 + 1) + 100) : Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));
          y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : Math.floor(Math.random() * (9 - 2 + 1) + 2);
        }
        if(flags[x + '' + y]) continue;
        if(flags[y + '' + x]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, z: parseInt(x/y) * y, res: parseInt((x/y)), elements: elements()});
      }
    } else {
      for(i=0; ops.length < opNumber; i++){
        x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : (firstDigit == 3 ? Math.floor(Math.random() * (999 - 100 + 1) + 100) : Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));
        y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : Math.floor(Math.random() * (9 - 2 + 1) + 2);
        while (((""+parseInt((x/y))).length > 2) || (y > x)) {
          x = firstDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : (firstDigit == 3 ? Math.floor(Math.random() * (999 - 100 + 1) + 100) : Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));
          y = secondDigit == 2 ? Math.floor(Math.random() * (99 - 10 + 1) + 10) : Math.floor(Math.random() * (9 - 2 + 1) + 2);
        }
        if(flags[x + '' + y]) continue;
        if(flags[y + '' + x]) continue;
        flags[x + '' + y] = true;
        ops.push({x: x, y: y, z: parseInt(x/y) * y, res: parseInt((x/y)), elements: elements()});
      }
    }
    return ops;
  }
  return factory;
});

app.factory('MindAdditionFactory', function () {
  var factory = {};
  var ops = [];
  factory.generateSecond = function (prop, opNumber) {
    ops = [];
    var flags = [];
    var x, y, z;
    var op1 = function (r) {
      if (r == 1) {
        x = Math.floor((Math.random() * 9) + 1) * 10;
        y = Math.floor((Math.random() * 9) + 1) * 10;
        while (x + y > 100) {
          x = Math.floor((Math.random() * 9) + 1) * 10;
          y = Math.floor((Math.random() * 9) + 1) * 10;
        }
        return {x:x, y:y};
      } else {
        x = Math.floor((Math.random() * 9) + 1) * 10;
        y = Math.floor((Math.random() * 9) + 1) * 10;
        z = Math.floor((Math.random() * 9) + 1) * 10;
        while (x + y + z > 100) {
          x = Math.floor((Math.random() * 9) + 1) * 10;
          y = Math.floor((Math.random() * 9) + 1) * 10;
          z = Math.floor((Math.random() * 9) + 1) * 10;
        }
        return {x:x, y:y, z:z};
      }
    }
    var op2 = function () {
      x = Math.floor(Math.random() * (50 - 4 + 1) + 4);
      y = Math.floor(Math.random() * (50 - 4 + 1) + 4);
      while(x+y>50) {
        x = Math.floor(Math.random() * (50 - 4 + 1) + 4);
        y = Math.floor(Math.random() * (50 - 4 + 1) + 4);
      }
      return {x:x, y:y};
      // ops.push({x: Math.max(x, y), y: Math.min(x, y), res: x + y, elements: ['show', 'show', 'hide'], digit: 2});
    }
    if(prop == 1) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op1(Math.floor(Math.random() * 2));
        var oX = op.x;
        var oY = op.y;
        var oZ = op.z;
        if(!op.z) {
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        } else {
          if(flags[oX + '' + oY + '' + oZ]) continue;
          if(flags[oX + '' + oZ + '' + oY]) continue;
          if(flags[oY + '' + oZ + '' + oX]) continue;
          if(flags[oY + '' + oX + '' + oZ]) continue;
          if(flags[oZ + '' + oX + '' + oY]) continue;
          if(flags[oZ + '' + oY + '' + oX]) continue;
          flags[oX + '' + oY + '' + oZ] = true;
          ops.push({x: oX, y: oY, z: oZ, res: oX + oY + oZ, elements: ['show', 'show', 'show', 'hide'], digit: 3});
        }
      }
    } else if (prop == 2) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op2();
        var oX = op.x;
        var oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: Math.max(oX, oY), y: Math.min(oX, oY), res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
      }
    } else {
      for (i=0; ops.length < opNumber / 2; i++) {
        var op = op1(Math.floor(Math.random() * 2));
        var oX = op.x;
        var oY = op.y;
        var oZ = op.z;
        if(!op.z) {
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        } else {
          if(flags[oX + '' + oY + '' + oZ]) continue;
          if(flags[oX + '' + oZ + '' + oY]) continue;
          if(flags[oY + '' + oZ + '' + oX]) continue;
          if(flags[oY + '' + oX + '' + oZ]) continue;
          if(flags[oZ + '' + oX + '' + oY]) continue;
          if(flags[oZ + '' + oY + '' + oX]) continue;
          flags[oX + '' + oY + '' + oZ] = true;
          ops.push({x: oX, y: oY, z: oZ, res: oX + oY + oZ, elements: ['show', 'show', 'show', 'hide'], digit: 3});
        }
      }
      for (i=0; ops.length < opNumber; i++) {
        var op = op2();
        var oX = op.x;
        var oY = op.y;
        ops.push({x: Math.max(oX, oY), y: Math.min(oX, oY), res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
      }
    }
    return ops;
  }
  factory.generateThird = function (prop, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var op1 = function () {
      x = Math.floor(Math.random() * (99 - 10 + 1) + 10);
      y = Math.floor(Math.random() * (99 - 10 + 1) + 10);
      while (x + y > 100) {
        x = Math.floor(Math.random() * (99 - 10 + 1) + 10);
        y = Math.floor(Math.random() * (99 - 10 + 1) + 10);
      }
      return {x:x, y:y}
    }
    var op2 = function () {
      x = Math.floor(Math.random() * (999 - 100 + 1) + 100);
      y = Math.floor(Math.random() * 9) + 1;
      return {x:x, y:y}
    }
    var op3 = function () {
      x = Math.floor((Math.random() * 9) + 1) * 100;
      y = Math.floor((Math.random() * 9) + 1) * 10;
      return {x:x, y:y}
    }
    if(prop == 1) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op1();
        var oX = op.x;
        var oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
      }
    } else if (prop == 2) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op2();
        var oX = op.x;
        var oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
      }
    } else if (prop == 3){
      for (i=0; ops.length < opNumber; i++) {
        var op = op3();
        var oX = op.x;
        var oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
      }
    } else {
      if (opNumber == 25){
        for (i=0; ops.length < 9; i++) {
          var op = op1();
          var oX = op.x;
          var oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 17; i++) {
          var op = op2();
          var oX = op.x;
          var oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 25; i++) {
          var op = op3();
          var oX = op.x;
          var oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
      } else {
        for (i=0; ops.length < 8; i++) {
          var op = op1();
          var oX = op.x;
          var oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 16; i++) {
          var op = op2();
          var oX = op.x;
          var oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 24; i++) {
          var op = op3();
          var oX = op.x;
          var oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
      }
    }
    return ops;
  }
  factory.generateFourth = function (prop, opNumber) {
    ops = [];
    var flags = [];
    var x, y, z;
    var op1 = function () {
      x = Math.floor((Math.random() * 8) + 1) * 100;
      y = Math.floor(Math.random() * (99 - 10 + 1) + 10);
      return {x:x, y:y}
    }
    var op2 = function () {
      x = Math.floor(Math.random() * (999 - 100 + 1) + 100);
      y = Math.floor((Math.random() * 8) + 1) * 100;
      while (x + y > 9999) {
        x = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        y = Math.floor((Math.random() * 8) + 1) * 100;
      }
      return {x:x, y:y}
    }
    var op3 = function () {
      x = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
      y = Math.floor((Math.random() * 8) + 1) * 100;
      while (x + y > 9999) {
        x = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        y = Math.floor((Math.random() * 8) + 1) * 100;
      }
      return {x:x, y:y}
    }
    if(prop == 1) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op1();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
      }
    } else if (prop == 2) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op2();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
      }
    } else if (prop == 3){
      for (i=0; ops.length < opNumber; i++) {
        var op = op3();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
      }
    } else {
      if (opNumber == 25){
        for (i=0; ops.length < 9; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 17; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 25; i++) {
          var op = op3();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
      } else if (opNumber == 21) {
        for (i=0; ops.length < 7; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 14; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 21; i++) {
          var op = op3();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
      } else if (opNumber == 16) {
        for (i=0; ops.length < 5; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 10; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 16; i++) {
          var op = op3();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
      } else {
        for (i=0; ops.length < 8; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 16; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
        for (i=0; ops.length < 24; i++) {
          var op = op3();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX + oY, elements: ['show', 'show', 'hide'], digit: 2});
        }
      }
    }
    return ops;
  }
  return factory;
});

app.factory('MindSubFactory', function () {
  var factory = {};
  var ops = [];
  factory.generateSecond = function (opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    for (i=0; ops.length < opNumber; i++) {
      x = Math.floor((Math.random() * 9) + 1) * 10;
      y = Math.floor((Math.random() * 9) + 1) * 10;
      if(flags[Math.max(x,y) + '' + Math.min(x,y)]) continue;
      flags[Math.max(x,y) + '' + Math.min(x,y)] = true;
      ops.push({x: Math.max(x, y), y: Math.min(x, y), res: Math.max(x, y) - Math.min(x, y), elements: ['show', 'show', 'hide']});
    }
    return ops;
  }
  factory.generateThird = function (prop, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var op1 = function () {
      x = Math.floor(Math.random() * (99 - 10 + 1) + 10);
      y = Math.floor((Math.random() * 8) + 1) * 10;
      return {x: Math.max(x,y), y: Math.min(x,y)}
    }
    var op2 = function () {
      x = Math.floor((Math.random() * 9) + 1) * 100;
      y = Math.floor((Math.random() * 9) + 1) * 10;
      return {x: x, y: y}
    }
    if(prop == 1) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op1();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
      }
    } else if (prop == 2) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op2();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
      }
    } else {
      if(opNumber == 25) {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 25; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
        }
      } else {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 24; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
        }
      }
    }
    return ops;
  }
  factory.generateFourth = function (prop, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var op1 = function () {
      x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      y = Math.floor((Math.random() * 9) + 1) * 10;
      return {x:x, y:y}
      // ops.push({x: x, y: y, res: x - y, elements: ['show', 'show', 'hide']});
    }
    var op2 = function () {
      x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      y = Math.floor((Math.random() * 9) + 1) * 100;
      while (y > x) {
        x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        y = Math.floor((Math.random() * 9) + 1) * 100;
      }
      return {x:x, y:y}
      // ops.push({x: x, y: y, res: x - y, elements: ['show', 'show', 'hide']});
    }
    if(prop == 1) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op1();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
      }
    } else if (prop == 2) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op2();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
      }
    } else {
      if(opNumber == 25) {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 25; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
        }
      } else {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 24; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX - oY, elements: ['show', 'show', 'hide']});
        }
      }
    }
    return ops;
  };
  return factory;
});

app.factory('MindMultiFactory', function () {
  var factory = {};
  var ops = [];
  factory.generateThird = function (prop, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var op1 = function () {
      x = Math.floor(Math.random() * 8) + 1;
      y = Math.floor(Math.random() * 8) + 1;
      return {x: Math.max(x,y), y: Math.min(x,y)};
    }
    var op2 = function (r) {
      x = Math.floor(Math.random() * 99) + 1;
      y = r == 0 ? 10 : 100;
      while (x * y > 1000) {
        x = Math.floor(Math.random() * 99) + 1;
        y = r == 0 ? 10 : 100;
      }
      return {x: Math.max(x,y), y: Math.min(x,y)};
    }
    if(prop == 1) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op1();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
      }
    } else if (prop == 2) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op2(Math.floor(Math.random() * 2));
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
      }
    } else {
      if(opNumber == 25) {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 25; i++) {
          var op = op2(Math.floor(Math.random() * 2));
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
      } else {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 24; i++) {
          var op = op2(Math.floor(Math.random() * 2));
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
      }
    }
    return ops;
  };
  factory.generateFourth = function (prop, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var multipliers = [10, 100, 1000];
    var op1 = function () {
      x = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
      y = multipliers[Math.floor(Math.random() * 3)];
      return {x: Math.max(x,y), y: Math.min(x,y)};
    };
    var op2 = function (r) {
      x = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      y = multipliers[Math.floor(Math.random() * 3)];
      return {x: Math.max(x,y), y: Math.min(x,y)}
    };
    if(prop == 1) {
      for (i=0; ops.length <opNumber; i++) {
        var op = op1();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
      }
    } else if (prop == 2) {
      for (i=0; ops.length <opNumber; i++) {
        var op = op2();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
      }
    } else {
      if(opNumber == 25) {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 25; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
      } else {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 24; i++) {
          var op = op2();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
      }
    }
    return ops;
  };
  return factory;
});

app.factory('ShortMultiFactory', function () {
  var factory = {};
  var ops = [];
  factory.generate = function(prop, opNumber) {
    ops = [];
    var flags = [];
    var x, y;
    var op1 = function () {
      var multipliers = [10, 100, 1000];
      x = Math.floor(Math.random() * 998) + 2;
      y = multipliers[Math.floor(Math.random() * 3)] * Math.floor((Math.random() * 9)  + 1);
      while(x*y > 999999) {
        x = Math.floor(Math.random() * 998) + 2;
        y = multipliers[Math.floor(Math.random() * 3)] * Math.floor((Math.random() * 9)  + 1);
      }
      return {x: x, y: y};
    }
    var op2 = function (r) {
      var multipliers = [5, 25, 50];
      r = Math.floor(Math.random() * 2);
      x = r == 0 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
      y = multipliers[Math.floor(Math.random() * 3)];
      while(x*y > 999999) {
        x = r == 0 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        y = multipliers[Math.floor(Math.random() * 3)];
      }
      return {x: x, y: y};
    }
    if(prop == 1) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op1();
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
      }
    } else if (prop == 2) {
      for (i=0; ops.length < opNumber; i++) {
        var op = op2(Math.floor(Math.random() * 2));
        oX = op.x;
        oY = op.y;
        if(flags[oX + '' + oY]) continue;
        if(flags[oY + '' + oX]) continue;
        flags[oX + '' + oY] = true;
        ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
      }
    } else {
      if(opNumber == 25) {
        for (i=0; ops.length < 12; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 25; i++) {
          var op = op2(Math.floor(Math.random() * 2));
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
      } else if (opNumber == 21) {
        for (i=0; ops.length < 10; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 21; i++) {
          var op = op2(Math.floor(Math.random() * 2));
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
      } else {
        for (i=0; ops.length < 14; i++) {
          var op = op1();
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
        for (i=0; ops.length < 29; i++) {
          var op = op2(Math.floor(Math.random() * 2));
          oX = op.x;
          oY = op.y;
          if(flags[oX + '' + oY]) continue;
          if(flags[oY + '' + oX]) continue;
          flags[oX + '' + oY] = true;
          ops.push({x: oX, y: oY, res: oX * oY, elements: ['show', 'show', 'hide']});
        }
      }
    }
    return ops;
  };
  return factory;
});

app.factory('ShortDivisionFactory', function () {
  var factory = {};
  var ops = [];
  factory.generateThird = function (opNumber) {
    ops = [];
    var x,y;
    for (i=0; i<opNumber; i++) {
      x = Math.floor((Math.random() * 9) + 1) * 10;
      y = 10;
      ops.push({x: x, y: y, res: x/y, elements: ['show', 'show', 'hide']});
    }
    return ops;
  };
  factory.generateFourth = function (opNumber) {
    ops = [];
    var flags = [];
    var x, y, r;
    var dividers = [10, 100, 1000];
    for (i=0; ops.length < opNumber; i++) {
      r = Math.floor(Math.random() * 2);
      x = r == 0 ? Math.floor((Math.random() * 9) + 1) * 1000 : Math.floor((Math.random() * (99 - 10 + 1)) + 10) * 1000;
      y = dividers[Math.floor(Math.random() * 3)];
      if(flags[x + '' + y]) continue;
      if(flags[y + '' + x]) continue;
      flags[x + '' + y] = true;
      ops.push({x: x, y: y, res: x/y, elements: ['show', 'show', 'hide', 'hide', 'hide']});
    }
    return ops;
  };
  return factory;
});

app.factory('BuildDirectionsFactory', function () {
  var alignments =[];
  var dr = ['horizontal', 'vertical'];
  return function(direction, length) {
    alignments = [];
    var lenH, lenV;
    switch(length) {
      case 24:
        lenH = 9;
        lenV = 15;
        break;
      case 18:
        lenH = 8;
        lenV = 10;
        break;
      case 21:
        lenH = 6;
        lenV = 15;
        break;
      case 30:
        lenH = 12;
        lenV = 18;
        break;
      case 29:
        lenH = 14;
        lenV = 15;
        break;
      case 26:
        lenH = 8;
        lenV = 18;
        break;
      case 20:
        lenH = 8;
        lenV = 12;
        break;
      case 22:
        lenH = 10;
        lenV = 12;
        break;
    }
    if(direction == 'assorted') {
      for(i=0; i < lenH; i++){
        alignments.push(dr[0]);
      }
      for(t=0; t < lenV; t++){
        alignments.push(dr[1]);
      }
    } else {
      for(i=0; i < length; i++){
        alignments.push(direction);
      }
    }
    return alignments;
  };
});
