// Variáveis
var valorVisor;
var resultado;

// Escreve o valor no visor

function escrever( el ){
    if ( document.getElementById("visor").value.length < 15 ){
        document.getElementById('visor').value += el.id;
    } else{
        alert("Só suportamos até 15x digitos!!");
    }
 }

// Pega o valor do visor 
function getValueVisor(){
    valorVisor = document.getElementById("visor").value;
    resultado = eval(valorVisor);
    valorVisor = document.getElementById("visor").value = resultado;
}

//Exclui o valor do visor
function clearDisplay(){
    document.getElementById('visor').value = '';    
}

//Exclui o último valor do visor
function clearLast(){
    valorVisor = document.getElementById('visor').value;
    var valorVisor1 = valorVisor.substr(0,(valorVisor.length - 1));
    document.getElementById('visor').value = valorVisor1;
}   

//Modo daltonismo/Modo padrão
var  boleano = true;

function Trocar(){
    if(boleano == true){
        window.document.getElementById('pagina').style.background = 'white';
        window.document.getElementById('botao').style.color = '#00BFFF';
        window.document.getElementById('1').style.color = '#00BFFF';
        window.document.getElementById('2').style.color = '#00BFFF';
        window.document.getElementById('3').style.color = '#00BFFF';
        window.document.getElementById('4').style.color = '#00BFFF';
        window.document.getElementById('5').style.color = '#00BFFF';
        window.document.getElementById('6').style.color = '#00BFFF';
        window.document.getElementById('7').style.color = '#00BFFF';
        window.document.getElementById('8').style.color = '#00BFFF';
        window.document.getElementById('9').style.color = '#00BFFF';
        window.document.getElementById('0').style.color = '#00BFFF';
        window.document.getElementById('-').style.color = '#00BFFF';
        window.document.getElementById('+').style.color = '#00BFFF';
        window.document.getElementById('*').style.color = '#00BFFF';
        window.document.getElementById('%').style.color = '#00BFFF';
        window.document.getElementById('c').style.color = '#00BFFF';
        window.document.getElementById('del').style.color = '#00BFFF';
        window.document.getElementById('=').style.color = '#00BFFF';
        window.document.getElementById('/').style.color = '#00BFFF';
        window.document.getElementById('.').style.color = '#00BFFF';
        window.document.getElementById('visor').style.color = '#00BFFF';
        
        window.document.getElementById('visor').style.background= '#F0FFFF';
        
        boleano = false;
    }
    else{
        window.document.getElementById('pagina').style.background = '#1c1716';
        window.document.getElementById('botao').style.color = '#FFFFFF';
        window.document.getElementById('1').style.color = '#FFFFFF';
        window.document.getElementById('2').style.color = '#FFFFFF';
        window.document.getElementById('3').style.color = '#FFFFFF';
        window.document.getElementById('4').style.color = '#FFFFFF';
        window.document.getElementById('5').style.color = '#FFFFFF';
        window.document.getElementById('6').style.color = '#FFFFFF';
        window.document.getElementById('7').style.color = '#FFFFFF';
        window.document.getElementById('8').style.color = '#FFFFFF';
        window.document.getElementById('9').style.color = '#FFFFFF';
        window.document.getElementById('0').style.color = '#FFFFFF';
        window.document.getElementById('-').style.color = '#FFFFFF';
        window.document.getElementById('+').style.color = '#FFFFFF';
        window.document.getElementById('*').style.color = '#FFFFFF';
        window.document.getElementById('%').style.color = '#FFFFFF';
        window.document.getElementById('c').style.color = '#FFFFFF';
        window.document.getElementById('del').style.color = '#FFFFFF';
        window.document.getElementById('=').style.color = '#FFFFFF';
        window.document.getElementById('/').style.color = '#FFFFFF';
        window.document.getElementById('.').style.color = '#FFFFFF';
        window.document.getElementById('visor').style.color = '#FFF';
        boleano = true;
    }
}
