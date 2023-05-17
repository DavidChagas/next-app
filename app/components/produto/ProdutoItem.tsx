import { Produto } from "@/types/Produto";
import Image from "next/image";

interface ProdutoItemProps {
    produto: Produto;
}

export default function ProdutoItem({ produto }: ProdutoItemProps){
    return(
        <div>
            <Image src={produto.image} alt={produto.title} width={300} height={300}/>
            <h4><b>{produto.title}</b></h4>
            <small>{produto.description}</small>
            <p>Price: ${produto.price}</p>
        </div>
    )
}