'use client'

import ListaProdutos from "@/app/components/produto/ProdutoLista";
import { Produto } from "@/types/Produto";
import { Metadata } from "next";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
    title: 'Produtosss',
    description: 'Produtos da Categoria ',
};

export default function ProdutosCategoriaPage({ params }: { params: { categoria: string } }){

    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/'+ params.categoria)
        .then(res=>res.json())
        .then((data) =>{
            setProdutos(data);
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
    }, [])

    return(
        <div className="md:container md:mx-auto px-10">
            <br></br>
            <h3>Produtos da Categoria {params.categoria}</h3>
            <br></br>
            <hr></hr>
            <br></br>
            <ListaProdutos produtos={produtos} />
        </div>
    )
}