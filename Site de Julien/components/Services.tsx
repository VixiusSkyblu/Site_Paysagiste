import { Scissors, Trees, Mountain, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';
import { WaveSeparator } from './WaveSeparator';

const services = [
  {
    icon: Scissors,
    title: 'Tonte de pelouse',
    description: 'Tonte professionnelle pour un gazon parfaitement entretenu toute l\'année.'
  },
  {
    icon: Trees,
    title: 'Taille de haies',
    description: 'Taille précise de vos haies pour un rendu net et esthétique.'
  },
  {
    icon: Mountain,
    title: 'Fauchage',
    description: 'Débroussaillage et fauchage des terrains pour un entretien optimal.'
  },
  {
    icon: Calendar,
    title: 'Entretien régulier',
    description: 'Contrats d\'entretien sur mesure pour un jardin impeccable tout au long de l\'année.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <WaveSeparator variant="top" color="#ffffff" />
      
      {/* Motif décoratif subtil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(22 163 74) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-green-800">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des prestations complètes pour l'entretien de vos espaces verts
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 group">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <CardTitle className="text-green-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
