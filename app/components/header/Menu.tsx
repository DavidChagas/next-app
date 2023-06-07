import Link from 'next/link';
import SearchProduto from './SearchProduto';

export async function Menu() {
  let categorias: string[] = [];

  const response = await fetch('https://fakestoreapi.com/products/categories');
  categorias = await response.json();

  return (
    <div className='md:container md:mx-auto border-2 border-solid border-blue-300'>
      <div className="flex justify-center gap-10 m-10">
        <Link href={'/'}>HOME</Link>
        <Link href={'/produtos/todos'}>TODOS os Produtos</Link>
        {categorias.map(item => (
          <Link href={`/produtos/${item}`} key={item}>{item}</Link>
        ))}
        <SearchProduto />
      </div>
    </div>
  )
}