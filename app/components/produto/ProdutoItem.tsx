import { Produto } from "@/types/Produto";
import Image from "next/image";
import Link from "next/link";
import BotaoComprar from "./BotaoComprar";

interface ProdutoItemProps {
    produto: Produto;
}

export default function ProdutoItem({ produto }: ProdutoItemProps){
    return(
        <div>
            <div className="border border-gray-200 rounded-md bg-white overflow-auto">
                <Link href={`/produto/${produto.id}`} key={produto.id} className="h-[200px] w-[100%]">
                    <Image src={produto.image} alt={produto.title} width={200} height={200} className="h-[200px] object-contain"  />
                </Link>
                <div className="p-3">
                <h4 className="h-[60px] text-[13px] mt-2"><b>{produto.title.substring(0, 50)}</b></h4>
                <div className="h-[60px]">
                    <small className="text-[12px] leading-none">{produto.description.substring(0, 50)}</small>
                </div>
                <p>Price: <b>${produto.price}</b></p>
                <BotaoComprar/>
                </div>
            </div>
        </div>
    )
}