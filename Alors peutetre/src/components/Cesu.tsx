import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check, Euro, FileText, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { WaveSeparator } from './WaveSeparator';

const advantages = [
  '50% de réduction ou crédit d\'impôt',
  'Avance immédiate du crédit d\'impôt',
  'Paiement seulement de la moitié dès le départ',
  'Gestion administrative automatique',
  'Fiche de paye générée automatiquement',
  'Déclaration URSSAF simplifiée'
];

const steps = [
  {
    icon: FileText,
    title: 'Créez votre compte',
    description: 'Inscription gratuite sur www.cesu.urssaf.fr'
  },
  {
    icon: Euro,
    title: 'Déclarez la prestation',
    description: 'Indiquez mon nom avec mon téléphone ou mon email'
  },
  {
    icon: Shield,
    title: 'Activez l\'avance immédiate',
    description: 'Bénéficiez tout de suite du crédit d\'impôt de 50%'
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Cesu() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
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
          <h2 className="mb-4 text-green-800">Prestation simple et paiement sécurisé</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pour votre tranquillité, le règlement s'effectue exclusivement par <span className="text-green-700">CESU (Chèque Emploi Service Universel)</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-green-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6">
                Le CESU permet de déclarer et de rémunérer facilement les services à domicile tout en profitant d'avantages fiscaux. En déclarant votre prestation via le CESU, vous bénéficiez de <span className="text-green-700">50 % de réduction ou crédit d'impôt</span> sur les sommes versées pour le jardinage.
              </p>
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-green-800 mb-2">
                      <strong>Grâce à l'option « Avance immédiate » du CESU</strong>, le montant à payer est immédiatement réduit :
                    </p>
                    <p className="text-green-700">
                      Vous réglez seulement la moitié du coût dès le départ et n'avez plus besoin d'attendre l'année suivante pour obtenir votre avantage fiscal.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="h-full border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-green-800">Les avantages</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {advantages.map((advantage, index) => (
                    <motion.li key={index} variants={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{advantage}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="h-full border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-green-800">Comment ça marche ?</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div key={index} variants={item} className="flex gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-green-800 mb-1">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 p-4 bg-white rounded-lg border border-green-200"
                >
                  <p className="text-gray-600 text-sm">
                    Le CESU s'occupe de toute la gestion administrative : fiche de paye, déclaration URSSAF et sécurité sociale
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="mb-4 text-white">
                  Exemple concret
                </h3>
                <p className="text-green-50 mb-4 text-lg">
                  Pour une prestation de <span className="text-2xl mx-2">100 €</span>
                </p>
                <p className="text-green-50 mb-6">
                  Avec l'avance immédiate, vous payez immédiatement : <span className="text-3xl block mt-2">50 €</span>
                </p>
              </div>
              <div className="mt-6 text-center">
                <motion.a
                  href="https://www.cesu.urssaf.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-green-100 transition-colors bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Créer mon compte CESU</span>
                  <span>→</span>
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
