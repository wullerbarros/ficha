// Função para adicionar comida
function adicionarComida(refeicao) {
    const horario = document.getElementById(`${refeicao}-horario`).value;
    const comida = document.getElementById(`${refeicao}-comida`).value;
    const peso = document.getElementById(`${refeicao}-peso`).value;
    const listaComidas = document.getElementById(`${refeicao}-comidas-lista`);

    if (horario && comida && peso) {
        const itemComida = document.createElement('div');
        itemComida.className = 'comida-item';
        itemComida.innerHTML = `
            <span>${horario} - ${comida} (${peso}g)</span>
        `;
        listaComidas.appendChild(itemComida);
        document.getElementById(`${refeicao}-horario`).value = '';
        document.getElementById(`${refeicao}-comida`).value = '';
        document.getElementById(`${refeicao}-peso`).value = '';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

// Função para alternar visibilidade do card-body
function alternarVisibilidade(elemento) {
    elemento.classList.toggle('collapse');
}

// Adicione event listeners para os botões de collapse
document.querySelectorAll('.collapse-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const cardBody = e.target.nextElementSibling;
        alternarVisibilidade(cardBody);
    });
});

// Adicione event listeners para os botões de adicionar comida
document.querySelectorAll('.add-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const refeicao = e.target.dataset.refeicao;
        adicionarComida(refeicao);
    });
});

// Função para alternar visibilidade do card-body
function alternarVisibilidade(elemento) {
    elemento.classList.toggle('collapse');
    }
    
    // Adicione event listeners para os botões de refeição
    document.querySelectorAll('.card-header').forEach((header) => {
    header.addEventListener('click', (e) => {
    const cardBody = e.target.nextElementSibling;
    alternarVisibilidade(cardBody);
    });
    });