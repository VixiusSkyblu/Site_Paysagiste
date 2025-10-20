import { CheckCircle, MapPin, Phone, User } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { icon: User, value: 'Julien', label: 'Paysagiste passionné' },
  { icon: CheckCircle, value: 'Lanta', label: 'Basé à Lanta' }
];

const values = [
  'Professionnel passionné du végétal',
  'Matériel professionnel de qualité',
  'Espace extérieur soigné et naturel',
  'Service personnalisé',
  'Paiement sécurisé par CESU'
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

export function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-6 text-green-800">À propos</h2>
            <p className="text-gray-600 mb-6">
              Je m'appelle <span className="text-green-700">Julien Gonzalez</span>. Je mets ma passion du végétal à votre service sur Lanta et <span className="text-green-700">secteur lauragais</span>.
            </p>
            <p className="text-gray-600 mb-6">
              Spécialisé dans la tonte, la taille, le fauchage et l'entretien régulier, j'interviens chez les particuliers désireux d'un espace extérieur soigné, naturel et agréable.
            </p>
            <p className="text-gray-600 mb-8">
              Chaque jardin est unique et mérite le meilleur ! Confiez votre jardin à un jeune professionnel passionné, et profitez d'un service légal, sécurisé et avantageux grâce au CESU.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-lg text-center border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-green-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}