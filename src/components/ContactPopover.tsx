
import React from 'react';
import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPopover: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jontysayshi/',
      icon: Instagram,
      color: 'hover:text-pink-600'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jonty.chudasama/',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'VSCO',
      url: 'https://vsco.co/jontychudasama303/gallery',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      color: 'hover:text-gray-700'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@jontychudasama',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.969-1.166-2.18-1.166-2.18h-3.09v13.535a3.426 3.426 0 0 1-3.441 3.441c-1.897 0-3.441-1.544-3.441-3.441s1.544-3.441 3.441-3.441c.35 0 .686.063 1 .178V9.142a6.786 6.786 0 0 0-1-.07c-3.742 0-6.779 3.037-6.779 6.779s3.037 6.779 6.779 6.779 6.779-3.037 6.779-6.779V8.486a9.565 9.565 0 0 0 5.556 1.791V7.168c-1.616 0-3.091-.7-4.098-1.816z"/>
        </svg>
      ),
      color: 'hover:text-black'
    },
    {
      name: 'X',
      url: 'https://x.com/jonty46637104?s=21',
      icon: Twitter,
      color: 'hover:text-black'
    }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.div whileTap={{ scale: 1.08 }}>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
          >
            Say Hi 👋
          </Button>
        </motion.div>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4">
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors ${social.color}`}
            >
              <social.icon />
              <span className="text-sm font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactPopover;
