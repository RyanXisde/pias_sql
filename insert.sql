INSERT INTO cliente (nome_cli, nascimento_cli, cpf_cli)
VALUES
('Ana Beatriz Martins', '2001-02-17', '284-617-395.46'),
('Joao Pedro Alves', '1998-10-05', '615-293-847.57'),
('Marina Carvalho', '2003-06-21', '738-451-926.68'),
('Felipe Rodrigues', '1997-12-09', '429-865-317.79'),
('Sofia Mendes', '2002-04-13', '851-374-629.80'),
('Vinicius Pereira', '1999-08-27', '367-915-482.91'),
('Laura Fernandes', '2000-01-31', '592-738-164.02'),
('Pedro Henrique Lima', '1996-11-18', '714-526-839.13'),
('Isadora Santos', '2004-03-07', '936-281-475.24'),
('Arthur Gabriel Costa', '2001-09-14', '258-694-731.35'),
('Nicole Ramos', '1998-05-26', '473-815-296.46'),
('Daniel Martins', '2003-10-11', '829-347-615.57'),
('Helena Oliveira', '1999-02-03', '641-928-573.68'),
('Miguel Souza', '2002-07-19', '385-716-924.79'),
('Clara Ribeiro', '1997-06-28', '917-463-285.80');

INSERT INTO funcionario
(nome_func, area_func, telefone_func, cpf_func, data_contrato_func, salario_func)
VALUES
('Ivan Ferreira', 'Administracao', '+55 45 9974-2703', '943-827-092.00', '2020-12-12', 3500.00),
('Stefani Almeida', 'Administracao', '+55 45 5956-2193', '847-934-192.12', '2020-04-10', 3500.00),
('Bruno Carvalho', 'Atendimento ao Cliente', '+55 45 9982-3417', '526-718-394.23', '2021-02-15', 2800.00),
('Amanda Ribeiro', 'Atendimento ao Cliente', '+55 45 9917-5824', '371-625-849.34', '2022-07-08', 2700.00),
('Diego Martins', 'Marketing', '+55 45 9964-7138', '694-283-517.45', '2021-09-20', 3200.00),
('Carolina Souza', 'Marketing', '+55 45 9931-4265', '815-394-726.56', '2023-01-12', 3100.00),
('Matheus Oliveira', 'Tecnologia da Informacao', '+55 45 9985-2196', '472-638-951.67', '2020-06-05', 4800.00),
('Fernanda Costa', 'Desenvolvimento Web', '+55 45 9926-8471', '739-415-628.78', '2022-03-18', 5200.00),
('Gustavo Pereira', 'Desenvolvimento Web', '+55 45 9973-1562', '286-594-731.89', '2023-08-21', 4500.00),
('Renan Barbosa', 'Financeiro', '+55 45 9914-6382', '518-729-463.90', '2021-11-03', 3900.00),
('Patricia Lima', 'Financeiro', '+55 45 9968-2754', '647-381-925.11', '2022-05-27', 3700.00),
('Eduardo Mendes', 'Logistica', '+55 45 9981-5347', '359-816-274.22', '2020-10-14', 3000.00),
('Isabela Rocha', 'Logistica', '+55 45 9923-7618', '781-245-693.33', '2023-02-06', 2900.00),
('Thiago Nunes', 'Suporte Tecnico', '+55 45 9957-4821', '924-617-385.44', '2021-04-19', 3300.00),
('Leticia Alves', 'Suporte Tecnico', '+55 45 9972-6153', '436-829-157.55', '2024-01-22', 3100.00);

