import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/EliasSilva1702",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/elias-silva-dev", // Corregido con el https://
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconsStyles} target="_blank">
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
