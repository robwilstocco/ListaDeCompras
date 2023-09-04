let descricao = document.querySelector('#descricao');
let quantidade = document.querySelector('#quantidade');
let addBtn = document.querySelector('#addBtn');
let createBtn = document.querySelector('#createBtn');
let listBtn = document.querySelector('#listBtn');
let clearBtn = document.querySelector('#clearBtn');
let listUl = document.querySelector('.content__card__list');
let listaDeItens = JSON.parse(localStorage.getItem('itens')) || [];

listaDeItens.forEach((item) => {
    adicionarItem(item.descricao, item.quantidade);
});

addBtn.addEventListener('click', () => {

    listaDeItens.push({
        'descricao': descricao.value,
        'quantidade': quantidade.value
    })
    localStorage.setItem('itens', JSON.stringify(listaDeItens));

    adicionarItem(descricao.value, quantidade.value);
})

createBtn.addEventListener('click', () => {
    toggleMenu();
})

listBtn.addEventListener('click', () => {
    toggleMenu();
})

clearBtn.addEventListener('click', () => {
    limparLista();
})

function adicionarItem(descricao,quantidade){    

    let list = document.createElement('li');
    list.classList.add('content__card__list__item');
    let input = document.createElement('input');
    input.setAttribute('type','checkbox');
    let pDescricao = document.createElement('p');
    pDescricao.innerText = descricao;
    let pQuantidade = document.createElement('p');
    pQuantidade.innerText = quantidade;

    list.appendChild(input);
    list.appendChild(pDescricao);
    list.appendChild(pQuantidade);
    listUl.appendChild(list);

    limparCampos();    
}

function limparCampos(){
    descricao.value = '';
    quantidade.value = '';
}

function limparLista(){
    listUl.innerHTML = [];
    localStorage.clear();
}

function toggleMenu(){
    let cardAdd = document.querySelector('#addCard');
    cardAdd.classList.toggle('hidden');
    createBtn.classList.toggle('active');

    let cardList = document.querySelector('#listCard');
    cardList.classList.toggle('hidden');
    listBtn.classList.toggle('active');
}
