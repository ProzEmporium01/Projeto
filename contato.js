document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function(event) {
        let valid = true;
        let messages = [];

        // Validação do campo Nome
        if (nome.value.trim() === "") {
            messages.push("O nome é obrigatório.");
            valid = false;
        }

        // Validação do campo Email
        if (email.value.trim() === "") {
            messages.push("O e-mail é obrigatório.");
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            messages.push("O e-mail deve ser válido.");
            valid = false;
        }

        // Validação do campo Telefone
        if (telefone.value.trim() === "") {
            messages.push("O telefone é obrigatório.");
            valid = false;
        } else if (!/^\d{10,11}$/.test(telefone.value)) {
            messages.push("O telefone deve conter apenas números e ter 10 ou 11 dígitos.");
            valid = false;
        }

        // Validação do campo Mensagem
        if (mensagem.value.trim() === "") {
            messages.push("A mensagem é obrigatória.");
            valid = false;
        }

        // Exibe mensagens de erro, se houver, e previne o envio do formulário
        if (!valid) {
            event.preventDefault();
            alert(messages.join("\n"));
        }
    });
});
