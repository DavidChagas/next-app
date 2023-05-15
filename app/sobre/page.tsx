import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Welcome to About',
  };

export default function Sobre(){
    return(
        <div className='md:container md:mx-auto'>
            <h3>Sobre</h3>
        </div>
    )
}