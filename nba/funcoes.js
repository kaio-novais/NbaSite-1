/*
var validaemail = prompt('Digite o Seu E-mail');
var a = (validaemail.indexOf("@"));
if(a <= 0){
    alert("E-Mail incorreto, porfavor, redigite o mesmo")
}
else{
    alert("E-mail Correto, muito bem")
}

var validaemail = prompt('Digite o Seu E-mail');
var a = (validaemail.indexOf("@"));
if(a <= 0){
    document.write('  <h1>email correto</h1>')
        
    
}
else{
    document.write('<h1>Email incorreto</h1>')
}

*/
/*
var a= prompt("digite um numero")
while (a >=0) {
    fatorial--
    if (a<0) {
        alert("por favor digite um numero positivo")
  
    }
}*/

   /* var items = new Array();/*variavel que recebe os valores da VAR comidas*/
    var adicionar = prompt("Quantos items deseja adicionar?");/*quantidade de itens a serem adcionados*/
    var i = 0; /*referencia de contagem base*/
    while (i < adicionar) {
        comidas = prompt("Digite o nome das frutas")/*valores a serem adcionados*/
        items.push(comidas)/*adiciona os valores da variavel comidas na variavel items*/
        i++ /*adiciona mais 1*/
        console.log(items);
     }

     function areaQuadrado() {
        var base = prompt("valor da base");
        var altura = prompt=("valor da altura");
        i = 0;
      while (i < base, altura) {
            if (base <= altura) {
                alert('A area do quadrado é: '+ base * altura);
                return
            }              
            else{
                alert('impossivel calcular a area do quadrado. Valores desiguais.')
            }
            break
        }
    }


