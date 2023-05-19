import { Produto } from "@/types/Produto"
import ProdutoItem from "./ProdutoItem"
import moment from "moment";

interface CategoriaProps {
    categoria: string;
}

export async function ProdutoLista({ categoria }: CategoriaProps){

  let produtos:Array<Produto> = [];
  let formatteddatestr:any = '';
  
  await fetch('https://fakestoreapi.com/products/category/'+ categoria)
  .then(res=>res.json())
  .then((data) =>{
      produtos = data;
      formatteddatestr = moment( new Date() ).format('hh:mm:ss a');
  })
  .catch(error => {
      console.error("Erro ao buscar produtos:", error);
  });

  return (
    <>
      <i>Data atual: {formatteddatestr}</i>
      <div className="grid grid-cols-5 gap-10">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}