import { Produto } from "@/types/Produto"
import ProdutoItem from "./ProdutoItem"

interface ListaProdutosProps {
    produtos: Produto[];
}

export default function ProdutoLista({ produtos }: ListaProdutosProps){

  return (
    <div className="grid grid-cols-5 gap-10">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}