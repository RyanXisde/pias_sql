CREATE TABLE IF NOT EXISTS cliente(
  id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_cliente TEXT NOT NULL,
  nascimento_cliente DATE NOT NULL,
  cpf_cliente TEXT NOT NULL
);
  
CREATE TABLE IF NOT EXISTS funcionario(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  area TEXT NOT NULL,
  telefone TEXT NOT NULL,
  cpf TEXT NOT NULL UNIQUE,
  data_contrato TEXT NOT NULL,
  salario REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS fornecedor(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  produto INTEGER NOT NULL,
  preco REAL NOT NULL,
  contato TEXT NOT NULL,
  email TEXT NOT NULL
);

 CREATE TABLE IF NOT EXISTS pedido(
  id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
  cliente INTEGER NOT NULL,
  funcionario INTEGER NOT NULL,
  produto_pedido text not null,
  data DATE NOT NULL,
  valor_total REAL NOT NULL,
  
  FOREIGN KEY (cliente) REFERENCES cliente(id),
  FOREIGN KEY(funcionario) REFERENCES funcionario(id),
  FOREIGN KEY(produto_pedido) REFERENCES produto(id)
  );
