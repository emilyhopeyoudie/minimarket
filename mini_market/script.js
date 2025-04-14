
// script.js

// Validação do formulário de cadastro e agendamento
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const cpf = document.getElementById("cpf").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const sexoM = document.getElementById("sexoM").checked;
            const sexoF = document.getElementById("sexoF").checked;
            const endereco = document.getElementById("endereco").value.trim();
            const tipoServico = document.getElementById("tipoServico").value;
            const data = document.getElementById("data").value;
            const hora = document.getElementById("hora").value;

            if (!nome || !cpf || !email || !telefone || (!sexoM && !sexoF) || !endereco || !tipoServico || !data || !hora) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            alert(
                `Cadastro realizado com sucesso!\n` +
                `Nome: ${nome}\nE-mail: ${email}\nCPF: ${cpf}\n` +
                `Telefone: ${telefone}\nEndereço: ${endereco}\n` +
                `Tipo de Serviço: ${tipoServico}\nData: ${data} às ${hora}`
            );
            form.reset();
        });
    }
});