INSERT INTO fornecedor
(nome_forn, produto_forn, preco_forn, contato_forn, email_forn)
VALUES
('TechDistribuidora', 1, 65.90, '+55 45 99123-4567', 'contato@techdistribuidora.com'),
('Mega Eletronicos', 2, 145.90, '+55 45 99234-5678', 'vendas@megaeletronicos.com'),
('Digital Store', 3, 99.90, '+55 45 99345-6789', 'contato@digitalstore.com'),
('InfoCenter', 4, 125.90, '+55 45 99456-7890', 'vendas@infocenter.com'),
('PC Master', 5, 649.90, '+55 45 99567-8901', 'contato@pcmaster.com'),
('Smart Tech', 6, 39.90, '+55 45 99678-9012', 'vendas@smarttech.com'),
('Eletronica Brasil', 7, 89.90, '+55 45 99789-0123', 'contato@eletronicabrasil.com'),
('Conecta Informatica', 8, 24.90, '+55 45 99890-1234', 'vendas@conectainformatica.com'),
('Mundo Digital', 9, 32.90, '+55 45 99901-2345', 'contato@mundodigital.com'),
('Tech House', 10, 229.90, '+55 45 99112-3456', 'vendas@techhouse.com'),
('Mega PC', 11, 179.90, '+55 45 99223-4567', 'contato@megapc.com'),
('Brasil Informatica', 12, 45.90, '+55 45 99334-5678', 'vendas@brasilinformatica.com'),
('Nexus Tecnologia', 13, 54.90, '+55 45 99445-6789', 'contato@nexustecnologia.com'),
('Digital Center', 14, 59.90, '+55 45 99556-7890', 'vendas@digitalcenter.com'),
('Inova Eletronicos', 15, 79.90, '+55 45 99667-8901', 'contato@inovaeletronicos.com');

INSERT INTO produto
(nome_prod, preco_prod, forn_prod)
VALUES
('Mouse Gamer RGB', 119.90, 1),
('Teclado Mecanico RGB', 249.90, 2),
('Headset Gamer', 179.90, 3),
('Webcam Full HD', 199.90, 4),
('Monitor LED 24 Polegadas', 899.90, 5),
('Mousepad Gamer Grande', 69.90, 6),
('Caixa de Som Bluetooth', 149.90, 7),
('Cabo HDMI 2.1', 49.90, 8),
('Pen Drive 64GB', 59.90, 9),
('SSD 480GB', 329.90, 10),
('Memoria RAM 16GB', 289.90, 11),
('Teclado USB', 79.90, 12),
('Adaptador USB Wi-Fi', 89.90, 13),
('Carregador USB-C', 99.90, 14),
('Suporte para Notebook', 129.90, 15);

INSERT INTO pedido
(cliente_ped, funcionario_ped, produto_ped, data_ped, valor_total)
VALUES
(1, 3, '1', '2026-08-01', 369.80),
(2, 5, '5', '2026-08-02', 899.90),
(3, 8, '3', '2026-08-03', 429.80),
(4, 2, '7', '2026-08-04', 149.90),
(5, 6, '2', '2026-08-05', 599.70),
(6, 10, '10', '2026-08-06', 329.90),
(7, 1, '2', '2026-08-07', 249.90),
(8, 4, '3', '2026-08-08', 479.80),
(9, 12, '1', '2026-08-09', 119.90),
(10, 7, '5', '2026-08-10', 949.80);

INSERT INTO conteudo_pedido
(pedido_it, produto_it, quantidade_it, preco_it)
VALUES
(1, 1, 1, 119.90),
(1, 2, 1, 249.90),

(2, 5, 1, 899.90),
(2, 8, 1, 49.90),

(3, 3, 1, 179.90),
(3, 6, 2, 69.90),

(4, 7, 1, 149.90),
(4, 9, 1, 59.90),

(5, 2, 1, 249.90),
(5, 11, 1, 289.90),

(6, 10, 1, 329.90),
(6, 13, 1, 89.90),

(7, 2, 1, 249.90),
(7, 12, 1, 79.90),

(8, 3, 1, 179.90),
(8, 4, 1, 199.90),

(9, 1, 1, 119.90),
(9, 14, 1, 99.90),

(10, 5, 1, 899.90),
(10, 8, 1, 49.90);
