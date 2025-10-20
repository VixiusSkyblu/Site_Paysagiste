import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';
import { WaveSeparator } from './WaveSeparator';

const contactInfo = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '07 69 89 66 06',
    link: 'tel:0769896606'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'julien31280.jbc@gmail.com',
    link: 'https://mail.google.com/mail/?view=cm&to=julien31280.jbc@gmail.com'
  },
  {
    icon: MapPin,
    label: 'Zone d\'intervention',
    value: 'Lanta et environs (rayon 20 km)',
    link: 'https://www.google.com/maps/search/?api=1&query=Lanta,France'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé ! Julien vous contactera rapidement.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <WaveSeparator variant="top" color="#f9fafb" />
      
      {/* Éléments décoratifs - feuilles subtiles */}
      <div className="absolute top-20 left-10 w-24 h-24 opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 100 100" className="text-green-600" fill="currentColor">
          <ellipse cx="50" cy="35" rx="20" ry="30" transform="rotate(-15 50 35)" />
          <line x1="50" y1="65" x2="50" y2="95" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-green-800">Contactez-nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              
              // Gestion spéciale pour le téléphone : appel sur mobile, copie sur desktop
              if (info.icon === Phone && info.link) {
                const handlePhoneClick = (e: React.MouseEvent) => {
                  // Détection mobile
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  
                  if (!isMobile) {
                    e.preventDefault();
                    // Copier le numéro dans le presse-papier avec fallback
                    try {
                      // Méthode alternative compatible avec tous les navigateurs
                      const textarea = document.createElement('textarea');
                      textarea.value = info.value;
                      textarea.style.position = 'fixed';
                      textarea.style.opacity = '0';
                      document.body.appendChild(textarea);
                      textarea.select();
                      document.execCommand('copy');
                      document.body.removeChild(textarea);
                      toast.success('Numéro de téléphone copié !');
                    } catch (err) {
                      toast.error('Impossible de copier le numéro');
                    }
                  }
                  // Sur mobile, le lien tel: fonctionne normalement
                };
                
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    onClick={handlePhoneClick}
                    variants={item}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="block p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg h-full cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-green-800 mb-1">{info.label}</h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              }
              
              // Pour les autres blocs avec lien (Email, Map)
              if (info.link) {
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.icon === Mail || info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === Mail || info.icon === MapPin ? "noopener noreferrer" : undefined}
                    variants={item}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="block p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg h-full"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-green-800 mb-1">{info.label}</h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              }
              
              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg h-full"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-green-800 mb-1">{info.label}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
      </div>
    </section>
  );
}
