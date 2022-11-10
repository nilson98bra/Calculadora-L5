const url = "http://localhost:8080"

function postCalculo(nome,conta){
    $.ajax({
        type: 'POST',
        url: `${url}/conta/`,
        headers: {  'Access-Control-Allow-Origin': "*" },
        contentType: "application/json",
        data: JSON.stringify({
            nome:nome,
            conta:conta
        }),
        success: function(data) {
            const result = data.data
            alert(`Resultado: ${result}`)
            inserirInListaCalculo(conta,nome,result)     
       },
       error: function (request, status, error) {
        const erro = JSON.parse(request.responseText)
        alert(erro.data);
    }
     });
}

function getAllCalculos(){
    $.ajax({
        type: 'GET',
        url: `${url}/contas/`,
        headers: {  'Access-Control-Allow-Origin': "*" },
        contentType: "application/json",
        success: function(data) {
            criarListaCalculo(data.data)     
       },
       error: function (request, status, error) {
        const erro = JSON.parse(request.responseText)
        alert(erro.data);
    }
     });
}

