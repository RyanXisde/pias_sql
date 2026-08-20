CREATE TABLE IF NOT EXISTS cliente(
  id_cli INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_cli TEXT NOT NULL,
  nascimento_cli TEXT NOT NULL,
  cpf_cli TEXT NOT NULL
);
  
CREATE TABLE IF NOT EXISTS funcionario(
  id_func INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_func TEXT NOT NULL,
  area_func TEXT NOT NULL,
  telefone_func TEXT,
  cpf_func TEXT NOT NULL UNIQUE,
  data_contrato_func TEXT NOT NULL,
  salario_func REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS fornecedor(
  id_forn INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_forn TEXT NOT NULL,
  produto_forn INTEGER NOT NULL,
  preco_forn REAL NOT NULL,
  contato_forn TEXT NOT NULL,
  email_forn TEXT NOT NULL,
  
  FOREIGN KEY (produto_forn) REFERENCES produto(id_prod)
);

CREATE TABLE IF NOT EXISTS produto(
  id_prod INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_prod TEXT NOT NULL,
  preco_prod REAL NOT NULL, 
  forn_prod INTEGER NOT NULL,
  
  FOREIGN KEY (forn_prod) REFERENCES fornecedor(id_forn)
);

CREATE TABLE IF NOT EXISTS pedido(
  id_ped INTEGER PRIMARY KEY AUTOINCREMENT,
  cliente_ped INTEGER NOT NULL,
  funcionario_ped INTEGER NOT NULL,
  produto_ped TEXT NOT NULL,
  data_ped DATE NOT NULL,
  valor_total REAL NOT NULL,
  
  FOREIGN KEY (cliente_ped) REFERENCES cliente(id_cli),
  FOREIGN KEY (funcionario_ped) REFERENCES funcionario(id_func),
  FOREIGN KEY (produto_ped) REFERENCES produto(id_prod)
);
  
CREATE TABLE IF NOT EXISTS conteudo_pedido (
  id_it INTEGER PRIMARY KEY AUTOINCREMENT,
  pedido_it INTEGER NOT NULL,
  produto_it INTEGER NOT NULL,
  quantidade_it INTEGER NOT NULL,
  preco_it REAL NOT NULL,

  FOREIGN KEY (pedido_it) REFERENCES pedido(id_ped),
  FOREIGN KEY (produto_it) REFERENCES produto(id_prod)
);
