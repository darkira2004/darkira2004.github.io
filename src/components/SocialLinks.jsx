import { FaGithub, FaLinkedin, FaWhatsapp, FaMailBulk } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';

export default function SocialLinks({ className = "" }) {
  const links = [
    { href: "https://github.com/darkira2004", icon: FaGithub },
    { href: "https://www.linkedin.com/in/ricardo-a-villegas-chávez-b964a0395", icon: FaLinkedin },
    { href: "https://www.facebook.com/share/19iYc8RcZW/", icon: SiFacebook },
    { href: "mailto:piscisKayser2004@gmail.com", icon: FaMailBulk },
    { href: "https://wa.me/51944107765", icon: FaWhatsapp },
  ];

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-white transition-all duration-200 hover:scale-110"
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
}
