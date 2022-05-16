import {Logo} from './Logo'
import {Links} from './Links'
import {Button} from './button'
export const Navbar = ()=>{
    return(
        <div style={{width: '100%', height: '50px',display: "flex",justifyContent: "space-around",background:"black", alignItems: "center", color: "white"}}>
            <Logo/>
            <Links/>
            <Button>Contact</Button>
        </div>
    )
}