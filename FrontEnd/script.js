document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); 
  
        
        const nome = document.getElementById('nome').value.trim();
        const descricao = document.getElementById('descricao').value.trim();
        const valor = parseFloat(document.getElementById('valor').value);
        const disponivel = document.getElementById('disponivel').value;
  
        
        if (!nome || isNaN(valor)) {
          alert('Por favor, preencha o nome e o valor corretamente.');
          return;
        }
  
        
        const novoProduto = {
          nome,
          descricao,
          valor,
          disponivel
        };
  
        
        const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
  
        
        produtosSalvos.push(novoProduto);
  
        
        localStorage.setItem('produtos', JSON.stringify(produtosSalvos));
  
        
        window.location.href = 'listagem.html';
      });
    }
  });
  