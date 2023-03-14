// Receber os dados colocados no formulario
const formulario = document.querySelector('#formulario'); 

formulario.addEventListener('submit', function (event) {
    // impedir a página de carregar a cada envio
    event.preventDefault(); 
    // recebendo o peso e altura
    const inputPeso = event.target.querySelector('#peso'); 
    const inputAltura = event.target.querySelector('#altura'); 
     // transformando os dados em number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // validação dos dados
    if (!peso) {
        resultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        resultado('Altura inválida', false);
        return;
    }

    // constante imc recebe o resultado do calculo
    const imc = calculoImc(peso, altura);
    // nivelImc recebe em qual nivel esta o imc
    const nivelImc = tabelaImc(imc);
    // mostra ao usuario o resultado
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    resultado(msg, true);
});

// função para descobrir o nivel do imc
function tabelaImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// função para descobrir o imc
function calculoImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função o paragrafo que sera exibido o resultado
function criaP() {
    const p = document.createElement('p');
    return p;
}

// função para mostrar o resultado
function resultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;
    const p = criaP();

    // validaçao do resultado
    if (isValid) {
        p.classList.add('paragrafoResultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}
