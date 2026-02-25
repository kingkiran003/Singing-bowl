import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/PP_Logeshwar_Sound_Clinic_Logo-PNG.png"
              alt="PP Logeshwar Sound Clinic"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-amber-200 leading-relaxed">
              Ancient sound healing for modern wellness. Experience deep relaxation and inner peace.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Therapy</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+918489227254" className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+91 84892 27254</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@logeonhelios.shop" className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>admin@logeonhelios.shop</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Coimbatore & Beyond</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 text-center">
          <p className="text-amber-300">
            &copy; {currentYear} PP Logeshwar Sound Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
