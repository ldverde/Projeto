function Mediana() {
    var Entra = document.getElementById("entrada").value;
    var sep = Entra.split(" ");
    var sep2 = sep.map(Number).filter(function(num) {
      return !isNaN(num);
    });
    var sep3 = Array.from(sep2);
    var sep4 = sep3.sort(function(a, b) {
      return a - b;
    });
    document.getElementById("ordem").innerHTML = `Este é o Conjunto Númerico Ordenado : ${sep4}`;
    console.log(sep4)

  

    var ld = sep4.length;
    var iI;
    var iF;
    if (ld %2 === 0) {
      iI = ld / 2 - 1;
      iF = ld / 2;
    }
    else{
      iI = Math.floor(ld / 2 );
      iF = Math.floor(ld / 2 );
    }

    
    var ouseja = " ";
    var selec;
    if (ld %2 === 1) {
      var selec = `O Número do Meio é : ${sep4.slice(iI, iF + 1)}`;
      var ouseja = "Ou Seja,";
    }
    else {
      selec = `Os Números do Meio São : ${sep4.slice(iI, iF + 1)}`;
    }
    console.log(sep4.slice(iI, iF + 1));
    document.getElementById("selecnum").innerHTML = selec;
    document.getElementById("p").innerHTML = ouseja;



    var setup = sep4.slice(iI, iF + 1);
    var soma;
    var tudo = " ";
    if (ld %2 === 1) {
      var setup = sep4.slice(iI, iF + 1);
    }
    else {
      setup = (setup[0] + setup[1]) / 2;
      soma = sep4.slice(iI, iF + 1)[0] + sep4.slice(iI, iF + 1)[1];
      tudo = `${sep4.slice(iI, iF + 1)[0]} + ${sep4.slice(iI, iF + 1)[1]} = ( ${soma} )/ 2 = ${setup} `
    }

    console.log(tudo);
    document.getElementById("par").innerHTML = tudo;

    console.log(setup);
    document.getElementById("para").innerHTML = `A Mediana É : ${setup}`;
    
} 


function Media() {
  var entrad = document.getElementById("entrada").value;
  var entrad2 = entrad.split(" ");
  var entrad3 = Array.from(entrad2);
  var entrad4 = entrad3.map(Number).filter(function(num) {
    return !isNaN(num)});
  var soma = entrad4.reduce(function(a, b) {
    return a + b;
  });
   
document.getElementById("pa").innerHTML = `A Soma Dos Números é : ${soma}`;
document.getElementById("pa2").innerHTML = `A Quantidade de Números é : ${entrad4.length}`;
document.getElementById("para2").innerHTML = `A Soma Dos Números dividido pela quantidade : ${soma} / ${entrad4.length} = ${soma / entrad4.length}`;
document.getElementById("para3").innerHTML = `A Média dos Números é :  ${soma / entrad4.length}`;

}; 