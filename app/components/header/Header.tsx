import { Menu } from "./Menu";


export default function Header(){
    return(
        <>
            {/* @ts-expect-error Async Server Component */}
            <Menu />
        </>
    )
}