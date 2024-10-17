$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '12345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
        numero: {
            required: true
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})


$("#cep").blur(function(){
    var cep = this.value.replace(/[^0-9]/, "");
    if(cep.length != 8){
        return false;
    }
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.getJSON(url, function(dadosRetorno) {
        try {
            var logradouro = dadosRetorno.logradouro || '';
            var bairro = dadosRetorno.bairro || '';
            var cidade = dadosRetorno.localidade || '';
            var uf = dadosRetorno.uf || '';    
            var enderecoCompleto = `${logradouro}, ${bairro} - ${cidade}/${uf}`;

            $("#enderecoCompleto").val(enderecoCompleto);
            
        } catch (ex) {}
    });

});