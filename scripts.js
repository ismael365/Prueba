var text = document.querySelector("#frutaVerdura");

var ingresar = prompt("ingresa un nombre de fruta o verdura");
console.log(ingresar)
var frutasVerduras = ["Aguacate","Carambola","Zanahoria","Chirimoya","Coco","Dátil","Kiwi","Litchi","Mango","Papaya","Piña","Plátano","Albaricoque", "Sandia" ,"Cereza","Ciruela","Higo","Kaki","Manzana","Melocotón","Nectarina","Níspero","Pera","Uva","Fresa","Alcachofa","Calabaza","Col","Coliflor","Perejil","Lechuga","Cilantro","Repollo","Acelga","Pepino","Betabel","Espinacas","Apio"];

    console.log(frutasVerduras)

 //["Mango", "Platano", "Zanahoria", "Aguacate","Coco" ];
 
    console.log(frutasVerduras.indexOf("Mango"))
  var posicion =  frutasVerduras.indexOf(ingresar)
  console.log(posicion);

  
var conv = frutasVerduras.toString().toLocaleLowerCase().split(",").indexOf(ingresar);

console.log(conv)

function categorias(){
    if(  posicion == -1  ) {
        text.innerHTML= ingresar + " Dato no encontrado"
    } else if( posicion > 26 ){
        text.innerHTML= ingresar +  " es verdura"
    } else if (  posicion < 24) {
        text.innerHTML= ingresar +  " es fruta"
    }
} categorias()


function categoriasmin(){
    if(  conv == -1  ) {
        text.innerHTML= ingresar + " no encontrado"
    } else if( conv > 24 ){
        text.innerHTML= ingresar +  " es verdura"
    } else if (  conv <= 24) {
        text.innerHTML= ingresar +  " es fruta"
    }
} categoriasmin()


var conv = frutasVerduras.toString().toLocaleLowerCase();
conv = new Array(conv)

console.log(conv.indexOf(ingresar))
