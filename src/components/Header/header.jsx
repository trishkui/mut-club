import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import {Link} from 'react-router-dom'
import "./header.css";


function SocialContact({children}) {
return(
 <div className="header-social-contact">
  {children}
 </div>
)
}


function HeaderSocialContact(){
    return(

        <div className="header-social-contact-wrapper">
        <SocialContact>
        <FaFacebookSquare />
        <p>mut-tech-club</p> 
        </SocialContact>
           <SocialContact>
        <FaInstagramSquare />
        <p>mut-tech-club</p> 
        </SocialContact>
            <SocialContact>
            <FaTwitterSquare />
             <p>mut-tech-club</p> 
        </SocialContact>
            <SocialContact>
        <IoLogoTiktok />
        <p>mut-tech-club</p> 
        </SocialContact>
        </div>
    )
}

function HeaderNavigation(){
    return(
       <div className="header-navigation"> 
        <h1 className="logo-text">mut tech club</h1>
        <nav>
            <ul className="navigation-list">
                <li className="navigation-item"><Link  to="/"className="navigation-link">home</Link ></li>
                <li className="navigation-item"><Link  to="/leadership"className="navigation-link">leadership</Link ></li>
                <li className="navigation-item"><Link  to="/tracks"className="navigation-link">tracks</Link ></li>
                <li className="navigation-item"><Link  to="/events"className="navigation-link">events</Link ></li>

            </ul>
        </nav>
    </div>
    )
}

function Header(){
   return(
    <header>
    <HeaderSocialContact />
    <HeaderNavigation />
    </header>
   ) 
}

export default Header;