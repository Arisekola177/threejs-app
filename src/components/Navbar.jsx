import { headerLogo } from "../assets/images"
import {hamburger} from '../assets/icons'
const Navbar = () => {

    const NavLinks = [
        {name: 'Contact', path: '/contact'},
        {name: 'Shop', path: '/shop'},
        {name: 'About', path: '/about'},
        {name: 'Products', path: '/products'},
        
    ]
  return ( 
     <header className="w-full absolute z-10 py-8 font-montserrat ">
        <nav className=" w-10/12 mx-auto flex justify-between items-center  ">
          <a href="/">
           < img 
             src={headerLogo}
             alt="logo"
            className="w-[130px] h-[29px]"
           />
            
           </a>
           <div className="hidden md:flex flex-1  justify-center gap-[40px] items-center">
            {NavLinks.map((links) => (
              <ul key={links.name}>
                <li><a href={links.path}>{links.name}</a></li>
              </ul>
            ))}
           </div>
           <div>
            <h2>SignUp/Login</h2>
           </div>
           <div className="block md:hidden">
              <img  
              src={hamburger}
               alt="hamburger" 
               className="w-[100px] h-[18px]"
               />
           </div>
        </nav>
     </header>
  )
}

export default Navbar