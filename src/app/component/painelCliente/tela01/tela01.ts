import { Component } from '@angular/core';

@Component({
  selector: 'app-tela01',
  imports: [],
  templateUrl: './tela01.html',
  styleUrl: './tela01.css',
})
export class Tela01 {
  const lista = document.getElementById('lista-produtos');
    const pesquisa = document.getElementById('pesquisa');
    const contador = document.getElementById('contador');
    let categoriaAtual = 'Todos';
    let quantidadeCarrinho = 0;

    const dinheiro = valor => valor.toLocaleString('pt-BR', {
      style: 'currency', currency: 'BRL'
    });

    function renderizarProdutos() {
      const termo = pesquisa.value.trim().toLocaleLowerCase('pt-BR');
      const filtrados = produtos.filter(produto => {
        const correspondeCategoria = categoriaAtual === 'Todos' || produto.categoria === categoriaAtual;
        const correspondeNome = produto.nome.toLocaleLowerCase('pt-BR').includes(termo);
        return correspondeCategoria && correspondeNome;
      });

      if (filtrados.length === 0) {
        lista.innerHTML = '<p class="vazio">Nenhum item encontrado. Tente outra pesquisa.</p>';
        return;
      }

      lista.innerHTML = filtrados.map(produto => `
        <article class="produto">
          <div class="produto-topo">
            <span class="produto-categoria">${produto.categoria}</span>
            <span class="tipo">${produto.tipo}</span>
          </div>
          <h2>${produto.nome}</h2>
          <p class="descricao">${produto.descricao}</p>
          <p class="disponibilidade">${produto.disponibilidade}</p>
          <div class="produto-rodape">
            <span class="preco">${dinheiro(produto.preco)}</span>
            <button class="adicionar" type="button" data-id="${produto.id}">Adicionar</button>
          </div>
        </article>
      `).join('');
    }

    document.getElementById('filtros').addEventListener('click', evento => {
      const botao = evento.target.closest('button[data-categoria]');
      if (!botao) return;

      categoriaAtual = botao.dataset.categoria;
      document.querySelectorAll('.categoria').forEach(item => item.classList.remove('ativa'));
      botao.classList.add('ativa');
      renderizarProdutos();
    });

    pesquisa.addEventListener('input', renderizarProdutos);

    lista.addEventListener('click', evento => {
      const botao = evento.target.closest('button[data-id]');
      if (!botao) return;
      quantidadeCarrinho++;
      contador.textContent = quantidadeCarrinho;
      botao.textContent = 'Adicionado ✓';
      setTimeout(() => { botao.textContent = 'Adicionar'; }, 1000);
    });

    document.querySelector('.carrinho').addEventListener('click', () => {
      alert(`Você adicionou ${quantidadeCarrinho} item(ns) ao carrinho.`);
    });

    renderizarProdutos();
}
