import { Phone, Mail } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="/PP_Logeshwar_Sound_Clinic_Logo-PNG.png"
              alt="PP Logeshwar Sound Clinic"
              className="h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-amber-900 hover:text-amber-700 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-amber-900 hover:text-amber-700 transition-colors font-medium">
              Benefits
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-amber-900 hover:text-amber-700 transition-colors font-medium">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-amber-900 hover:text-amber-700 transition-colors font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 font-medium">
              Book Now
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <a href="tel:+918489227254" className="text-amber-700 hover:text-amber-900">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <a href="tel:+918489227254" className="flex items-center text-amber-800 hover:text-amber-900 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              +91 84892 27254
            </a>
            <a href="mailto:admin@logeonhelios.shop" className="flex items-center text-amber-800 hover:text-amber-900 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              admin@logeonhelios.shop
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
