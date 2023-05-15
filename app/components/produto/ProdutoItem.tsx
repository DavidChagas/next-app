import { Produto } from "@/types/Produto";

interface ProdutoItemProps {
    produto: Produto;
}

export default function ProdutoItem({ produto }: ProdutoItemProps){
    return(
        <div>
            <img src={produto.image} alt={produto.title} />
            <h4><b>{produto.title}</b></h4>
            <small>{produto.description}</small>
            <p>Price: ${produto.price}</p>
        </div>
    )
}