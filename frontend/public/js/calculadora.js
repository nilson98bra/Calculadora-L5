
getAllCalculos();


$( '.numerico' ).click(function() {
    adicionarNumero(this.value);
});

$( '.operacao' ).click(function() {
   selecionarOperacao(this.value);
});


$('.parenteses').click(function(){
    adicionarParenteses(this.value);
})

$('#limpar').click(()=>{
    limparCampo();
})


$('#virgula').click(()=>{
    adicionarVirgula();
    
})

$('#apagar').click(()=>{
    apagarUltimoCaractere()
})

$('#igual').click(()=>{
    calcular();
})


