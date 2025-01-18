// primeiro pegar os nomes
const nomes = [];


function adicionarAmigo() {
    const input = document.getElementById('amigo'); 
    const nome = input.value.trim(); 

    if (nome) {
        nomes.push(nome); 
        alert(`O nome "${nome}" foi adicionado!`); 
        input.value = ''; 
    } else {
        alert('Por favor, insira um nome válido.'); 
    }
}


function sortearAmigo() {
    const resultado = document.getElementById('resultado'); 
    resultado.innerHTML = ''; 

    if (nomes.length > 0) {
        const indiceSorteado = Math.floor(Math.random() * nomes.length); 
        const nomeSorteado = nomes[indiceSorteado]; 

        
        const itemResultado = document.createElement('li');
        itemResultado.textContent = `O amigo sorteado foi: ${nomeSorteado}`;
        resultado.appendChild(itemResultado);
    } else {
        alert('A lista está vazia. Adicione nomes antes de sortear.');
    }
}
