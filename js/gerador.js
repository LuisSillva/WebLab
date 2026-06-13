/* GERADOR.JS — gerador de senha para trabalho web lab */

document.addEventListener('DOMContentLoaded', () => {
    // Captura os elementos necessários do HTML através dos IDs
    const btnGenerate = document.getElementById('btn-generate');
    const passwordDisplay = document.getElementById('password-display');

    //  funcao responsavel por gerar a senha aleaatoria segura
    function generateSecurePassword(length = 14) {
        // 14 caracteres
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=\\';
        
        // permitir agrupamento de todos os caracteres
        const allChars = uppercase + lowercase + numbers + specialChars;
        let password = '';

        // garante que a senha contenha obrigatoriamente plmns 1 caractere de cada tipo
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialChars[Math.floor(Math.random() * specialChars.length)];

        // preence o resto da senha de  forma totalemnte aleatoria 
        for (let i = password.length; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }

        // mistura a string criada para q os 4 primeiros caracteres n fiquem na mesma ordem
        return password.split('').sort(() => 0.5 - Math.random()).join('');
    }

    // disparado quando o usuário clica no botão gerar senha
    btnGenerate.addEventListener('click', () => {
        // define o tamabho padrao
        const newPassword = generateSecurePassword(14);
        
        // bota a senha gerada dentro do campo do formulário
        passwordDisplay.value = newPassword;
    });
});