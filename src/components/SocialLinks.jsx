import { FaGithub, FaLinkedin, FaInstagram, FaGoogleDrive, FaWhatsappSquare, FaWhatsapp, FaMailBulk, FaGoogle } from 'react-icons/fa';
import { SiFacebook, SiFigma } from 'react-icons/si';

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex gap-5  ${className} ml-8`}>
      <a href="https://github.com/darkira2004" target="_blank" rel="noopener noreferrer" className="text-[#8299b2ff] hover:text-white transition-colors hover:scale-105">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/ricardo-a-villegas-chávez-b964a0395" target="_blank" rel="noopener noreferrer" className="text-[#8299b2ff] hover:text-white transition-colors hover:scale-105">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.facebook.com/share/19iYc8RcZW/" target="_blank" rel="noopener noreferrer" className="text-[#8299b2ff] hover:text-white transition-colors hover:scale-105">
        <SiFacebook size={24} />
      </a>
      <a href="mailto:piscisKayser2004@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#8299b2ff] hover:text-white transition-colors hover:scale-105">
        <FaMailBulk size={24} />
      </a>
      <a href="https://wa.me/51944107765" target="_blank" rel="noopener noreferrer" className="text-[#8299b2ff] hover:text-white transition-colors hover:scale-105">
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
