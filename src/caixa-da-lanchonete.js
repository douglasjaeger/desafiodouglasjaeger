class CaixaDaLanchonete {

    calcularValorDaCompra(formaDePagamento, itens) {
        return "";
    }
    
}

const itens = {
    "cafe": {
      "descricao": "Café",
      "valor": 3.00
    },
    "chantily": {
      "descricao": "Chantily (extra do Café)",
      "valor": 1.50
    },
    "suco": {
      "descricao": "Suco Natural",
      "valor": 6.20
    },
    "sanduiche": {
      "descricao": "Sanduíche",
      "valor": 6.50
    },
    "queijo": {
      "descricao": "Queijo (extra do Sanduíche)",
      "valor": 2.00
    },
    "salgado": {
      "descricao": "Salgado",
      "valor": 7.25
    },
    "combo1": {
      "descricao": "1 Suco e 1 Sanduíche",
      "valor": 9.50
    },
    "combo2": {
      "descricao": "1 Café e 1 Sanduíche",
      "valor": 7.50
    }
  };
  
  function calcularValorTotal(itens) {
    let valorTotal = 0;
    for (let item of itens) {
      valorTotal += item.quantidade * item.valor;
    }
    return valorTotal;
  }
  
  function formaDePagamento(valorTotal, formaPagamento) {
    if (formaPagamento === "dinheiro") {
      return valorTotal - (valorTotal * 5 / 100);
    } else if (formaPagamento === "credito") {
      return valorTotal + (valorTotal * 3 / 100);
    } else {
      return valorTotal;
    }
  }
  
  function validarItem(item) {
    if (!menu.hasOwnProperty(item.codigo)) {
      return false;
    }
    if (item.quantidade <= 0) {
      return false;
    }
    return true;
  }
  
  function validarPedido(itens) {
    for (let item of itens) {
      if (!validarItem(item)) {
        return false;
      }
    }
    return true;
  }


export { CaixaDaLanchonete };
