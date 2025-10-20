import { Leaf, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-400" />
              <span>Gonzalez Espace Vert</span>
            </div>
            <p className="text-green-100">
              Paysagiste passionné à Lanta
            </p>
          </div>

          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-green-100">
              <li>Tonte de pelouse</li>
              <li>Taille de haies</li>
              <li>Fauchage</li>
              <li>Entretien régulier</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-2 text-green-100">
              <li>07 69 89 66 06</li>
              <li>julien31280.jbc@gmail.com</li>
              <li>Lanta et environs</li>
              <li>Rayon 20 km</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-green-800 text-center text-green-100">
          <p>&copy; 2024 Gonzalez Espace Vert. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
