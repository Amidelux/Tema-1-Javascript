/////////tema exercitiu 1

function number (num) {
    return num % 10 === 0 ? true : false;
  }
  
  console.log (number(100));
  console.log (number(23))
  
  ////////tema exercitiu 2
  
  //function tellFortune (x, y, z, n) {}
    const locMunca = "programator";
    const locatieGeografica = "Italia";
    const numePartener = "Emanuel";
    const numarCopii = 3;
  
  
    //console.log(`Vei fi un ${locMunca} in ${locatieGeografica}, casatorit cu ${numePartener} si vei avea ${numarCopii} copii`)
    const tellFortune = `Vei fi un ${locMunca} in ${locatieGeografica}, casatorit cu ${numePartener} si vei avea ${numarCopii} copii!`
  
    console.log(tellFortune);
  
  ////tema exercitiu 3
  
  function whatday(num) { 
    switch(num) {
      case 1:
        return "Luni";
      case 2:
        return "Marti";
      case 3:
        return "Miercuri";
      case 4:
        return "joi";
      case 5:
        return "Vineri";
      case 6:
        return "Sambata";
      case 7:
        return "Duminica";
      default:
        return 'Gresit, introduceti un numar de la 1 la 7';
    }
  }
  
  console.log(whatday(1))
  console.log(whatday(5))