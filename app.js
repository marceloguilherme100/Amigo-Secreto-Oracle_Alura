// Inicializa uma lista para armazenar os nomes
const nomes = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Campo de entrada
    const nome = input.value.trim(); // Remove espaços desnecessários

    if (nome) {
        nomes.push(nome); // Adiciona o nome à lista
        alert(`O nome "${nome}" foi adicionado!`); // Exibe um alerta
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira um nome válido.'); // Caso o nome seja inválido
    }
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    const resultado = document.getElementById('resultado'); // Elemento para exibir o resultado
    resultado.innerHTML = ''; // Limpa resultados anteriores

    if (nomes.length > 0) {
        const indiceSorteado = Math.floor(Math.random() * nomes.length); // Sorteia um índice
        const nomeSorteado = nomes[indiceSorteado]; // Obtém o nome sorteado

        // Exibe o resultado
        const itemResultado = document.createElement('li');
        itemResultado.textContent = `O amigo sorteado foi: ${nomeSorteado}`;
        resultado.appendChild(itemResultado);
    } else {
        alert('A lista está vazia. Adicione nomes antes de sortear.');
    }
}
