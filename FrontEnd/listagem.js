document.addEventListener('DOMContentLoaded', function () {
    //const tabela = document.getElementById('tabela-produtos');
    const corpoTabela = document.getElementById('corpo-tabela');
  
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  
    if (produtos.length === 0) {
      const linha = document.createElement('tr');
      const celula = document.createElement('td');
      celula.colSpan = 2;
      celula.textContent = 'Nenhum produto cadastrado.';
      celula.style.textAlign = 'center';
      linha.appendChild(celula);
      corpoTabela.appendChild(linha);
      return;
    }
  

    produtos.sort((a, b) => a.valor - b.valor);
  
    produtos.forEach(produto => {
      const linha = document.createElement('tr');
  
      const colunaNome = document.createElement('td');
      colunaNome.textContent = produto.nome;
  
      const colunaValor = document.createElement('td');
      colunaValor.textContent = `R$ ${produto.valor.toFixed(2)}`;
  
      linha.appendChild(colunaNome);
      linha.appendChild(colunaValor);
      corpoTabela.appendChild(linha);
    });
  });
  