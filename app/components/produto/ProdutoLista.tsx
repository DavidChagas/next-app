import { Produto } from "@/types/Produto"
import ProdutoItem from "./ProdutoItem"

interface CategoriaProps {
    categoria: string;
}

export async function ProdutoLista({ categoria }: CategoriaProps){

    let produtos:Array<Produto> = [];
    
    await fetch('https://fakestoreapi.com/products/category/'+ categoria)
    .then(res=>res.json())
    .then((data) =>{
        produtos = data;
        console.log(d)
    })
    .catch(error => {
        console.error('Erro ao buscar produtos:', error);
    });

    

  return (
    <>
      <div className="grid grid-cols-5 gap-10">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}