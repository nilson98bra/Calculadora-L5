const listaOperacoes = '+ ÷ - x';

function adicionarNumero(numero){
    let contaAtual = $('#input-calc').text();
    if(contaAtual.length==0 && numero=='0'){
        contaAtual = `${numero},`;
        $('#input-calc').text(contaAtual);
    }
    else{
        contaAtual = `${contaAtual}${numero}`;
        $('#input-calc').text(contaAtual);
    }

}

function adicionarVirgula(){
    let contaAtual = $('#input-calc').text();
    if(contaAtual.length==0 || listaOperacoes.includes(contaAtual[contaAtual.length-1])){
        contaAtual = `${contaAtual}0${','}`;
        $('#input-calc').text(contaAtual);
    }
    else{
        contaAtual = `${contaAtual}${','}`;
        $('#input-calc').text(contaAtual);
    }
    

}

function adicionarParenteses(parenteses){
    let contaAtual = $('#input-calc').text();
    if(contaAtual[contaAtual.length-1]>=0 && contaAtual[contaAtual.length-1]<=9 && parenteses == '('){
        contaAtual = `${contaAtual}x${parenteses}`;
        $('#input-calc').text(contaAtual);
    }else{
        contaAtual = `${contaAtual}${parenteses}`;
        $('#input-calc').text(contaAtual);
    }   
}

function limparCampo(){
    $('#input-calc').text('');
}

function selecionarOperacao(simboloOperacao){
    let contaAtual = $('#input-calc').text();
    if(contaAtual.length==0 && simboloOperacao=='-'){
        contaAtual = `${contaAtual}${simboloOperacao}`;
        $('#input-calc').text(contaAtual);
    }
    
    if(listaOperacoes.includes(contaAtual[contaAtual.length-1]) && contaAtual.length > 1){
        if(simboloOperacao=='-'){
            contaAtual = `${contaAtual}${simboloOperacao}`;
            $('#input-calc').text(contaAtual);
        }else{
            contaAtual = `${contaAtual.substring(0,contaAtual.length-1)}${simboloOperacao}`;
            $('#input-calc').text(contaAtual);
        } 
    }

    if(contaAtual[contaAtual.length-1]>=0 && contaAtual[contaAtual.length-1]<=9){
        contaAtual = `${contaAtual}${simboloOperacao}`;
        $('#input-calc').text(contaAtual);
    }
  
    if(contaAtual[contaAtual.length-1]== '(' && simboloOperacao=='-'){
        contaAtual = `${contaAtual}${simboloOperacao}`;
        $('#input-calc').text(contaAtual);
    }

}


function apagarUltimoCaractere(){
    let contaAtual =  $('#input-calc').text();
    contaAtual = contaAtual.substring(0,contaAtual.length-1);
    $('#input-calc').text(contaAtual);
}

function calcular(){
    
    const nome = $('#input-nome').val();
    const conta = $('#input-calc').text();

    if(nome.trim().length > 20){
        alert("Nome com máximo de 20 caracteres ");
    }
    if(conta.length > 25){
        alert("Cálculo complexo! Insira no máximo 20 digitos");
    }
    
    if(nome.trim().length == 0){
        alert("O campo nome não pode estar em branco!");
     }else{
        if(checarSeExisteOperacao(conta)){
            postCalculo(nome,conta);
            $('#input-calc').text('');
        }
     }
    
   
}


function checarSeExisteOperacao(conta){
    
    if(conta.indexOf('+') != -1){
        return true
    } 
    if(conta.indexOf('-') != -1){
        return true

    } 
    if(conta.indexOf('x') != -1){
        return true
    }
        
    
    if(conta.indexOf('÷') != -1){
        return true
    } 
    return false;
}



function criarListaCalculo(contas){
    const ul = $('<ul>');
    const format = "YYYY-MM-DD HH:mm:ss"
    ul.addClass('list-group');
    contas.forEach(x => {
        const conta = $('<li>');
        const user = $('<span>');
        const data = $('<span>');
        const dsConta = $('<span>');
        const resultado = $('<span>');
        const dateFormated = moment(new Date(x.data)).format(format);
        conta.addClass('list-group-item');
        user.text(`Nome: ${x.user}`);
        data.text(`Data: ${dateFormated}`);
        dsConta.text(`Conta: ${x.conta}`);
        resultado.text(`Resultado: ${x.resultado}`);
        conta.append(user);
        conta.append(data);
        conta.append(dsConta);
        conta.append(resultado);
        ul.append(conta);
    });

    $('.container').append(ul);
}

function inserirInListaCalculo(conta,nome,result){
    const format = "YYYY-MM-DD HH:mm:ss"
    const dataAtual = moment().format(format);
    const ul = $('<ul>').length == 0? $('<ul>'):$('.list-group');   
    const descricaoConta = $('<li>');
    const user = $('<span>');
    const data = $('<span>');
    const dsConta = $('<span>');
    const resultado = $('<span>');
    descricaoConta.addClass('list-group-item');
    user.text(`Nome: ${nome}`);
    data.text(`Data: ${dataAtual}`);
    dsConta.text(`Conta: ${conta}`);
    resultado.text(`Resultado: ${result}`);
    descricaoConta.append(user);
    descricaoConta.append(data);
    descricaoConta.append(dsConta);
    descricaoConta.append(resultado);
    ul.prepend(descricaoConta);
}
