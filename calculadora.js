function elemen(num){
    var numero=document.getElementById('resultado').innerHTML;
    //valor ira ser armazenado quando chamado
    document.getElementById('resultado').innerHTML=numero+num
    //o valor armazenado ira ser adicionado junto a o proximo numero
}

function zerar(){
    document.getElementById('resultado').innerHTML=''
}

function tirar(){
    var resultado=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= resultado.substring(0,  resultado.length -1)
}

function calcular(){
    var resultado=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=eval(resultado)
}
