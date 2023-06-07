import { ProdutoLista } from "@/app/components/produto/ProdutoLista";
import { Metadata } from "next";

type Props = {
    params: { categoria: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const categoria = params.categoria;
    return {
        title: 'Produtos | ' + categoria
    };
}

export default function ProdutosCategoriaPage({ params }: Props) {
    return (
        <div className="md:container md:mx-auto px-10">

            <h1 className="mt-10 mb-20 text-2xl">Produtos da Categoria {params.categoria}</h1>
            {/* @ts-expect-error Async Server Component */}
            <ProdutoLista categoria={params.categoria} />
        </div>
    )
}