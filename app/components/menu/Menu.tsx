import Link from 'next/link';

export default async function Menu() {
  let categorias:[] = [];

  const response = await fetch('https://fakestoreapi.com/products/categories');
  categorias = await response.json();
  
   return (
    <div className='md:container md:mx-auto border-2 border-solid border-blue-300'>
      <div className="flex justify-center gap-10 m-10">
        {categorias.map(item => (
            <Link href={`/produtos/${item}`} key={item}>{item}</Link>
        ))}
      </div>
    </div>
  )
}