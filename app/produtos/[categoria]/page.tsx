import { ProdutoLista } from "@/app/components/produto/ProdutoLista";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Produtosss',
    description: 'Produtos da Categoria ',
};

export default function ProdutosCategoriaPage({ params }: { params: { categoria: string } }){
    return(
        <div className="md:container md:mx-auto px-10">
            <br></br>
            <h3>Produtos da Categoria {params.categoria}</h3>
            <br></br>
            <hr></hr>
            <br></br>
            {/* @ts-expect-error Async Server Component */}
            <ProdutoLista categoria={params.categoria} />
        </div>
    )
}