SELECT
    c.nome_cli AS cliente,
    p.id_ped AS pedido,
    f.nome_func AS funcionario,
    pr.nome_prod AS produto,
    cp.quantidade_it AS quantidade,
    cp.preco_it AS preco_unitario,
    cp.quantidade_it * cp.preco_it AS subtotal,
    p.valor_total AS valor_total
FROM pedido AS p

INNER JOIN cliente AS c
    ON p.cliente_ped = c.id_cli

INNER JOIN funcionario AS f
    ON p.funcionario_ped = f.id_func

INNER JOIN conteudo_pedido AS cp
    ON p.id_ped = cp.pedido_it

INNER JOIN produto AS pr
    ON cp.produto_it = pr.id_prod

ORDER BY p.id_ped;
