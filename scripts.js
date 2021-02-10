const Modal= {
     open() {
          // Abrir modal
          // Adicionar a class active ao modal
          document
          .querySelector('.modal-overlay')
          .classList
          .add('active')
     
     },
     close() {
         // fechar o modal
         // remover a class active do modal
         document
         .querySelector('.modal-overlay')
          .classList
          .remove('active')
     }
     //toogle()
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
  }, 
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021'
  }, 
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
  }
]

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saídas
  },
  total() {
    // entradas - saídas
  }
}

// Substituir os dados do HTML com os dados JS

const DOM = {
  innerHTMLTransaction() {
    
    const html = `
    <tr>
      <td class="date">Luz</td>
      <td class="expense">R$ 500</td>
      <td class="date">23/01/2021</td>
      <td>
          <img src="./assets/minus.svg" alt="Remover transação">
      </td>
    </tr> 
    `
  }
}