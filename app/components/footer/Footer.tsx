import Link from "next/link";

export default function Footer(){

    interface menuItens {
        descricao: string;
        url: string;
    }

    const itens: menuItens[] = [{descricao: 'Home', url: '/'}, {descricao: 'Sobre', url: '/sobre'}];

    return(
        <div className='md:container md:mx-auto border-2 border-solid border-red-200'>
            <div className="flex justify-center gap-10 m-10">
                Footer
                {itens.map(item => 
                    <Link href={item.url}>{item.descricao}</Link>  
                )}
            </div>
        </div>
    )
}