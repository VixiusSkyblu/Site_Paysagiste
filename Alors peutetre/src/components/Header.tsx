import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-green-800">Gonzalez Espace Vert</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('realisations')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 hover:bg-green-700"
            >
              Me contacter
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-green-600 transition-colors text-left"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('realisations')}
              className="text-gray-700 hover:text-green-600 transition-colors text-left"
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="text-gray-700 hover:text-green-600 transition-colors text-left"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors text-left"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 hover:bg-green-700 w-full"
            >
              Me contacter
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
