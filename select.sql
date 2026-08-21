SELECT
cliente.nome_cli AS cliente,
pedido.id_ped AS comanda,
funcionario.nome_func AS funcionario,
produto.nome_prod AS produto,
conteudo_pedido.quantidade_it AS quantidade,
pedido.valor_total AS valor_total
FROM pedido
INNER JOIN cliente ON pedido.cliente_ped = cliente.id_cli
INNER JOIN funcionario ON pedido.funcionario_ped = funcionario.id_func
INNER JOIN conteudo_pedido ON pedido.id_ped = conteudo_pedido.pedido_it
INNER JOIN produto ON conteudo_pedido.produto_it = produto.id_prod
ORDER BY pedido.id_ped;
