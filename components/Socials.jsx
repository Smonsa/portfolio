import Link from "next/link";
import {FaGithub, FaLinkedin, FaEnvelope, FaPhone,} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/ >, path:"https://github.com/Smonsa" },
    {icon: <FaLinkedin/ >, path:"https://www.linkedin.com/in/sim%C3%B3n-monsalve-294266221/" },
    {icon: <FaEnvelope/ >, path:"/contact" },
    {icon: <FaPhone/ >, path:"/contact" },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) =>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials