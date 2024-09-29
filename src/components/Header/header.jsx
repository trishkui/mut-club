import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
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
                <li className="navigation-item"><a href="#"className="navigation-link">home</a></li>
                <li className="navigation-item"><a href="#"className="navigation-link">leadership</a></li>
                <li className="navigation-item"><a href="#"className="navigation-link">tracks</a></li>
                <li className="navigation-item"><a href="#"className="navigation-link">events</a></li>

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