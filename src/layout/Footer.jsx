import { Github, Linkedin, Youtube, Heart } from "lucide-react";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const socialLinks = [
  { icon: Github, href: "https://github.com/onayemi", label: "GitHub" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@RemlexTechTv",
    label: "Youtube",
  },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              {/* PM<span className="text-primary">.</span> */}
              <img src="./logo.png" width={250} height={50} />
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Onayemi Samuel. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <FloatingWhatsApp
        phoneNumber="+2348061313253" // Replace with your WhatsApp number
        accountName="Onayemi Samuel"
        chatMessage="Hello there! 👋 How can we help?"
        statusMessage="Typically replies within 5 minutes"
        notification={true} // Show notification dot
        notificationSound={true} // Play notification sound
        notificationSoundSrc="/sound/whatsapp-notification.mp3"
        avatar="./sam_pic.png" // Optional: path to your avatar image
        darkMode={false} // Or true for dark mode
        allowClickAway
        // Add more props as needed from the library's documentation
      />
    </footer>
  );
};
