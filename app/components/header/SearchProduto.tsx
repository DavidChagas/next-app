'use client'

export default function SearchProduto(){
    return(
       <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md px-2 shadow-sm focus:outline-none focus:border-sky-100 focus:ring-sky-100 focus:ring-1 sm:text-sm" 
       placeholder="Buscar Produtos" 
       type="text" 
       name="search"/>
    )
}